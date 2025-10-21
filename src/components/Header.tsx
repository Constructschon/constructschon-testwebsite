import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/schon-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Constructschon" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">CONSTRUCTSCHÖN</span>
              <span className="text-xs text-muted-foreground tracking-wide">SUSTAINABLE URBAN DEVELOPMENT</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-foreground hover:text-primary transition-colors font-medium">
              Vision
            </a>
            <a href="#approach" className="text-foreground hover:text-primary transition-colors font-medium">
              Approach
            </a>
            <a href="#pillars" className="text-foreground hover:text-primary transition-colors font-medium">
              Foundation
            </a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
