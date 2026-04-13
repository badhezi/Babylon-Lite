import{a6 as r}from"./bjs-scene9.js";const e="rgbdEncodePixelShader",a=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`;r.ShadersStore[e]||(r.ShadersStore[e]=a);const t={name:e,shader:a};export{t as rgbdEncodePixelShader};
