import { CheckCircle } from "lucide-react";

const approaches = [
  "Multi-generational living spaces that adapt to changing family needs",
  "Mixed-use developments that integrate work, life, and commerce",
  "Walkable communities designed for human connection",
  "Food security through integrated urban agriculture",
  "Economic resilience via local employment and sustainable commerce",
  "Decolonized spaces that honor heritage and community identity",
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Our Approach
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            We don't just build homes—we build neighborhoods
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((approach, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-all"
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">{approach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
