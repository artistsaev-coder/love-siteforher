@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
}

@keyframes fall {
  0% {
    transform: translateY(-10px) rotate(0deg);
    opacity: 1;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) rotate(45deg);
    opacity: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 77, 109, 0.3), 0 0 60px rgba(255, 77, 109, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 77, 109, 0.6), 0 0 80px rgba(255, 77, 109, 0.2);
  }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.18); }
  28% { transform: scale(1); }
  42% { transform: scale(1.12); }
  70% { transform: scale(1); }
}

@keyframes ripple {
  0% { transform: scale(0); opacity: 0.6; }
  100% { transform: scale(4); opacity: 0; }
}

.heart-fall {
  position: fixed;
  pointer-events: none;
  animation: fall linear forwards;
  z-index: 0;
  user-select: none;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease both;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulseGlow 3s ease-in-out infinite;
}

.animate-heartbeat {
  animation: heartbeat 1.6s ease-in-out infinite;
}

.glass-card {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.shimmer-text {
  background: linear-gradient(90deg, #fff 0%, #ffd6dc 40%, #fff 60%, #ffd6dc 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 5s linear infinite;
}

.btn-love {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-love:hover {
  transform: scale(1.06) translateY(-3px);
  box-shadow: 0 18px 48px rgba(220, 38, 75, 0.45);
}

.btn-love:active {
  transform: scale(0.97);
}

.ripple-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  animation: ripple 0.6s linear forwards;
  pointer-events: none;
}
