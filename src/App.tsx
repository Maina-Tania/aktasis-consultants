
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          
          {/* Future Routes - These will be implemented later */}
          <Route path="/about" element={<NotFound />} />
          <Route path="/operations" element={<NotFound />} />
          <Route path="/sustainability" element={<NotFound />} />
          <Route path="/leadership" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/privacy-policy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
