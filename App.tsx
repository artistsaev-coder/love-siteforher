import { useEffect, useState } from 'react';
import { Heart, X } from 'lucide-react';

interface LoveModalProps {
  onClose: () => void;
}

const messages = [
  'I love you more than all the stars in the sky.',
  'You are my favorite hello and my hardest goodbye.',
  'With you, every moment becomes a cherished memory.',
  'You are the poetry my heart has always been writing.',
  'Being loved by you is the greatest gift of my life.',
];

export default function LoveModal({ onClose }: LoveModalProps) {
  const [visible, setVisible] = useState(false);
  const message = messages[Math.floor(Math.random() * messages.length)];

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-4"
      style={{ zIndex: 100 }}
      onClick={close}
    >
      <div
        className="absolute inset-0 bg-black/30"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.35s ease',
          backdropFilter: 'blur(4px)',
        }}
      />
      <div
        className="relative glass-card rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(30px)',
          transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          background: 'rgba(255,255,255,0.22)',
          border: '1px solid rgba(255,255,255,0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex justify-center mb-6">
          <Heart
            size={52}
            className="text-rose-200 animate-heartbeat"
            fill="currentColor"
          />
        </div>

        <p
          className="text-white leading-relaxed"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.25rem',
            fontStyle: 'italic',
            lineHeight: 1.7,
          }}
        >
          "{message}"
        </p>

        <div className="flex justify-center gap-2 mt-6 text-white/50">
          <Heart size={12} fill="currentColor" />
          <Heart size={12} fill="currentColor" />
          <Heart size={12} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
