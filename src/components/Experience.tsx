import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Volunteer Data Scientist",
    company: "Community Dreams Foundation",
    location: "Florida, USA",
    period: "July 2025 – Present",
    highlights: [
      "Building a full-stack business brokerage platform using React, TypeScript, Vite, Tailwind CSS, and Supabase",
      "Developing ML-powered valuation and Business Health Score models with 50K+ market data points",
      "Targeting a 30% reduction in manual valuation time for brokers"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Shop Sync Pvt Ltd",
    location: "Hyderabad, India",
    period: "Jan 2023 – Apr 2023",
    highlights: [
      "Developed automated real-time sales reporting dashboard using Python and SQL ETL pipelines",
      "Reduced manual reporting effort by 30% and cut report generation time from hours to minutes",
      "Built interactive Tableau dashboards tracking 15+ KPIs across sales, revenue, and inventory"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Iniesta Webtech Solutions",
    location: "Hyderabad, India",
    period: "May 2022 – Aug 2022",
    highlights: [
      "Led a team of 3 to develop a dynamic hotel booking web application using React and Django",
      "Optimized MySQL databases with indexing, reducing backend query latency by 30%",
      "Implemented seamless user registration, authentication, and reservation workflows"
    ]
  },
  {
    title: "Teaching Assistant for Data Structures and Algorithms",
    company: "Coding Ninjas",
    location: "Hyderabad, India",
    period: "May 2021 – Nov 2021",
    highlights: [
      "Pioneered React-Node.js student portal enhancements, driving a 30% rise in user engagement",
      "Mentored 800+ students in data structures and algorithms",
      "Increased student pass rates by 12% through personalized feedback and code reviews"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="container-custom relative z-10">
    
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 font-mono">
            <div className="w-2 h-2 rounded-full bg-foreground animate-pulse"></div>
            <span className="text-sm font-medium">experience.log</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            <span className="font-mono text-foreground/40">{'<'}</span>
            <span className="section-heading-glow">Professional Journey</span>
            <span className="font-mono text-foreground/40">{' />'}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            // Building, learning, and innovating
          </p>
        </div>

       
        <div className="max-w-5xl mx-auto">
          <div className="relative">
           
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
              
                  <div className="hidden lg:block absolute left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 group-hover:scale-150 transition-transform"></div>

                 
                  <div className="lg:ml-24">
                    <div className="p-8 glass-card rounded-3xl">
                    
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-3">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className="border-primary/30 text-primary bg-primary/10 text-sm px-4 py-1"
                        >
                          {exp.period.includes('Present') ? 'Current' : 'Past Role'}
                        </Badge>
                      </div>

                      
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                            <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
