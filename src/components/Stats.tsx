const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "10+", label: "Team Members" },
  { number: "24/7", label: "Support Available" }
];

const Stats = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-primary-foreground/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
