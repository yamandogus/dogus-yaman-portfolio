export default function BackgroundWave() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="w-full h-full transition-all duration-1000" style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(at 40% 20%, hsla(240, 50%, 10%, 0.8) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(220, 40%, 15%, 0.8) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(260, 45%, 12%, 0.8) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(280, 60%, 15%, 0.8) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(200, 50%, 10%, 0.8) 0px, transparent 50%),
          radial-gradient(at 80% 100%, hsla(240, 40%, 20%, 0.8) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(270, 45%, 15%, 0.8) 0px, transparent 50%)
        `,
        filter: 'blur(2px)'
      }} />
    </div>
  );
}
