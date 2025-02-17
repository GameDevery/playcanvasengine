import { math } from './math.js';

/**
 * @import { Color } from './color.js'
 */

let checkRange = 5;
const oneDiv255 = 1 / 255;
const floatView = new Float32Array(1);
const int32View = new Int32Array(floatView.buffer);

/**
 * Utility static class providing functionality to pack float values to various storage
 * representations.
 *
 * @category Math
 */
class FloatPacking {
    /**
     * Packs a float to a 16-bit half-float representation used by the GPU.
     *
     * @param {number} value - The float value to pack.
     * @returns {number} The packed value.
     */
    static float2Half(value) {
        // based on https://esdiscuss.org/topic/float16array
        // This method is faster than the OpenEXR implementation (very often
        // used, eg. in Ogre), with the additional benefit of rounding, inspired
        // by James Tursa?s half-precision code.
        floatView[0] = value;
        const x = int32View[0];

        let bits = (x >> 16) & 0x8000; // Get the sign
        let m = (x >> 12) & 0x07ff; // Keep one extra bit for rounding
        const e = (x >> 23) & 0xff; // Using int is faster here

        // If zero, or denormal, or exponent underflows too much for a denormal half, return signed zero.
        if (e < 103) {
            return bits;
        }

        // If NaN, return NaN. If Inf or exponent overflow, return Inf.
        if (e > 142) {
            bits |= 0x7c00;

            // If exponent was 0xff and one mantissa bit was set, it means NaN,
            // not Inf, so make sure we set one mantissa bit too.
            bits |= ((e === 255) ? 0 : 1) && (x & 0x007fffff);
            return bits;
        }

        // If exponent underflows but not too much, return a denormal
        if (e < 113) {
            m |= 0x0800;

            // Extra rounding may overflow and set mantissa to 0 and exponent to 1, which is OK.
            bits |= (m >> (114 - e)) + ((m >> (113 - e)) & 1);
            return bits;
        }

        bits |= ((e - 112) << 10) | (m >> 1);

        // Extra rounding. An overflow will set mantissa to 0 and increment the exponent, which is OK.
        bits += m & 1;
        return bits;
    }

    /**
     * Packs a float value in [0..1) range to specified number of bytes and stores them in an array
     * with start offset. Based on: https://aras-p.info/blog/2009/07/30/encoding-floats-to-rgba-the-final/
     * Note: calls to Math.round are only needed on iOS. Precision is somehow really bad without
     * it. Looks like an issue with their implementation of Uint8ClampedArray.
     *
     * @param {number} value - The float value to pack.
     * @param {Uint8ClampedArray} array - The array to store the packed value in.
     * @param {number} offset - The start offset in the array to store the packed value at.
     * @param {number} numBytes - The number of bytes to pack the value to.
     *
     * @ignore
     */
    static float2Bytes(value, array, offset, numBytes) {
        const enc1 = (255.0 * value) % 1;
        array[offset + 0] = Math.round(((value % 1) - oneDiv255 * enc1) * 255);

        if (numBytes > 1) {
            const enc2 = (65025.0 * value) % 1;
            array[offset + 1] = Math.round((enc1 - oneDiv255 * enc2) * 255);

            if (numBytes > 2) {
                const enc3 = (16581375.0 * value) % 1;
                array[offset + 2] = Math.round((enc2 - oneDiv255 * enc3) * 255);

                if (numBytes > 3) {
                    array[offset + 3] = Math.round(enc3 * 255);
                }
            }
        }
    }

    /**
     * Packs a float into specified number of bytes. Min and max range for the float is specified,
     * allowing the float to be normalized to 0..1 range.
     *
     * @param {number} value - The float value to pack.
     * @param {Uint8ClampedArray} array - The array to store the packed value in.
     * @param {number} offset - The start offset in the array to store the packed value at.
     * @param {number} min - Range minimum.
     * @param {number} max - Range maximum.
     * @param {number} numBytes - The number of bytes to pack the value to.
     *
     * @ignore
     */
    static float2BytesRange(value, array, offset, min, max, numBytes) {
        // #if _DEBUG
        if (value < min || value > max) {
            if (checkRange) {
                checkRange--;
                console.warn('float2BytesRange - value to pack is out of specified range.');
            }
        }
        // #endif

        value = math.clamp((value - min) / (max - min), 0, 1);
        FloatPacking.float2Bytes(value, array, offset, numBytes);
    }

    /**
     * Converts bits of a 32-bit float into RGBA8 format and stores the result in a provided color.
     * The float can be reconstructed in shader using the uintBitsToFloat instruction.
     *
     * @param {number} value - The float value to convert.
     * @param {Color} data - The color to store the RGBA8 packed value in.
     *
     * @ignore
     */
    static float2RGBA8(value, data) {
        floatView[0] = value;
        const intBits = int32View[0];
        data.r = ((intBits >> 24) & 0xFF) / 255.0;
        data.g = ((intBits >> 16) & 0xFF) / 255.0;
        data.b = ((intBits >> 8) & 0xFF) / 255.0;
        data.a = (intBits & 0xFF) / 255.0;
    }
}

export { FloatPacking };
