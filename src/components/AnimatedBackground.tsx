const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-[10%] left-[15%] w-32 h-32 border border-foreground/10 rounded-lg animate-float-rotate" />
      <div className="absolute top-[60%] right-[20%] w-24 h-24 border border-foreground/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] right-[10%] w-40 h-40 border border-foreground/10 animate-float-rotate-reverse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] left-[25%] w-28 h-28 border border-foreground/10 rounded-lg animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[45%] left-[5%] w-20 h-20 border border-foreground/10 rounded-full animate-float-rotate" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[40%] right-[30%] w-36 h-36 border border-foreground/10 rounded-lg animate-float-rotate-reverse" style={{ animationDelay: '2.5s' }} />
      
     
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-foreground/[0.01]" />
    </div>
  );
};

export default AnimatedBackground;
