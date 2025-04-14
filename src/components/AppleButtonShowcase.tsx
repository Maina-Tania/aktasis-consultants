import React from 'react';
import { Button } from './ui/button';

export function AppleButtonShowcase() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl mb-6 font-inter">Apple-Inspired Buttons</h1>
        <p className="text-muted-foreground mb-8">
          Using the official Button component with Apple-inspired variants.
        </p>
        
        <div className="apple-card">
          <h2 className="text-2xl mb-6">Button Variants</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Apple Primary</span>
                <Button variant="apple" size="apple-default">Get Started</Button>
              </div>
              
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Apple Secondary</span>
                <Button variant="apple-secondary" size="apple-default">Learn More</Button>
              </div>
              
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Apple Destructive</span>
                <Button variant="apple-destructive" size="apple-default">Delete</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Apple Large</span>
                <Button variant="apple" size="apple-lg">Download Now</Button>
              </div>
              
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Apple Secondary Large</span>
                <Button variant="apple-secondary" size="apple-lg">View Details</Button>
              </div>
              
              <div>
                <span className="text-xs text-muted-foreground block mb-2">With Icon</span>
                <Button variant="apple" size="apple-default">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  Continue
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-xl mb-4">Comparison with Standard Buttons</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Default</span>
                <Button variant="default">Default Button</Button>
              </div>
              
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Secondary</span>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              
              <div>
                <span className="text-xs text-muted-foreground block mb-2">Apple</span>
                <Button variant="apple" size="apple-default">Apple Button</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 