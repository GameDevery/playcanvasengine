import {
    PIXELFORMAT_A8, PIXELFORMAT_L8, PIXELFORMAT_LA8, PIXELFORMAT_RGB565, PIXELFORMAT_RGBA5551, PIXELFORMAT_RGBA4,
    PIXELFORMAT_RGB8, PIXELFORMAT_RGBA8, PIXELFORMAT_DXT1, PIXELFORMAT_DXT3, PIXELFORMAT_DXT5,
    PIXELFORMAT_RGB16F, PIXELFORMAT_RGBA16F, PIXELFORMAT_RGB32F, PIXELFORMAT_RGBA32F, PIXELFORMAT_R32F, PIXELFORMAT_DEPTH,
    PIXELFORMAT_DEPTHSTENCIL, PIXELFORMAT_111110F, PIXELFORMAT_SRGB8, PIXELFORMAT_SRGBA8, PIXELFORMAT_ETC1,
    PIXELFORMAT_ETC2_RGB, PIXELFORMAT_ETC2_RGBA, PIXELFORMAT_PVRTC_2BPP_RGB_1, PIXELFORMAT_PVRTC_2BPP_RGBA_1,
    PIXELFORMAT_PVRTC_4BPP_RGB_1, PIXELFORMAT_PVRTC_4BPP_RGBA_1, PIXELFORMAT_ASTC_4x4, PIXELFORMAT_ATC_RGB,
    PIXELFORMAT_ATC_RGBA, PIXELFORMAT_BGRA8, PIXELFORMAT_R8I, PIXELFORMAT_R8U, PIXELFORMAT_R16I, PIXELFORMAT_R16U,
    PIXELFORMAT_R32I, PIXELFORMAT_R32U, PIXELFORMAT_RG16I, PIXELFORMAT_RG16U, PIXELFORMAT_RG32I, PIXELFORMAT_RG32U,
    PIXELFORMAT_RG8I, PIXELFORMAT_RG8U, PIXELFORMAT_RGBA16I, PIXELFORMAT_RGBA16U, PIXELFORMAT_RGBA32I, PIXELFORMAT_RGBA32U,
    PIXELFORMAT_RGBA8I, PIXELFORMAT_RGBA8U, PIXELFORMAT_R16F, PIXELFORMAT_RG16F, PIXELFORMAT_R8, PIXELFORMAT_RG8,
    PIXELFORMAT_DXT1_SRGB, PIXELFORMAT_DXT3_SRGBA, PIXELFORMAT_DXT5_SRGBA,
    PIXELFORMAT_ETC2_SRGB, PIXELFORMAT_ETC2_SRGBA, PIXELFORMAT_SBGRA8,
    PIXELFORMAT_BC6F, PIXELFORMAT_BC6UF, PIXELFORMAT_BC7, PIXELFORMAT_BC7_SRGBA,
    PIXELFORMAT_ASTC_4x4_SRGB,
    PIXELFORMAT_DEPTH16
} from '../constants.js';

