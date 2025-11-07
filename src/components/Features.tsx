import { CheckCircle2 } from "lucide-react";

const features = [
  "24/7 Technical Support & Maintenance",
  "Agile Development Methodology",
  "100% Project Transparency",
  "Dedicated Development Teams",
  "Scalable Architecture Solutions",
  "Quality Assurance & Testing",
  "Post-Launch Support & Updates",
  "Competitive Pricing Models"
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Why Choose SA Square Technologies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We deliver innovative technology solutions that transform businesses. 
              Our team of expert developers, designers, and engineers work collaboratively 
              to bring your vision to life with precision and excellence.
            </p>
            <div className="space-y-4">
              {features.slice(0, 4).map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {features.slice(4).map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gradient-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
