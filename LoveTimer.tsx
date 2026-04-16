import { useState, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

interface MusicButtonProps {
  src: string;
}

export default function MusicButton({ src }: MusicButtonProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop src={src} />
      <button
        onClick={toggle}
        title={playing ? 'Pause music' : 'Play music'}
        className="glass-card rounded-full w-12 h-12 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-white/30"
        style={{ position: 'fixed', top: 20, right: 20, zIndex: 50 }}
      >
        {playing ? <Music size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  );
}
