import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Build Your Legacy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every project we touch should make people feel safer, prouder, and more connected—
              because that's how real sustainability starts.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-soft">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email" 
                    className="bg-background border-input"
                  />
                </div>
              </div>
              <div>
                <Textarea 
                  placeholder="Tell us about your vision..." 
                  rows={5}
                  className="bg-background border-input resize-none"
                />
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full md:w-auto px-12 py-6 text-lg shadow-elevated hover:scale-105 transition-all"
              >
                Start the Conversation
              </Button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:info@constructschon.com" className="text-foreground hover:text-primary transition-colors text-lg">
                info@constructschon.com
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors text-lg">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
