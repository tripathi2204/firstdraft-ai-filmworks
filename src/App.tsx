import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ShootingSchedule from "./pages/services/ShootingSchedule";
import ScriptBreakdown from "./pages/services/ScriptBreakdown";
import FilmBudgeting from "./pages/services/FilmBudgeting";
import AIPitchDeck from "./pages/services/AIPitchDeck";
import FilmBusinessPlan from "./pages/services/FilmBusinessPlan";
import AIFilmTrailer from "./pages/services/AIFilmTrailer";
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
          <Route path="/about" element={<About />} />
          <Route path="/services/shooting-schedule" element={<ShootingSchedule />} />
          <Route path="/services/script-breakdown" element={<ScriptBreakdown />} />
          <Route path="/services/film-budgeting" element={<FilmBudgeting />} />
          <Route path="/services/ai-pitch-deck" element={<AIPitchDeck />} />
          <Route path="/services/film-business-plan" element={<FilmBusinessPlan />} />
          <Route path="/services/ai-film-trailer" element={<AIFilmTrailer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
