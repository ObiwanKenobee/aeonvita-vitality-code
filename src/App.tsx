import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VitalityDashboard from "./pages/VitalityDashboard";
import SpermHealthLab from "./pages/SpermHealthLab";
import TestosteroneRhythm from "./pages/TestosteroneRhythm";
import ProtocolGenerator from "./pages/ProtocolGenerator";
import DetoxScanner from "./pages/DetoxScanner";
import RegenerativeLab from "./pages/RegenerativeLab";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<VitalityDashboard />} />
          <Route path="/sperm-health" element={<SpermHealthLab />} />
          <Route path="/testosterone" element={<TestosteroneRhythm />} />
          <Route path="/protocols" element={<ProtocolGenerator />} />
          <Route path="/detox" element={<DetoxScanner />} />
          <Route path="/regenerative" element={<RegenerativeLab />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
