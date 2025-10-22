import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import blueprintImage from "@/assets/blueprint-overlay.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Blueprint Background with Parallax */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{ 
          backgroundImage: `url(${blueprintImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateZ(0)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Legacy?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-4">
              Every project we touch should make people feel safer, prouder, and more connected—
              because that's how real sustainability starts.
            </p>
            <p className="text-lg text-primary-foreground/80 italic font-garamond">
              Your vision, our craftsmanship — building legacy through design.
            </p>
          </div>

          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-primary-foreground/90 text-foreground border-primary-foreground/20 placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email" 
                    className="bg-primary-foreground/90 text-foreground border-primary-foreground/20 placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div>
                <Textarea 
                  placeholder="Tell us about your vision..." 
                  rows={5}
                  className="bg-primary-foreground/90 text-foreground border-primary-foreground/20 placeholder:text-muted-foreground resize-none"
                />
              </div>
              <Button 
                size="lg" 
                className="w-full md:w-auto px-12 py-6 text-lg hover:scale-105 transition-all"
                style={{ 
                  background: 'hsl(var(--accent-gold))',
                  color: 'hsl(var(--brand-black))',
                  boxShadow: '0 10px 40px -10px hsl(var(--accent-gold) / 0.5)',
                  fontWeight: '600'
                }}
              >
                Start Your Project
              </Button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-primary-foreground">Or reach us directly!!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
