import{bo as r}from"./bjs-scene9.js";import"./bjs-scene9-helperFunctions-BZC5DOIf.js";import"./bjs-scene9-hdrFilteringFunctions-C_VO90YQ.js";import"./bjs-scene9-pbrBRDFFunctions-BrTMHtGB.js";const e="hdrFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform float alphaG;uniform samplerCube inputTexture;uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=radiance(alphaG,inputTexture,direction,vFilteringInfo);gl_FragColor=vec4(color*hdrScale,1.0);}`;r.ShadersStore[e]||(r.ShadersStore[e]=i);const l={name:e,shader:i};export{l as hdrFilteringPixelShader};
