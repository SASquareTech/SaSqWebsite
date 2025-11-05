import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$2,999",
    period: "per project",
    description: "Perfect for small businesses and startups",
    features: [
      "Custom website development",
      "Responsive design",
      "Basic SEO optimization",
      "3 months support",
      "Source code included",
      "2 revision rounds"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$7,999",
    period: "per project",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "Advanced web application",
      "Database integration",
      "API development",
      "6 months support",
      "Performance optimization",
      "Unlimited revisions",
      "Priority support"
    ],
    cta: "Start Building",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large-scale operations",
    features: [
      "Everything in Professional",
      "Dedicated development team",
      "Cloud infrastructure setup",
      "Advanced security features",
      "12 months support",
      "SLA guarantee",
      "24/7 priority support",
      "Custom integrations",
      "Training & documentation"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include quality assurance and testing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.popular 
                  ? 'border-accent shadow-elevated scale-105' 
                  : 'border-border hover:shadow-soft'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-premium text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
