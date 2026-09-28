"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface GradientWaveProps {
  className?: string;
  colors?: string[];
  noiseSpeed?: number;
  deform?: {
    incline?: number;
    noiseAmp?: number;
    noiseFlow?: number;
  };
}

const VERT = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform vec3 u_color4;
uniform float u_incline;
uniform float u_noiseAmp;
uniform float u_noiseFlow;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  float t = u_time * u_noiseFlow;

  vec2 pos = st * 1.5;
  pos.y += st.x * u_incline;

  float n1 = snoise(pos + vec2(t * 0.1, t * 0.15)) * (u_noiseAmp / 400.0);
  float n2 = snoise(pos * 2.0 - vec2(t * 0.2, -t * 0.1)) * (u_noiseAmp / 800.0);

  float wave = clamp(st.y + n1 + n2, 0.0, 1.0);

  vec3 color = mix(u_color1, u_color2, smoothstep(0.0, 0.35, wave));
  color = mix(color, u_color3, smoothstep(0.35, 0.7, wave));
  color = mix(color, u_color4, smoothstep(0.7, 1.0, wave));

  gl_FragColor = vec4(color, 1.0);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const sanitized = hex.replace("#", "");
  const num = parseInt(sanitized, 16);
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export const GradientWave: React.FC<GradientWaveProps> = ({
  className,
  colors,
  noiseSpeed = 0.000008,
  deform = { incline: 0.4, noiseAmp: 220, noiseFlow: 4.5 },
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Very soft, subtle light orange gradient palette for Kenya
  const activeColors = colors || ["#ffffff", "#fffaf5", "#ffede0", "#ffdcc2"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    const vert = compileShader(gl, gl.VERTEX_SHADER, VERT);
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const loc = {
      res: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      c1: gl.getUniformLocation(program, "u_color1"),
      c2: gl.getUniformLocation(program, "u_color2"),
      c3: gl.getUniformLocation(program, "u_color3"),
      c4: gl.getUniformLocation(program, "u_color4"),
      inc: gl.getUniformLocation(program, "u_incline"),
      amp: gl.getUniformLocation(program, "u_noiseAmp"),
      flow: gl.getUniformLocation(program, "u_noiseFlow"),
    };

    let animationFrameId: number;
    let startTime = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const w = Math.max(1, Math.floor(width * dpr));
      const h = Math.max(1, Math.floor(height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(loc.res, w, h);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const render = (now: number) => {
      const elapsed = (now - startTime) * noiseSpeed * 1000;
      gl.uniform1f(loc.time, elapsed);

      const [r1, g1, b1] = hexToRgb(activeColors[0]);
      const [r2, g2, b2] = hexToRgb(activeColors[1]);
      const [r3, g3, b3] = hexToRgb(activeColors[2]);
      const [r4, g4, b4] = hexToRgb(activeColors[3]);

      gl.uniform3f(loc.c1, r1, g1, b1);
      gl.uniform3f(loc.c2, r2, g2, b2);
      gl.uniform3f(loc.c3, r3, g3, b3);
      gl.uniform3f(loc.c4, r4, g4, b4);

      gl.uniform1f(loc.inc, deform.incline ?? 0.4);
      gl.uniform1f(loc.amp, deform.noiseAmp ?? 220);
      gl.uniform1f(loc.flow, deform.noiseFlow ?? 4.5);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, [activeColors, noiseSpeed, deform]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
};
