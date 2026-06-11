"use client";

import { useEffect, useRef } from "react";

// Land mask: 48 latitude rows (90°N → 90°S), each row lists [startCol, endCol]
// land spans on a 96-column longitude grid (180°W → 180°E), ~3.75° per cell.
const LAND: [number, number][][] = [
  [], // 88°N
  [[33, 39]], // 84°N — north Greenland
  [[25, 30], [32, 42], [50, 52], [73, 76]], // 81°N — Arctic islands, Svalbard
  [[20, 30], [32, 42], [62, 65], [72, 79]], // 77°N
  [[17, 31], [33, 41], [62, 64], [70, 78], [84, 90]], // 73°N
  [[3, 10], [12, 32], [33, 40], [51, 55], [60, 94]], // 69°N — Alaska, Canada, Siberia
  [[3, 11], [12, 33], [34, 38], [42, 44], [49, 56], [58, 95]], // 66°N — Iceland
  [[2, 11], [13, 33], [35, 37], [49, 95]], // 62°N
  [[4, 12], [14, 32], [45, 47], [49, 55], [57, 84], [89, 91]], // 58°N — UK, Kamchatka
  [[14, 23], [27, 32], [45, 82], [88, 89]], // 54°N — Hudson Bay gap
  [[14, 32], [46, 87]], // 51°N
  [[15, 30], [46, 85]], // 47°N
  [[15, 30], [45, 82], [84, 85]], // 43°N — Japan
  [[16, 30], [45, 48], [52, 53], [55, 80], [81, 82], [84, 85]], // 39°N — Iberia, Med
  [[16, 29], [44, 51], [55, 79], [82, 84]], // 36°N
  [[17, 28], [44, 80]], // 32°N — N. Africa → China
  [[17, 24], [27, 28], [44, 79]], // 28°N — Mexico, Florida
  [[18, 24], [44, 63], [66, 79], [80, 80]], // 24°N — Arabia, India
  [[19, 24], [25, 28], [44, 63], [66, 71], [74, 78], [80, 80]], // 21°N — Cuba
  [[21, 24], [44, 62], [67, 70], [74, 78], [80, 81]], // 17°N
  [[22, 25], [44, 61], [67, 69], [74, 78], [80, 81]], // 13°N
  [[23, 31], [45, 61], [69, 69], [74, 77], [80, 81]], // 9°N — Panama, Horn of Africa
  [[26, 35], [46, 60], [74, 76], [78, 80]], // 6°N
  [[26, 37], [48, 59], [74, 76], [77, 81], [84, 88]], // 2°N — Borneo, New Guinea
  [[26, 38], [49, 59], [74, 76], [78, 81], [84, 89]], // 2°S — Amazon, Congo
  [[26, 38], [49, 59], [75, 78], [84, 89]], // 6°S — Java
  [[27, 38], [49, 58], [77, 81], [83, 88]], // 9°S
  [[27, 37], [49, 58], [60, 60], [80, 86]], // 13°S — Madagascar, N. Australia
  [[28, 37], [49, 57], [60, 61], [79, 87]], // 17°S
  [[28, 36], [49, 56], [60, 61], [78, 88]], // 21°S
  [[28, 35], [49, 56], [60, 60], [78, 88]], // 24°S
  [[29, 34], [50, 55], [78, 88]], // 28°S
  [[29, 33], [50, 55], [78, 88]], // 32°S
  [[29, 32], [52, 54], [78, 80], [84, 87], [94, 95]], // 36°S — Cape, NZ
  [[29, 31], [84, 86], [93, 95]], // 39°S
  [[29, 31], [85, 86], [93, 94]], // 43°S — Tasmania
  [[29, 30], [92, 93]], // 47°S
  [[29, 30]], // 51°S — Patagonia
  [[29, 31]], // 54°S — Tierra del Fuego
  [], // 58°S
  [[31, 33]], // 62°S — Antarctic peninsula
  [[30, 33], [48, 88]], // 66°S
  [[20, 33], [40, 90]], // 69°S
  [[12, 94]], // 73°S
  [[6, 95]], // 77°S
  [[0, 95]], // 81°S
  [[0, 95]], // 84°S
  [[0, 95]], // 88°S
];

const ROWS = LAND.length; // 48
const COLS = 96;

const MARKER = { lat: -34.6, lon: -58.4 }; // Buenos Aires

const DEG = Math.PI / 180;
// Tilt the southern hemisphere toward the viewer so Buenos Aires (-34.6°)
// passes above the globe's center — the card only shows the top-left part.
const TILT = -45 * DEG;
const ROTATION_PERIOD = 75_000; // ms per full revolution (matches old 90s vibe)
const LAT_STEP = 4.5; // degrees between point rows

