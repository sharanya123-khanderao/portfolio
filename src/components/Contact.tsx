import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SimpleRainBackground from "@/components/SimpleRainBackground";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mrbylyje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I’ll reply soon!",
          duration: 3000
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me via LinkedIn/email.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <SimpleRainBackground variant="contact" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 font-mono">
            <div className="w-2 h-2 rounded-full bg-foreground animate-pulse"></div>
            <span className="text-sm font-medium">contact.init()</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            <span className="font-mono text-foreground/40">{'<'}</span>
            <span className="section-heading-glow">Let's Connect</span>
            <span className="font-mono text-foreground/40">{' />'}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            // Ready to collaborate and build something amazing
          </p>
        </div>

        {/* Main grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <a href="mailto:sharanyakvn@gmail.com" className="group flex items-start gap-4 p-6 rounded-2xl glass-card">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Email</p>
                <p className="text-sm text-muted-foreground break-all">sharanyakvn@gmail.com</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href="tel:+16674330652" className="group flex items-start gap-4 p-6 rounded-2xl glass-card">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (667) 433-0652</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.linkedin.com/in/sharanya-khanderao-189205193/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-2xl glass-card"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Let's connect professionally</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl glass-card">
              <div className="p-3 rounded-xl bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-sm text-muted-foreground">USA</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="p-8 glass-card rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="resize-none bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="group w-full h-12 gap-2 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all hover:scale-105"
                >
                  <Send className={`w-5 h-5 transition-transform ${isSending ? "animate-pulse" : "group-hover:translate-x-1"}`} />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