// map of PIXELFORMAT_*** to GPUTextureFormat
export const gpuTextureFormats = [];
gpuTextureFormats[PIXELFORMAT_A8] = '';
gpuTextureFormats[PIXELFORMAT_L8] = '';
gpuTextureFormats[PIXELFORMAT_LA8] = '';
gpuTextureFormats[PIXELFORMAT_R8] = 'r8unorm';
gpuTextureFormats[PIXELFORMAT_RG8] = 'rg8unorm';
gpuTextureFormats[PIXELFORMAT_RGB565] = '';
gpuTextureFormats[PIXELFORMAT_RGBA5551] = '';
gpuTextureFormats[PIXELFORMAT_RGBA4] = '';
gpuTextureFormats[PIXELFORMAT_RGB8] = 'rgba8unorm';
gpuTextureFormats[PIXELFORMAT_RGBA8] = 'rgba8unorm';
gpuTextureFormats[PIXELFORMAT_DXT1] = 'bc1-rgba-unorm';
gpuTextureFormats[PIXELFORMAT_DXT3] = 'bc2-rgba-unorm';
gpuTextureFormats[PIXELFORMAT_DXT5] = 'bc3-rgba-unorm';
gpuTextureFormats[PIXELFORMAT_RGB16F] = '';
gpuTextureFormats[PIXELFORMAT_RGBA16F] = 'rgba16float';
gpuTextureFormats[PIXELFORMAT_R16F] = 'r16float';
gpuTextureFormats[PIXELFORMAT_RG16F] = 'rg16float';
gpuTextureFormats[PIXELFORMAT_RGB32F] = '';
gpuTextureFormats[PIXELFORMAT_RGBA32F] = 'rgba32float';
gpuTextureFormats[PIXELFORMAT_R32F] = 'r32float';
gpuTextureFormats[PIXELFORMAT_DEPTH] = 'depth32float';
gpuTextureFormats[PIXELFORMAT_DEPTH16] = 'depth16unorm';
gpuTextureFormats[PIXELFORMAT_DEPTHSTENCIL] = 'depth24plus-stencil8';
gpuTextureFormats[PIXELFORMAT_111110F] = 'rg11b10ufloat';
gpuTextureFormats[PIXELFORMAT_SRGB8] = '';
gpuTextureFormats[PIXELFORMAT_SRGBA8] = 'rgba8unorm-srgb';
gpuTextureFormats[PIXELFORMAT_ETC1] = '';
gpuTextureFormats[PIXELFORMAT_ETC2_RGB] = 'etc2-rgb8unorm';
gpuTextureFormats[PIXELFORMAT_ETC2_RGBA] = 'etc2-rgba8unorm';
gpuTextureFormats[PIXELFORMAT_PVRTC_2BPP_RGB_1] = '';
gpuTextureFormats[PIXELFORMAT_PVRTC_2BPP_RGBA_1] = '';
gpuTextureFormats[PIXELFORMAT_PVRTC_4BPP_RGB_1] = '';
gpuTextureFormats[PIXELFORMAT_PVRTC_4BPP_RGBA_1] = '';
gpuTextureFormats[PIXELFORMAT_ASTC_4x4] = 'astc-4x4-unorm';
gpuTextureFormats[PIXELFORMAT_ATC_RGB] = '';
gpuTextureFormats[PIXELFORMAT_ATC_RGBA] = '';
gpuTextureFormats[PIXELFORMAT_BGRA8] = 'bgra8unorm';
gpuTextureFormats[PIXELFORMAT_SBGRA8] = 'bgra8unorm-srgb';
gpuTextureFormats[PIXELFORMAT_R8I] = 'r8sint';
gpuTextureFormats[PIXELFORMAT_R8U] = 'r8uint';
gpuTextureFormats[PIXELFORMAT_R16I] = 'r16sint';
gpuTextureFormats[PIXELFORMAT_R16U] = 'r16uint';
gpuTextureFormats[PIXELFORMAT_R32I] = 'r32sint';
gpuTextureFormats[PIXELFORMAT_R32U] = 'r32uint';
gpuTextureFormats[PIXELFORMAT_RG8I] = 'rg8sint';
gpuTextureFormats[PIXELFORMAT_RG8U] = 'rg8uint';
gpuTextureFormats[PIXELFORMAT_RG16I] = 'rg16sint';
gpuTextureFormats[PIXELFORMAT_RG16U] = 'rg16uint';
gpuTextureFormats[PIXELFORMAT_RG32I] = 'rg32sint';
gpuTextureFormats[PIXELFORMAT_RG32U] = 'rg32uint';
gpuTextureFormats[PIXELFORMAT_RGBA8I] = 'rgba8sint';
gpuTextureFormats[PIXELFORMAT_RGBA8U] = 'rgba8uint';
gpuTextureFormats[PIXELFORMAT_RGBA16I] = 'rgba16sint';
gpuTextureFormats[PIXELFORMAT_RGBA16U] = 'rgba16uint';
gpuTextureFormats[PIXELFORMAT_RGBA32I] = 'rgba32sint';
gpuTextureFormats[PIXELFORMAT_RGBA32U] = 'rgba32uint';
gpuTextureFormats[PIXELFORMAT_BC6F] = 'bc6h-rgb-float';
gpuTextureFormats[PIXELFORMAT_BC6UF] = 'bc6h-rgb-ufloat';
gpuTextureFormats[PIXELFORMAT_BC7] = 'bc7-rgba-unorm';

// compressed sRGB formats ----
gpuTextureFormats[PIXELFORMAT_DXT1_SRGB] = 'bc1-rgba-unorm-srgb';
gpuTextureFormats[PIXELFORMAT_DXT3_SRGBA] = 'bc2-rgba-unorm-srgb';
gpuTextureFormats[PIXELFORMAT_DXT5_SRGBA] = 'bc3-rgba-unorm-srgb';
gpuTextureFormats[PIXELFORMAT_ETC2_SRGB] = 'etc2-rgb8unorm-srgb';
gpuTextureFormats[PIXELFORMAT_ETC2_SRGBA] = 'etc2-rgba8unorm-srgb';
gpuTextureFormats[PIXELFORMAT_BC7_SRGBA] = 'bc7-rgba-unorm-srgb';
gpuTextureFormats[PIXELFORMAT_ASTC_4x4_SRGB] = 'astc-4x4-unorm-srgb';
