
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RotateView from "./pages/RotateView";
import ZoomView from "./pages/ZoomView";
import PanView from "./pages/PanView";
import ResetView from "./pages/ResetView";
import ExportView from "./pages/ExportView";
import AnalyzeView from "./pages/AnalyzeView";
import MeasureView from "./pages/MeasureView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rotate" element={<RotateView />} />
          <Route path="/zoom" element={<ZoomView />} />
          <Route path="/pan" element={<PanView />} />
          <Route path="/reset" element={<ResetView />} />
          <Route path="/export" element={<ExportView />} />
          <Route path="/analyze" element={<AnalyzeView />} />
          <Route path="/measure" element={<MeasureView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
