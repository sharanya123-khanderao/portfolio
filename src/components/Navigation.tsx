import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass-strong shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 md:px-6">
         
          <a 
            href="#" 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            KVNS
          </a>

        
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 glass-card rounded-full p-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button 
                size="sm"
                className="rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/18HJmN5yUTYGk_QUE8Jsar58pNdR8QFMH/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Resume
              </Button>
            </div>
          </div>

          
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 glass-strong">
            <div className="py-6 px-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  size="sm"
                  className="w-full rounded-full"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/18HJmN5yUTYGk_QUE8Jsar58pNdR8QFMH/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
