import { CheckCircle } from "lucide-react";

const approaches = [
  "Commercial construction built for long-term value and adaptability",
  "Tenant improvements that transform spaces to meet your business needs",
  "Light industrial facilities designed for efficiency and sustainability",
  "Sustainable materials and practices across all project types",
  "Collaborative approach ensuring your vision comes to life",
  "Quality craftsmanship with attention to every detail",
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
            From concept to completion, we deliver exceptional results
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
