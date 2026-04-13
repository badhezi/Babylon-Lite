import{a6 as e}from"./bjs-scene1.js";const a="meshUboDeclaration",i=`#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`;e.IncludesShadersStore[a]||(e.IncludesShadersStore[a]=i);const r="mainUVVaryingDeclaration",n=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;e.IncludesShadersStore[r]||(e.IncludesShadersStore[r]=n);
