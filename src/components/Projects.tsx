import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import SimpleRainBackground from "@/components/SimpleRainBackground";
import healthcareImg from "@/assets/healthcare.png";
import GalaxyGrowImg from "@/assets/GalaxyGrow.png";
import uberProjectPicImg from "@/assets/uberProjectPic.png";
import civilianProjectImg from "@/assets/civilianProject.png";

const projects = [
  {
    title: "Personalized Healthcare Recommendation System for ICU Patients",
    description: "Developed a multimodal ML system that predicts ICU patient outcomes by integrating structured vitals, demographics, and diagnosis data with unstructured clinical notes from the MIMIC-III dataset. Built modules for ICU admission, length-of-stay, and risk-level prediction using Logistic Regression, Random Forest, and XGBoost, achieving a 0.83 ROC-AUC. Combined TF-IDF and topic modeling to enhance interpretability and support data-driven clinical decision-making.",
    image: healthcareImg,
    tech: ["Python", "XGBoost", "NLP", "Streamlit"],
    metrics: ["82% ROC-AUC", "Real-time predictions", "10-fold CV"],
    githubUrl: "https://github.com/sharanya123-khanderao/Personalized-Healthcare-Recommendation-System-for-ICU-Patients"
  },
  {
    title: "Galaxy Grow Platform",
    description: "Designed and developed a full-stack business-listing platform using React, Tailwind CSS, Node.js, Express, and MongoDB. Implemented JWT-based role authentication for buyers, vendors, and admins, integrated Cloudinary for secure image uploads, and added Google Places autocomplete with map-based geolocation search. The system also includes an interactive admin panel for managing listings, reviews, and business insights.",
    image: GalaxyGrowImg,
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    metrics: ["REST APIs", "Google Maps", "Cloud storage"],
    githubUrl: "https://github.com/sharanya123-khanderao/galaxygrow-client"
  },
  {
    title: "Uber for Hire Vehicles in NYC",
    description: "Conducted a comprehensive data analysis of Uber ride patterns across New York City to uncover key demand zones and temporal trends. Identified 15 high-demand regions using geospatial clustering and trip frequency analytics, enabling smarter driver allocation and route optimization. These insights improved overall operational efficiency by 25%, reduced passenger wait times by 15%, and enhanced user satisfaction through more balanced service distribution.",
    image: uberProjectPicImg,
    tech: ["Python", "Pandas", "Data Viz"],
    metrics: ["25% efficiency ↑", "15% wait time ↓", "15 zones"],
    githubUrl: "https://github.com/sharanya123-khanderao/Uber-For-Hire-vehicles-in-NYC"
  },
  {
    title: "Analysis of Civilian Complaint Review",
    description: "Built an ML-powered complaint analysis system using Civilian Complaint Review Board (CCRB) data to enhance transparency and decision-making in law enforcement. Streamlined data quality through advanced preprocessing and cleaning, reducing inconsistencies by 40% and improving model accuracy. Applied Logistic Regression, Random Forest, and XGBoost to predict complaint outcomes, achieving a projected 25% improvement in resolution effectiveness and actionable insights for policy reform.",
    image: civilianProjectImg,
    tech: ["Python", "Random Forest", "XGBoost"],
    metrics: ["40% quality ↑", "25% resolution ↑", "3 ML models"],
    githubUrl: "https://github.com/sharanya123-khanderao/Analysis-of-Civilian-Complaint-Review-"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
    
      <SimpleRainBackground variant="projects" />
      <div className="container-custom relative z-10">

        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 font-mono">
            <div className="w-2 h-2 rounded-full bg-foreground animate-pulse"></div>
            <span className="text-sm font-medium">{'projects.filter(p => p.featured === true)'}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            <span className="font-mono text-foreground/40">{'<'}</span>
            <span className="section-heading-glow">Projects</span>
            <span className="font-mono text-foreground/40">{' />'}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            // Data-driven solutions with measurable impact
          </p>
        </div>

     
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl glass-card">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto rounded-3xl transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-background/80 dark:to-transparent"></div>

                </div>
              
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              </div>

            
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="text-sm text-muted-foreground font-medium mb-3">
                    0{index + 1}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

         
                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-2 rounded-full glass-card text-sm font-semibold"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

           
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className="font-mono text-xs border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                
                <Button 
                  variant="outline"
                  size="lg"
                  className="group gap-2 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-5 h-5" />
                  <span className="font-semibold">View Source</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
