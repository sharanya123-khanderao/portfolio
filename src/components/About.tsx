import { GraduationCap, Award, Briefcase, Terminal } from "lucide-react";
import SimpleRainBackground from "@/components/SimpleRainBackground";
const About = () => {
  return <section id="about" className="section-padding relative overflow-hidden">
    
      <SimpleRainBackground variant="about" />
      <div className="container-custom relative z-10">
     
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 font-mono">
            <Terminal className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium">$ whoami</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            <span className="font-mono text-foreground/40">{'<'}</span>
            <span className="section-heading-glow">Who I Am</span>
            <span className="font-mono text-foreground/40">{' />'}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl">
      
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">I’m a results-driven technologist with expertise in machine learning, full-stack development, and data analytics.</p>
            <p className="text-xl text-muted-foreground leading-relaxed">
            Having recently completed my Master’s in Data Science, I specialize in designing intelligent systems that convert complex data into actionable insights. My work bridges technical precision with business strategy to deliver measurable, real-world impact.
            </p>

          </div>

          {/* Education & Highlights */}
          <div className="space-y-6">
            {/* Education */}
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Master's in Data Science</div>
                  <div className="text-sm text-muted-foreground">University of Maryland Baltimore County</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Aug 2023 - May 2025 | GPA: 4.0/4.0</div>
            </div>

            <div className="p-6 rounded-2xl glass-card space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">B.E. in Electrical and Electronics Engineering</div>
                  <div className="text-sm text-muted-foreground">Osmania University</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Aug 2019 - May 2023 | GPA: 8.16/10</div>
            </div>

          </div>
        </div>
      </div>
    </section>;
};
export default About;