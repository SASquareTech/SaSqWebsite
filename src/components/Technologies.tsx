const technologies = [
  {
    category: "Frontend",
    tools: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    tools: ["Node.js", "Python", "Java", "Go", "PHP", "Ruby on Rails"]
  },
  {
    category: "Mobile",
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"]
  },
  {
    category: "Cloud & DevOps",
    tools: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    category: "Database",
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Neo4j"]
  },
  {
    category: "AI & ML",
    tools: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Keras"]
  }
];

const Technologies = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-lg p-8 border border-border hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-card text-foreground text-sm rounded-lg border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
