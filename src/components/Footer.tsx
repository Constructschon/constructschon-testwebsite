import logoIcon from "@/assets/schon-icon.png";
import hqImage from "@/assets/hq-building.jpg";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="text-background" style={{ background: 'hsl(var(--brand-teal-deep))' }}>
      {/* Tricolor Bar */}
      <div className="tricolor-bar" />
      
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* HQ Image Section */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={hqImage} 
                alt="Constructschön Commercial Headquarters" 
                className="w-full h-64 object-cover"
                style={{ filter: 'saturate(0.8)' }}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logoIcon} alt="Constructschon" className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold text-background">CONSTRUCTSCHÖN</h3>
                  <p className="text-xs text-background/80">Sustainable Urban Development Inc.</p>
                </div>
              </div>
            </div>
            <div className="text-center -ml-8">
              <h4 className="font-semibold mb-4 text-lg text-background">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#vision" className="text-background/80 hover:text-background transition-colors">Our Vision</a></li>
                <li><a href="#approach" className="text-background/80 hover:text-background transition-colors">Approach</a></li>
                <li><a href="#pillars" className="text-background/80 hover:text-background transition-colors">Foundation</a></li>
                <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg text-background">Get in Touch</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href="mailto:info@constructschon.ca" className="text-background/80 hover:text-background transition-colors text-lg">
                    info@constructschon.ca
                  </a>
                </li>
                <li>
                  <a href="tel:+16476785776" className="text-background/80 hover:text-background transition-colors text-lg">
                    (647) 678-5776
                  </a>
                </li>
              </ul>
              <Button 
                className="hover:scale-105 transition-all"
                style={{ 
                  background: 'hsl(var(--accent-gold))',
                  color: 'hsl(var(--brand-black))',
                  fontWeight: '600'
                }}
                asChild
              >
                <a href="/about">Meet the Team →</a>
              </Button>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="mb-8">
            <h4 className="font-semibold text-lg mb-4 text-center text-background">Find Us in Edmonton</h4>
            <div className="rounded-xl overflow-hidden" style={{ filter: 'grayscale(20%) contrast(0.9)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232043.24!2d-113.6195!3d53.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Edmonton Location"
              />
            </div>
          </div>

          <div className="border-t border-background/80 pt-8 text-center text-background/80">
            <p>&copy; {new Date().getFullYear()} Constructschön Sustainable Urban Development Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
