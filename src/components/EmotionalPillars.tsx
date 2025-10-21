import { Shield, Award, Users, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Shield,
    title: "Safety",
    tagline: "Clarity, Control & Calm",
    description: "We make construction predictable. You'll always know what's happening and why—no unwanted surprises for your project or business.",
  },
  {
    icon: Award,
    title: "Pride",
    tagline: "Craftsmanship & Legacy",
    description: "You're investing in quality construction that stands the test of time. We build with integrity so you can operate with pride.",
  },
  {
    icon: Users,
    title: "Belonging",
    tagline: "Connection & Purpose",
    description: "We build spaces that serve your business and community. Our projects are designed to foster collaboration and success.",
  },
  {
    icon: Lightbulb,
    title: "Hope",
    tagline: "Optimism Through Design",
    description: "Every Constructschön project adds long-term value. We design and build for lasting performance and sustainable growth.",
  },
  {
    icon: Heart,
    title: "Meaning",
    tagline: "Purpose & Responsibility",
    description: "Buildings should serve business and society. We design and construct spaces that contribute positively to the environment and community.",
  },
];

const EmotionalPillars = () => {
  return (
    <section id="pillars" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Foundation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Five emotional pillars that guide everything we build
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {pillar.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
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
