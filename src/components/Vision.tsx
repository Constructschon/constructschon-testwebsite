const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Beyond Energy Efficiency
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
          </div>

          <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed text-center font-garamond italic mb-12 px-4">
            "We create sustainable communities where multi-generational living, social connection, 
            and thoughtful design shape the future. Sustainability is beyond energy efficiency. 
            It's about mixed-use development, food security, economics, and commerce—elevating 
            our communities and challenging the status quo of what the built environment looks like."
          </blockquote>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">20+</div>
              <p className="text-muted-foreground">Years of Impact</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-muted-foreground">Sustainable Focus</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">∞</div>
              <p className="text-muted-foreground">Generational Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
