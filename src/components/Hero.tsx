
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import lightModePic from "@/assets/lightModeProfilePic.png";
import darkModePic from "@/assets/darkModeProfilePic.png";
import { useThemeContext } from "@/components/ThemeContext";
import { TypingAnimation } from "./TypingAnimation";

const Hero = () => {
  const { theme } = useThemeContext();
  const profilePic = theme === 'dark' ? darkModePic : lightModePic;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
   
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
     
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse-intense"></div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
       
          <div className="flex justify-center mb-8 opacity-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card group hover:glass-strong transition-all font-mono">
              <Sparkles className="w-4 h-4 text-foreground animate-pulse-intense" />
              <span className="text-sm font-medium">{'<Open to opportunities />'}</span>
            </div>
          </div>

 
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
    
            <div className="opacity-0 animate-fade-up stagger-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative w-64 h-64 rounded-3xl overflow-hidden glass-card group-hover:glass-strong transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent" />
          
                  <img
                    src={profilePic}
                    alt={theme === 'dark' ? 'Profile Dark Mode' : 'Profile Light Mode'}
                className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>
              </div>
            </div>


            <div className="flex-1 text-center md:text-left space-y-6 opacity-0 animate-fade-up stagger-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter">
                <span className="block mb-3 cursor-pointer transition-all duration-500 hover:tracking-wide hover:[text-shadow:0_0_20px_hsl(var(--primary)/0.6),0_0_40px_hsl(var(--primary)/0.4)]">
                  Venkata Naga
                </span>
                <span className="block cursor-pointer transition-all duration-500 hover:tracking-wide hover:[text-shadow:0_0_20px_hsl(var(--primary)/0.6),0_0_40px_hsl(var(--primary)/0.4)]">
                  Sharanya Khande Rao
                </span>
              </h1>

              <div className="space-y-4">
                <div className="text-3xl md:text-4xl font-bold text-foreground/80 font-mono flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
                  <span className="text-primary">&lt;</span>
                  <TypingAnimation
                    texts={['DataScientist />', 'SoftwareEngineer />', 'MLEngineer />', 'FullStackDev />' , 'DataEngineer />', 'DataAnalyst />', 'DataEngineer/>' ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetweenTexts={2000}
                    className="text-foreground inline-flex items-center"
                  />
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                  // Building intelligent systems that transform data into decisions
                </p>
              </div>
            </div>
          </div>


          <div className="flex flex-wrap gap-4 justify-center mt-12 mb-20 opacity-0 animate-fade-up stagger-2">
            <Button 
              size="lg" 
              className="group gap-3 h-14 px-8 text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-3 h-14 px-8 text-lg font-semibold rounded-full border-2 hover:bg-accent transition-all"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=18HJmN5yUTYGk_QUE8Jsar58pNdR8QFMH",
                  "_blank"
                )
              }
            >
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </div>

        </div>
      </div>
      

      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-4 opacity-0 animate-fade-up stagger-4">
        <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">scroll down</div>
        <div className="relative w-7 h-11 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-scroll-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
