import { Lightbulb, FileCode, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Planning",
    description: "We analyze your requirements, conduct market research, and create a detailed project roadmap tailored to your business goals.",
    number: "01"
  },
  {
    icon: FileCode,
    title: "Design & Development",
    description: "Our expert team designs intuitive interfaces and develops robust solutions using cutting-edge technologies and best practices.",
    number: "02"
  },
  {
    icon: TestTube,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing across devices and browsers ensures your solution is bug-free, secure, and performs optimally.",
    number: "03"
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your solution seamlessly and provide ongoing support, maintenance, and updates to ensure continued success.",
    number: "04"
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results, on time and within budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-card rounded-lg p-8 border border-border hover:shadow-elevated transition-all duration-300 h-full hover:-translate-y-1">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                    {step.number}
                  </div>
                  <div className="mt-4 mb-4">
                    <Icon className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-accent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
