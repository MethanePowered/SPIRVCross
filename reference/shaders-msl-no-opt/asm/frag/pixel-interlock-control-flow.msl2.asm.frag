#pragma clang diagnostic ignored "-Wmissing-prototypes"
#pragma clang diagnostic ignored "-Wmissing-braces"
#pragma clang diagnostic ignored "-Wunused-variable"

#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

template<typename T, size_t Num>
struct spvUnsafeArray
{
    T elements[Num ? Num : 1];
    
    thread T& operator [] (size_t pos) thread
    {
        return elements[pos];
    }
    constexpr const thread T& operator [] (size_t pos) const thread
    {
        return elements[pos];
    }
    
    device T& operator [] (size_t pos) device
    {
        return elements[pos];
    }
    constexpr const device T& operator [] (size_t pos) const device
    {
        return elements[pos];
    }
    
    constexpr const constant T& operator [] (size_t pos) const constant
    {
        return elements[pos];
    }
    
    threadgroup T& operator [] (size_t pos) threadgroup
    {
        return elements[pos];
    }
    constexpr const threadgroup T& operator [] (size_t pos) const threadgroup
    {
        return elements[pos];
    }
};

struct SSBO1
{
    spvUnsafeArray<uint, 1> values1;
};

struct _12
{
    spvUnsafeArray<uint, 1> _m0;
};

struct SSBO0
{
    spvUnsafeArray<uint, 1> values0;
};

static inline __attribute__((always_inline))
void callee2(thread float4& gl_FragCoord, device SSBO1& v_7)
{
    int _44 = int(gl_FragCoord.x);
    v_7.values1[_44]++;
}

static inline __attribute__((always_inline))
void callee(thread float4& gl_FragCoord, device SSBO1& v_7, device SSBO0& v_9)
{
    int _52 = int(gl_FragCoord.x);
    v_9.values0[_52]++;
    callee2(gl_FragCoord, v_7);
    if (true)
    {
    }
}

static inline __attribute__((always_inline))
void _35(thread float4& gl_FragCoord, device _12& v_13)
{
    v_13._m0[int(gl_FragCoord.x)] = 4u;
}

fragment void main0(device SSBO1& v_7 [[buffer(0), raster_order_group(0)]], device _12& v_13 [[buffer(1)]], device SSBO0& v_9 [[buffer(2), raster_order_group(0)]], float4 gl_FragCoord [[position]])
{
    callee(gl_FragCoord, v_7, v_9);
    _35(gl_FragCoord, v_13);
}
