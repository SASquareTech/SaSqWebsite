import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-soft">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary-foreground tracking-tight">
              SA Square Technologies
            </span>
          </div>

          <Button
            variant="accent"
            size="sm"
            className="text-xs sm:text-sm lg:text-base"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in touch
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
