import { Code2, Database, Brain, Wrench, Terminal, Cpu, Cloud, Boxes, GitBranch, Layers } from "lucide-react";
import SimpleRainBackground from "@/components/SimpleRainBackground";

const skills = [
  { name: "Python", category: "Languages", icon: Code2 },
  { name: "JavaScript", category: "Languages", icon: Code2 },
  { name: "TypeScript", category: "Languages", icon: Code2 },
  { name: "SQL", category: "Languages", icon: Database },
  { name: "Java", category: "Languages", icon: Code2 },
  { name: "C++", category: "Languages", icon: Code2 },
  { name: "HTML/CSS", category: "Languages", icon: Code2 },
  { name: "TensorFlow", category: "ML & AI", icon: Brain },
  { name: "PyTorch", category: "ML & AI", icon: Brain },
  { name: "Scikit-learn", category: "ML & AI", icon: Brain },
  { name: "XGBoost", category: "ML & AI", icon: Brain },
  { name: "NLP", category: "ML & AI", icon: Brain },
  { name: "Computer Vision", category: "ML & AI", icon: Brain },
  { name: "Deep Learning", category: "ML & AI", icon: Cpu },
  { name: "React", category: "Frameworks", icon: Layers },
  { name: "Node.js", category: "Frameworks", icon: Boxes },
  { name: "Express", category: "Frameworks", icon: Boxes },
  { name: "FastAPI", category: "Frameworks", icon: Boxes },
  { name: "Streamlit", category: "Frameworks", icon: Boxes },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "Git", category: "Tools", icon: GitBranch },
  { name: "Docker", category: "Tools", icon: Wrench },
  { name: "AWS", category: "Tools", icon: Cloud },
  { name: "Google Cloud", category: "Tools", icon: Cloud },
  { name: "Jupyter", category: "Tools", icon: Terminal },
  { name: "VS Code", category: "Tools", icon: Terminal },
  { name: "Linux", category: "Tools", icon: Terminal },
];


const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      
      <SimpleRainBackground variant="skills" />
      <div className="container-custom relative z-10">
        
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 font-mono">
            <Terminal className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium">{'skills.map(skill => <Skill key={skill} />)'}</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="font-mono text-foreground/40">{'<'}</span>
            <span className="section-heading-glow">Tech Stack</span>
            <span className="font-mono text-foreground/40">{' />'}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            // Modern tools and technologies I work with
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ 
                  animation: `fade-in 0.6s ease-out ${index * 0.05}s backwards`
                }}
              >
                
                <div className="absolute -inset-1 bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:duration-300" />
                
                
                <div className="relative h-full p-7 rounded-2xl bg-background/40 backdrop-blur-sm border border-foreground/10 overflow-hidden transition-all duration-500 group-hover:border-foreground/30 group-hover:bg-background/60 group-hover:shadow-2xl group-hover:-translate-y-1">
                  
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/5 to-foreground/0 opacity-0 group-hover:opacity-100 transition-all duration-700" 
                    style={{
                      background: 'linear-gradient(135deg, transparent 0%, hsl(var(--foreground) / 0.08) 50%, transparent 100%)',
                    }}
                  />
                  
                 
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      backgroundImage: `radial-gradient(circle, hsl(var(--foreground) / 0.08) 1px, transparent 1px)`,
                      backgroundSize: '16px 16px'
                    }}
                  />
                  
               
                  <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                 
                    <div className="relative w-14 h-14">
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5 blur-md rounded-2xl scale-0 group-hover:scale-125 transition-all duration-700 ease-out" />
                      
                     
                      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-foreground/40 group-hover:shadow-lg">
                        <Icon className="w-7 h-7 text-foreground transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg" />
                      </div>
                      
                      
                      <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-foreground/0 group-hover:border-foreground/50 rounded-tl-lg transition-all duration-500" />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-foreground/0 group-hover:border-foreground/50 rounded-br-lg transition-all duration-500" />
                    </div>
                    
                
                    <div className="space-y-1.5">
                      <div className="font-bold text-sm leading-tight group-hover:text-foreground transition-all duration-300 group-hover:tracking-wide">
                        {skill.name}
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground/70 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-1">
                        {skill.category}
                      </div>
                    </div>
                  </div>

                  
                  <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-foreground/0 group-hover:border-foreground/30 rounded-tl-2xl transition-all duration-700 ease-out" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-foreground/0 group-hover:border-foreground/30 rounded-br-2xl transition-all duration-700 ease-out" />
                </div>
              </div>
            );
          })}
        </div>

       
        <div className="mt-16 font-mono text-muted-foreground text-sm">
          {'/* Continuously learning and expanding this list... */'}
        </div>
      </div>
    </section>
  );
};

export default Skills;
