import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community-living.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center hero-parallax"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Tricolor Gradient Overlay */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, hsl(var(--logo-pink) / 0.75), hsl(var(--brand-teal) / 0.80), hsl(var(--logo-green) / 0.70))'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Building Beyond Structures
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto mb-4 leading-relaxed">
          We create sustainable communities where multi-generational living, social connection, 
          and thoughtful design shape the future of urban development.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 italic font-garamond">
          For families, for communities, for generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 transition-all hover:scale-105"
            style={{ 
              background: 'hsl(var(--logo-green))',
              color: 'white',
              boxShadow: 'var(--shadow-elevated)'
            }}
            asChild
          >
            <a href="#vision">Explore Our Vision</a>
          </Button>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 border-2 border-primary-foreground bg-primary-foreground/95 hover:bg-primary-foreground transition-all hover:scale-105"
            style={{ 
              color: 'hsl(var(--brand-teal))',
              fontWeight: '600'
            }}
            asChild
          >
            <a href="#contact">Start a Project</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
