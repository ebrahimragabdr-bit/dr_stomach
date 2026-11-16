export function launchConfettiBurst(intensity: 'normal' | 'epic' = 'normal') {
  if (typeof window === 'undefined') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const colors = ['#00F5D4', '#FFD166', '#FF4D6D', '#FF9E00', '#FFFFFF'];
  const count = intensity === 'epic' ? 110 : 55;
  const particles = Array.from({ length: count }, () => ({
    x: canvas.width * (0.25 + Math.random() * 0.5),
    y: canvas.height * 0.45,
    vx: (Math.random() - 0.5) * (intensity === 'epic' ? 18 : 13),
    vy: -Math.random() * (intensity === 'epic' ? 17 : 12) - 4,
    size: Math.random() * 7 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * Math.PI * 2,
    vr: (Math.random() - 0.5) * 0.25,
    alpha: 1,
  }));

  let frame = 0;
  const maxFrames = intensity === 'epic' ? 110 : 75;

  const tick = () => {
    frame += 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.36;
      p.rotation += p.vr;
      p.alpha = Math.max(0, 1 - frame / maxFrames);

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      ctx.restore();
    }

    if (frame < maxFrames) {
      requestAnimationFrame(tick);
    } else {
      canvas.remove();
    }
  };

  requestAnimationFrame(tick);
}
