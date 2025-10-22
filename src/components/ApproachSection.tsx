import { CheckCircle } from "lucide-react";
import communityImage from "@/assets/community-connection.jpg";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const approaches = [
  "Multi-generational living spaces that adapt to changing family needs",
  "Mixed-use developments that integrate work, life, and commerce",
  "Walkable communities designed for human connection",
  "Food security through integrated urban agriculture",
  "Economic resilience via local employment and sustainable commerce",
  "Decolonized spaces that honor heritage and community identity",
];

const ApproachSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="approach" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Community Image Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10">
        <img 
          src={communityImage} 
          alt="Community" 
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Our Approach
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-3">
            We don't just build homes—we build neighborhoods
          </p>
          <p className="text-lg text-center mb-12 font-medium" style={{ color: 'hsl(var(--logo-green))' }}>
            We build places where life happens together.
          </p>

          <div ref={ref} className="grid md:grid-cols-2 gap-6">
            {approaches.map((approach, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 p-6 bg-card/95 backdrop-blur-sm rounded-xl border border-border hover:shadow-soft transition-all hover-lift ${
                  isIntersecting ? `fade-in-up delay-${index + 1}00` : 'opacity-0'
                }`}
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'hsl(var(--logo-green))' }} />
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
