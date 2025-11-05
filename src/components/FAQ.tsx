import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and scope. A typical website takes 4-8 weeks, while complex applications may require 3-6 months. We provide detailed timelines during the planning phase and maintain transparent communication throughout."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes! We offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements. All our plans include initial support periods, and we offer extended maintenance contracts."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with four key phases: Discovery & Planning, Design & Development, Testing & QA, and Launch & Support. You'll have regular updates and review sessions to ensure the project meets your expectations."
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely! We specialize in integrating with existing systems and platforms. Whether it's APIs, databases, or third-party services, our team has extensive experience in creating seamless integrations."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of modern technologies including React, Node.js, Python, AWS, and more. Our team stays updated with the latest tech trends and chooses the best tools for each project's specific requirements."
  },
  {
    question: "Do you sign NDAs and protect intellectual property?",
    answer: "Yes, we take confidentiality very seriously. We're happy to sign NDAs before discussing your project. All intellectual property rights are transferred to you upon project completion and full payment."
  },
  {
    question: "What are your payment terms?",
    answer: "We typically work with milestone-based payments: 30% upfront, 40% at mid-project checkpoint, and 30% upon completion. For enterprise projects, we can customize payment schedules to suit your needs."
  },
  {
    question: "Can you scale the team if needed?",
    answer: "Yes! We have the flexibility to scale resources up or down based on your project needs. Whether you need additional developers, designers, or QA specialists, we can quickly assemble the right team."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
