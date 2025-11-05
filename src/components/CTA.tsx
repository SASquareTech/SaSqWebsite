import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Let's discuss how we can help you achieve your goals. Get a free consultation 
            and project estimate from our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="accent"
              className="text-base px-8 py-6 shadow-glow hover:shadow-elevated transition-all"
            >
             Schedule a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {/* <Button 
              size="lg" 
              variant="accent"
              className="text-base px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Schedule a Call
            </Button> */}
          </div>
          <p className="text-primary-foreground/70 text-sm mt-8">
            Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
