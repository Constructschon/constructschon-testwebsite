import { Shield, Award, Users, Lightbulb, Heart, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Shield,
    title: "Safety",
    tagline: "Protection & Stability",
    description: "The foundation of every Constructschön home is structural safety and environmental health—your family's well-being starts with solid ground.",
    color: "var(--pillar-safety)",
    iconColor: "hsl(200 80% 50%)",
  },
  {
    icon: Award,
    title: "Pride",
    tagline: "Quality & Lasting Value",
    description: "Built to last, made to matter. We design with craftsmanship that honors your investment and elevates your legacy.",
    color: "var(--pillar-pride)",
    iconColor: "hsl(45 90% 50%)",
  },
  {
    icon: Users,
    title: "Belonging",
    tagline: "Community & Connection",
    description: "Neighborhoods aren't just buildings—they're relationships. We create places that welcome you home and connect you to something bigger.",
    color: "var(--pillar-belonging)",
    iconColor: "hsl(150 60% 45%)",
  },
  {
    icon: Lightbulb,
    title: "Hope",
    tagline: "Possibility & Future",
    description: "Your home should adapt as you do. From family growth to evolving needs, we design with flexibility and forward-thinking.",
    color: "var(--pillar-hope)",
    iconColor: "hsl(168 50% 50%)",
  },
  {
    icon: Heart,
    title: "Meaning",
    tagline: "Purpose & Responsibility",
    description: "Buildings should serve society. We design to heal—people, communities, and ecosystems.",
    color: "var(--pillar-meaning)",
    iconColor: "hsl(var(--logo-pink))",
  },
  {
    icon: Handshake,
    title: "Trust",
    tagline: "Integrity, Transparency & Consistency",
    description: "Transparency is our contract. We keep promises in both process and performance—every detail, every dialogue, every design decision built on trust.",
    color: "var(--pillar-trust)",
    iconColor: "hsl(200 15% 50%)",
  },
];

const EmotionalPillars = () => {
  return (
    <section id="pillars" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground mb-3 uppercase tracking-wider">The Emotions We Build Into Every Project</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Foundation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six emotional pillars that guide everything we build
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden"
                style={{ background: `hsl(${pillar.color})` }}
              >
                <CardContent className="p-8">
                  <div 
                    className="mb-6 inline-block p-4 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    style={{ 
                      background: `${pillar.iconColor}20`,
                      boxShadow: `0 4px 12px ${pillar.iconColor}30`
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: pillar.iconColor }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{pillar.title}</h3>
                  <p className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: pillar.iconColor }}>
                    {pillar.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmotionalPillars;
