import { Shaders, GLSL } from 'gl-react';

export const SHADERS = Shaders.create({
  blue: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform float blue;
    void main() {
      gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
    }`
  },
  random: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    float random (vec2 uv) {
      return fract(sin(dot(uv, vec2(12.9898,78.233))) * 43758.3453);
    }
    // i
    void main() {
      gl_FragColor = vec4(vec3(step(0.5, random(uv))), 1.0);
    }`
  },

  gameOfLife: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D state;
      uniform float wWidth;
      uniform float wHeight;
      void main() {
        //float c = 1.0 / size;
        float prev = step(0.5, texture2D(state, uv).r);
        float sum = 0.0;
        for (float y = -1.0; y <= 1.0; y++){
          for (float x = -1.0; x <= 1.0; x++){
            sum += step(0.5, texture2D(state, uv + vec2(x, y)*vec2(1.0/wWidth, 1.0/wHeight)).r);
          }
        }
        //if( step(0.5, texture2D(state, uv)).r == 1.0 )gl_FragColor = vec4(1,0,0,1);
        //else if(texture2D(state, uv).rgb == vec3(1.0,0.0,0.0) ) gl_FragColor = vec4(vec3(1.0), 1.0);
        //else{
        float newState = prev == 1.0 && sum >= 3.0 && sum <= 4.0 || prev == 0.0 && sum == 3.0 ? 1.0 : 0.0;
        /*float newState = 0.0;
        if (prev == 1.0) {
          if (sum == 3.0 || sum == 4.0) newState = 1.0;
        } else {
         if (sum == 3.0) newState = 1.0;
        }*/
        gl_FragColor = vec4(vec3(newState), 1.0);
        //gl_FragColor = vec4(uv, time, 1);
        //gl_FragColor = vec4(0,0,0,1);
    }`
  },  
});
