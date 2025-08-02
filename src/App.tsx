import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import ModernIndex from "./pages/ModernIndex";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Operations from "./pages/Operations";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ErrorBoundary from "./components/ErrorBoundary";
import SEO from "./components/SEO";
import { debounce } from "./utils/performance";

// Lazy load non-critical components for better performance
const LazyNotFound = lazy(() => import("./pages/NotFound"));
const LazyPrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const LazyTerms = lazy(() => import("./pages/Terms"));

// Create a stable query client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading component for lazy-loaded routes
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// Performance monitoring
const reportWebVitals = debounce((metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    console.log('Web Vital:', metric);
  }
}, 1000);

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <SEO />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<ModernIndex />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/operations" element={<Operations />} />
                  <Route path="/sustainability" element={<Sustainability />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  
                  {/* Lazy-loaded routes */}
                  <Route 
                    path="/privacy-policy" 
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <LazyPrivacyPolicy />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/terms" 
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <LazyTerms />
                      </Suspense>
                    } 
                  />
                  
                  {/* Catch-all route for 404 */}
                  <Route 
                    path="*" 
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <LazyNotFound />
                      </Suspense>
                    } 
                  />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
