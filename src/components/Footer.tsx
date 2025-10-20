import logoIcon from "@/assets/schon-icon.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logoIcon} alt="Constructschon" className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">CONSTRUCTSCHÖN</h3>
                  <p className="text-xs text-background/70">Sustainable Urban Development Inc.</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#vision" className="text-background/80 hover:text-background transition-colors">Our Vision</a></li>
                <li><a href="#approach" className="text-background/80 hover:text-background transition-colors">Approach</a></li>
                <li><a href="#pillars" className="text-background/80 hover:text-background transition-colors">Foundation</a></li>
                <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <p className="text-background/80 mb-2">Building the future, together.</p>
              <p className="text-background/80">Every project shapes tomorrow.</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; {new Date().getFullYear()} Constructschön Sustainable Urban Development Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