function isLand(lat: number, lon: number): boolean {
  const row = Math.min(ROWS - 1, Math.max(0, Math.floor(((90 - lat) / 180) * ROWS)));
  const col = Math.min(COLS - 1, Math.max(0, Math.floor(((lon + 180) / 360) * COLS)));
  return LAND[row].some(([a, b]) => col >= a && col <= b);
}

type Pt = { cosLat: number; sinLat: number; lon: number; land: boolean };

function buildPoints(): Pt[] {
  const pts: Pt[] = [];
  for (let lat = -90 + LAT_STEP; lat < 90; lat += LAT_STEP) {
    const cosLat = Math.cos(lat * DEG);
    // Scale longitude step by 1/cos(lat) so density stays even on the sphere
    const n = Math.max(1, Math.round((360 / LAT_STEP) * cosLat));
    for (let i = 0; i < n; i++) {
      const lon = -180 + (360 / n) * i;
      pts.push({ cosLat, sinLat: Math.sin(lat * DEG), lon: lon * DEG, land: isLand(lat, lon) });
    }
  }
  return pts;
}

function readColors() {
  const cs = getComputedStyle(document.documentElement);
  const parse = (name: string) =>
    cs.getPropertyValue(name).trim().split(/\s+/).map(Number);
  return { fg: parse("--foreground"), ac: parse("--accent") };
}

export default function PixelGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points = buildPoints();
    const cosTilt = Math.cos(TILT);
    const sinTilt = Math.sin(TILT);
    const marker = {
      cosLat: Math.cos(MARKER.lat * DEG),
      sinLat: Math.sin(MARKER.lat * DEG),
      lon: MARKER.lon * DEG,
    };

    let colors = readColors();
    let size = 0;
    let dpr = 1;
    let raf = 0;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (rot: number) => {
      const r = (size / 2) * 0.92;
      const c = size / 2;
      const land = colors.fg;
      const accent = colors.ac;
      const landR = Math.max(0.75, r * 0.011);
      const oceanR = Math.max(0.5, r * 0.008);

      ctx.clearRect(0, 0, size, size);

      for (const p of points) {
        const a = p.lon + rot;
        const x = p.cosLat * Math.sin(a);
        const z0 = p.cosLat * Math.cos(a);
        // Tilt around the x-axis
        const y = p.sinLat * cosTilt - z0 * sinTilt;
        const z = p.sinLat * sinTilt + z0 * cosTilt;
        if (z <= 0.02) continue; // back hemisphere

        const px = c + x * r;
        const py = c - y * r;
        ctx.beginPath();
        if (p.land) {
          ctx.fillStyle = `rgba(${land[0]},${land[1]},${land[2]},${0.25 + 0.55 * z})`;
          ctx.arc(px, py, landR, 0, Math.PI * 2);
        } else {
          ctx.fillStyle = `rgba(${land[0]},${land[1]},${land[2]},${0.03 + 0.05 * z})`;
          ctx.arc(px, py, oceanR, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      // Buenos Aires marker
      const ma = marker.lon + rot;
      const mx = marker.cosLat * Math.sin(ma);
      const mz0 = marker.cosLat * Math.cos(ma);
      const my = marker.sinLat * cosTilt - mz0 * sinTilt;
      const mz = marker.sinLat * sinTilt + mz0 * cosTilt;
      if (mz > 0.02) {
        const px = c + mx * r;
        const py = c - my * r;
        const s = landR * 2.4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},${0.25 * mz})`;
        ctx.arc(px, py, s * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},${0.4 + 0.6 * mz})`;
        ctx.arc(px, py, s, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Start facing South America so the marker is visible right away;
    // this is also the static angle used for reduced motion.
    const startRot = -marker.lon;
    let rot = startRot;
    const t0 = performance.now();

    // Cap at ~30fps — the rotation is slow, and fewer canvas repaints means
    // less backdrop-filter resampling pressure on the surrounding glass cards.
    let lastFrame = 0;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - lastFrame < 33) return;
      lastFrame = now;
      rot = startRot + (((now - t0) % ROTATION_PERIOD) / ROTATION_PERIOD) * Math.PI * 2;
      draw(rot);
    };

    const resize = () => {
      const w = canvas.clientWidth;
      if (!w) return;
      dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = w * dpr;
      size = w;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(rot);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // Re-read theme colors when the html class/attributes change (theme toggle)
    const mo = new MutationObserver(() => {
      colors = readColors();
      draw(rot);
    });
    mo.observe(document.documentElement, { attributes: true });

    if (!reduceMotion) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      // Own compositor layer: keeps per-frame canvas repaints from dirtying
      // the tiles of neighboring backdrop-filter (glass) cards.
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    />
  );
}
