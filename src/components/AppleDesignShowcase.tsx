import React from 'react';

export function AppleDesignShowcase() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl mb-6 font-inter">Apple-Inspired Design System</h1>
        <p className="text-muted-foreground mb-8">
          A clean, modern interface inspired by Apple's design principles featuring the Inter font.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Typography */}
          <div className="apple-card">
            <h2 className="text-2xl mb-4">Typography</h2>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-muted-foreground block mb-1">Display</span>
                <h3 className="text-4xl">Inter Display</h3>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block mb-1">Heading</span>
                <h3 className="text-2xl">Inter Heading</h3>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block mb-1">Body</span>
                <p>
                  Inter body text with a clean, modern aesthetic. Apple uses SF Pro for its interfaces,
                  and Inter is an excellent open-source alternative with similar characteristics.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Font weights</span>
                  <p className="font-light">Light 300</p>
                  <p className="font-normal">Regular 400</p>
                  <p className="font-medium">Medium 500</p>
                  <p className="font-semibold">Semibold 600</p>
                  <p className="font-bold">Bold 700</p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Font sizes</span>
                  <p className="text-xs">Text XS (12px)</p>
                  <p className="text-sm">Text SM (14px)</p>
                  <p className="text-base">Text Base (16px)</p>
                  <p className="text-lg">Text LG (18px)</p>
                  <p className="text-xl">Text XL (20px)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="apple-card">
            <h2 className="text-2xl mb-4">Colors</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-muted-foreground block mb-1">Primary</span>
                <div className="h-12 bg-primary rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Apple Blue</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block mb-1">Secondary</span>
                <div className="h-12 bg-secondary rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Light Gray</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block mb-1">Destructive</span>
                <div className="h-12 bg-destructive rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Apple Red</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block mb-1">Success</span>
                <div className="h-12 bg-apple-green rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Apple Green</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-muted-foreground block mb-1">Neutral</span>
              <div className="grid grid-cols-5 gap-2">
                <div>
                  <div className="h-8 bg-apple-black rounded-lg mb-1"></div>
                  <p className="text-xs">Black</p>
                </div>
                <div>
                  <div className="h-8 bg-apple-gray rounded-lg mb-1"></div>
                  <p className="text-xs">Gray</p>
                </div>
                <div>
                  <div className="h-8 bg-muted rounded-lg mb-1"></div>
                  <p className="text-xs">Muted</p>
                </div>
                <div>
                  <div className="h-8 bg-apple-white rounded-lg mb-1 border"></div>
                  <p className="text-xs">White</p>
                </div>
                <div>
                  <div className="h-8 bg-background rounded-lg mb-1 border"></div>
                  <p className="text-xs">Bg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl mb-6">UI Components</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Buttons */}
          <div className="apple-card">
            <h3 className="text-xl mb-4">Buttons</h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Primary Button</span>
                <button className="apple-button">Get Started</button>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Secondary Button</span>
                <button className="apple-button-secondary">Learn More</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-muted-foreground block mb-2">Destructive</span>
                  <button className="apple-button bg-destructive">Delete</button>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-2">Success</span>
                  <button className="apple-button bg-apple-green">Confirm</button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="apple-card">
            <h3 className="text-xl mb-4">Cards</h3>
            <div className="space-y-4">
              <div className="apple-card bg-apple-white border">
                <h4 className="text-lg font-medium mb-2">Product Card</h4>
                <p className="text-muted-foreground mb-4">This is a simple card with rounded corners and subtle shadows.</p>
                <button className="apple-button-secondary text-sm">View details</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="apple-card bg-primary text-primary-foreground">
                  <h4 className="text-lg font-medium mb-2">Featured</h4>
                  <p className="text-primary-foreground/80 text-sm">Primary colored card</p>
                </div>
                <div className="apple-card bg-secondary border">
                  <h4 className="text-lg font-medium mb-2">Info</h4>
                  <p className="text-secondary-foreground/80 text-sm">Secondary card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-6">Navigation</h2>
        <div className="apple-card">
          <div className="apple-nav bg-background/80 -m-6 mb-6">
            <div className="flex items-center space-x-6">
              <div className="text-lg font-medium">Logo</div>
              <nav className="flex space-x-1">
                <a href="#" className="apple-nav-link">Home</a>
                <a href="#" className="apple-nav-link">Products</a>
                <a href="#" className="apple-nav-link">Features</a>
                <a href="#" className="apple-nav-link">Pricing</a>
                <a href="#" className="apple-nav-link">Support</a>
              </nav>
            </div>
          </div>
          <p className="text-muted-foreground">
            The Apple-inspired navigation bar features a frosted glass effect with backdrop blur,
            subtle transitions, and clean typography.
          </p>
        </div>
      </section>
    </div>
  );
} 