import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Built a scalable e-commerce solution handling 1M+ daily transactions with real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    image: "bg-gradient-accent"
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description: "Developed a HIPAA-compliant telemedicine app connecting patients with healthcare providers.",
    tech: ["React Native", "Firebase", "WebRTC"],
    image: "bg-gradient-card"
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI & Machine Learning",
    description: "Created an intelligent analytics platform with predictive insights and automated reporting.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    image: "bg-gradient-premium"
  },
  {
    title: "FinTech Banking Solution",
    category: "Cloud Solutions",
    description: "Deployed a secure cloud banking infrastructure serving 500K+ active users.",
    tech: ["Kubernetes", "Azure", "Go", "Redis"],
    image: "bg-gradient-hero"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions that have transformed businesses across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 ${project.image}`} />
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors">
                    <Github className="w-4 h-4" />
                    Source Code
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
