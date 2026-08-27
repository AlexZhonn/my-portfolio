"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const WORD = "Alex";
const LETTER_COUNT = 40;
const SUCK_DURATION = 0.4;
const FORMED_DURATION = 1.5;
const RELEASE_DURATION = 0.3;
const LETTER_SPACING = 0.8;
const HIT_RADIUS = 0.6;

interface SuckGroup {
  followCursor: boolean;
  centerX: number;
  centerY: number;
}

interface LetterData {
  mesh: THREE.Mesh;
  char: string;
  charIndex: number;
  baseX: number;
  speed: number;
  driftAmp: number;
  driftFreq: number;
  driftPhase: number;
  baseOpacity: number;
  suckState: "free" | "sucking" | "formed" | "releasing";
  suckStartTime: number;
  suckOriginX: number;
  suckOriginY: number;
  suckOriginRotation: number;
  suckGroup: SuckGroup | null;
  suckOffsetX: number;
}

export default function SnowText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const currentMouseWorld = new THREE.Vector3();
    const letters: LetterData[] = [];
    let animationId = 0;
    let lastTime = performance.now() / 1000;
    let elapsed = 0;
    let hoverCooldown = 0;
    let disposed = false;

    // --- helpers ---

    function screenToWorld(clientX: number, clientY: number): THREE.Vector3 {
      const rect = container.getBoundingClientRect();
      const mx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const my = -((clientY - rect.top) / rect.height) * 2 + 1;
      const vec = new THREE.Vector3(mx, my, 0.5);
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      const dist = -camera.position.z / dir.z;
      return camera.position.clone().add(dir.multiplyScalar(dist));
    }

    function createLetterTexture(char: string): THREE.CanvasTexture {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#9ca3af";
      ctx.font = "80px 'Bubblegum Sans'";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(char, 64, 64);
      return new THREE.CanvasTexture(canvas);
    }

    function findClosestFree(
      charIndex: number,
      x: number,
      y: number,
      exclude: Set<LetterData>
    ): LetterData | null {
      let best: LetterData | null = null;
      let bestDist = Infinity;
      for (const l of letters) {
        if (l.charIndex !== charIndex || l.suckState !== "free" || exclude.has(l))
          continue;
        const dx = l.mesh.position.x - x;
        const dy = l.mesh.position.y - y;
        const dist = dx * dx + dy * dy;
        if (dist < bestDist) {
          bestDist = dist;
          best = l;
        }
      }
      return best;
    }

    function triggerSuck(hoveredLetter: LetterData, worldX: number, worldY: number) {
      const isA = hoveredLetter.charIndex === 0;

      let formX: number, formY: number;
      if (isA) {
        formX = worldX;
        formY = worldY;
      } else {
        formX = (Math.random() - 0.5) * 10;
        formY = (Math.random() - 0.5) * 6;
      }

      const group: SuckGroup = {
        followCursor: isA,
        centerX: formX,
        centerY: formY,
      };

      const totalWidth = (WORD.length - 1) * LETTER_SPACING;
      const used = new Set<LetterData>();
      used.add(hoveredLetter);

      const ci = hoveredLetter.charIndex;
      hoveredLetter.suckState = "sucking";
      hoveredLetter.suckStartTime = elapsed;
      hoveredLetter.suckOriginX = hoveredLetter.mesh.position.x;
      hoveredLetter.suckOriginY = hoveredLetter.mesh.position.y;
      hoveredLetter.suckOriginRotation = hoveredLetter.mesh.rotation.z;
      hoveredLetter.suckGroup = group;
      hoveredLetter.suckOffsetX = -totalWidth / 2 + ci * LETTER_SPACING;

      for (let i = 0; i < WORD.length; i++) {
        if (i === ci) continue;
        const partner = findClosestFree(i, worldX, worldY, used);
        if (!partner) continue;
        used.add(partner);

        partner.suckState = "sucking";
        partner.suckStartTime = elapsed;
        partner.suckOriginX = partner.mesh.position.x;
        partner.suckOriginY = partner.mesh.position.y;
        partner.suckOriginRotation = partner.mesh.rotation.z;
        partner.suckGroup = group;
        partner.suckOffsetX = -totalWidth / 2 + i * LETTER_SPACING;
      }
    }

    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }
    function easeInCubic(t: number): number {
      return t * t * t;
    }

    // --- mouse ---

    function onMouseMove(event: MouseEvent) {
      currentMouseWorld.copy(screenToWorld(event.clientX, event.clientY));

      for (const letter of letters) {
        if (
          letter.suckGroup &&
          letter.suckGroup.followCursor &&
          (letter.suckState === "sucking" || letter.suckState === "formed")
        ) {
          letter.suckGroup.centerX = currentMouseWorld.x;
          letter.suckGroup.centerY = currentMouseWorld.y;
        }
      }

      if (elapsed < hoverCooldown) return;

      let closest: LetterData | null = null;
      let closestDist = HIT_RADIUS * HIT_RADIUS;
      for (const l of letters) {
        if (l.suckState !== "free") continue;
        const dx = l.mesh.position.x - currentMouseWorld.x;
        const dy = l.mesh.position.y - currentMouseWorld.y;
        const dist = dx * dx + dy * dy;
        if (dist < closestDist) {
          closestDist = dist;
          closest = l;
        }
      }

      if (closest) {
        triggerSuck(closest, currentMouseWorld.x, currentMouseWorld.y);
        hoverCooldown = elapsed + SUCK_DURATION + FORMED_DURATION + RELEASE_DURATION + 0.2;
      }
    }

    container.addEventListener("mousemove", onMouseMove);

    // --- init letters ---

    function initLetters() {
      for (let i = 0; i < LETTER_COUNT; i++) {
        const charIndex = i % WORD.length;
        const char = WORD[charIndex];
        const texture = createLetterTexture(char);
        const size = 0.4 + Math.random() * 0.6;
        const geometry = new THREE.PlaneGeometry(size, size);
        const opacity = 0.1 + Math.random() * 0.15;
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = (Math.random() - 0.5) * 16;
        mesh.position.y = Math.random() * 14 - 7;

        scene.add(mesh);
        letters.push({
          mesh,
          char,
          charIndex,
          baseX: mesh.position.x,
          speed: 0.5 + Math.random() * 1.0,
          driftAmp: 0.1 + Math.random() * 0.25,
          driftFreq: 0.8 + Math.random() * 1.2,
          driftPhase: Math.random() * Math.PI * 2,
          baseOpacity: opacity,
          suckState: "free",
          suckStartTime: 0,
          suckOriginX: 0,
          suckOriginY: 0,
          suckOriginRotation: 0,
          suckGroup: null,
          suckOffsetX: 0,
        });
      }
    }

    // --- animation loop ---

    function animate() {
      animationId = requestAnimationFrame(animate);
      const now = performance.now() / 1000;
      const delta = now - lastTime;
      lastTime = now;
      elapsed += delta;

      for (const letter of letters) {
        const t = elapsed;
        const mat = letter.mesh.material as THREE.MeshBasicMaterial;

        if (letter.suckState === "free") {
          letter.mesh.position.y -= letter.speed * delta;
          if (letter.mesh.position.y < -7) {
            letter.mesh.position.y = 7;
            letter.baseX = (Math.random() - 0.5) * 16;
          }
          letter.mesh.position.x =
            letter.baseX +
            Math.sin(t * letter.driftFreq + letter.driftPhase) * letter.driftAmp;
          letter.mesh.rotation.z =
            Math.sin(t * letter.driftFreq * 0.4 + letter.driftPhase) * 0.12;
          mat.opacity = letter.baseOpacity;
        } else if (letter.suckState === "sucking") {
          const progress = Math.min(
            (elapsed - letter.suckStartTime) / SUCK_DURATION,
            1
          );
          const ease = easeOutCubic(progress);
          const group = letter.suckGroup!;

          const targetX = group.centerX + letter.suckOffsetX;
          const targetY = group.centerY;

          letter.mesh.position.x =
            letter.suckOriginX + (targetX - letter.suckOriginX) * ease;
          letter.mesh.position.y =
            letter.suckOriginY + (targetY - letter.suckOriginY) * ease;
          letter.mesh.rotation.z = letter.suckOriginRotation * (1 - ease);
          mat.opacity = letter.baseOpacity + (0.6 - letter.baseOpacity) * ease;

          if (progress >= 1) {
            letter.suckState = "formed";
            letter.suckStartTime = elapsed;
          }
        } else if (letter.suckState === "formed") {
          const group = letter.suckGroup!;

          letter.mesh.position.x = group.centerX + letter.suckOffsetX;
          letter.mesh.position.y = group.centerY;
          letter.mesh.rotation.z = 0;
          mat.opacity = 0.6;

          if (elapsed - letter.suckStartTime > FORMED_DURATION) {
            letter.suckState = "releasing";
            letter.suckStartTime = elapsed;
            letter.suckOriginX = letter.mesh.position.x;
            letter.suckOriginY = letter.mesh.position.y;
            letter.baseX = (Math.random() - 0.5) * 16;
            letter.suckGroup = null;
          }
        } else if (letter.suckState === "releasing") {
          const progress = Math.min(
            (elapsed - letter.suckStartTime) / RELEASE_DURATION,
            1
          );
          const ease = easeInCubic(progress);

          mat.opacity = 0.6 - (0.6 - letter.baseOpacity) * ease;
          letter.mesh.position.x =
            letter.suckOriginX + (letter.baseX - letter.suckOriginX) * ease;
          letter.mesh.position.y =
            letter.suckOriginY + (letter.suckOriginY - 0.5 - letter.suckOriginY) * ease;

          if (progress >= 1) {
            letter.suckState = "free";
          }
        }
      }

      renderer.render(scene, camera);
    }

    // --- load font, then start ---

    const cuteFont = new FontFace(
      "Bubblegum Sans",
      "url(https://fonts.gstatic.com/s/bubblegumsans/v22/AYCSpXb_Z9EORv1M5QTjEzMEtdaCzoXPbg.woff2)"
    );
    cuteFont.load().then((loaded) => {
      if (disposed) return;
      document.fonts.add(loaded);
      initLetters();
      animate();
    });

    // --- resize ---

    function onResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener("resize", onResize);

    // --- cleanup ---

    return () => {
      disposed = true;
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      container.removeChild(renderer.domElement);
      for (const letter of letters) {
        letter.mesh.geometry.dispose();
        (letter.mesh.material as THREE.MeshBasicMaterial).map?.dispose();
        (letter.mesh.material as THREE.MeshBasicMaterial).dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
