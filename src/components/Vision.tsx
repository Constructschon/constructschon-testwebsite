const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Beyond Energy Efficiency
            </h2>
            <div className="w-32 h-1 mx-auto mb-8 tricolor-bar" />
          </div>

          <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed text-center font-garamond italic mb-12 px-4">
            "Sustainability is beyond energy efficiency. It's about multi-generational living, 
            mixed-use development, social connection, food security, economics, and commerce. 
            It's about elevating our communities and designing thoughtfully—challenging the 
            status quo of what the built environment looks like and decolonizing spaces in a 
            way that commercial and light industrial builds further society."
          </blockquote>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 rounded-xl hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--logo-pink) / 0.1)' }}>
                <div className="text-5xl font-bold" style={{ color: 'hsl(var(--logo-pink))' }}>20+</div>
              </div>
              <p className="text-muted-foreground font-medium">Years of Impact</p>
            </div>
            <div className="text-center p-8 rounded-xl hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--logo-green) / 0.1)' }}>
                <div className="text-5xl font-bold" style={{ color: 'hsl(var(--logo-green))' }}>100%</div>
              </div>
              <p className="text-muted-foreground font-medium">Sustainable Focus</p>
            </div>
            <div className="text-center p-8 rounded-xl hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--accent-gold) / 0.1)' }}>
                <div className="text-5xl font-bold" style={{ color: 'hsl(var(--accent-gold))' }}>∞</div>
              </div>
              <p className="text-muted-foreground font-medium">Generational Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
