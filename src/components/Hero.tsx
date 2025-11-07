import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-hero rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="mb-4 sm:mb-6">
              <span className="text-sm sm:text-base text-muted-foreground">
                Home → <span className="text-primary font-medium">Services</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Transform Your Vision into Digital Reality
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Develop custom software & AI solutions rapidly.
            </p>
            
            {/* <Button variant="accent" size="lg" className="mb-8 sm:mb-12">
              Book Your Free Consultation
            </Button> */}
            
          </div>
          
          {/* Right image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-hero opacity-20 z-10" />
              <img 
                src={heroImage} 
                alt="Professional team collaborating on AI software development"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-2xl opacity-50 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-secondary/30" />
    </section>
  );
};

export default Hero;
