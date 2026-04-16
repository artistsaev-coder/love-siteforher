import { useEffect, useRef } from 'react';

interface HeartConfig {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
}

export default function FallingHearts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    const symbols = ['❤️', '🩷', '💕', '💗', '💓', '💖', '💝'];

    const createHeart = () => {
      if (!containerRef.current) return;

      const config: HeartConfig = {
        id: counterRef.current++,
        left: Math.random() * 100,
        size: 14 + Math.random() * 18,
        duration: 5 + Math.random() * 7,
        delay: 0,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      };

      const el = document.createElement('span');
      el.textContent = config.symbol;
      el.className = 'heart-fall';
      el.style.left = `${config.left}vw`;
      el.style.fontSize = `${config.size}px`;
      el.style.animationDuration = `${config.duration}s`;
      el.style.top = '-30px';
      el.style.opacity = (0.5 + Math.random() * 0.5).toString();

      containerRef.current.appendChild(el);

      setTimeout(() => {
        el.remove();
      }, config.duration * 1000);
    };

    const interval = setInterval(createHeart, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
}
