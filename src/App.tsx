import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import Home from "./pages/Home";
import Convention from "./pages/Convention";
import ConventionArchive from "./pages/ConventionArchive";
import InfluencerClub from "./pages/InfluencerClub";
import Awards from "./pages/Awards";
import CompetitionDetail from "./pages/CompetitionDetail";
import CreatorStudio from "./pages/CreatorStudio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** Redirect while keeping any URL hash (e.g. /programs#next → /convention/2026#next). */
const RedirectWithHash = ({ to }: { to: string }) => {
  const { hash } = useLocation();
  return <Navigate to={`${to}${hash}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/convention" element={<Convention />} />
            <Route path="/convention/2026" element={<ConventionArchive />} />
            <Route path="/influencer-club" element={<InfluencerClub />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/awards/:slug" element={<CompetitionDetail />} />
            <Route path="/competition" element={<Navigate to="/awards#competitions" replace />} />
            <Route path="/creator-studio" element={<CreatorStudio />} />
            <Route path="/about" element={<RedirectWithHash to="/convention/2026" />} />
            <Route path="/programs" element={<RedirectWithHash to="/convention/2026" />} />
            <Route path="/get-involved" element={<RedirectWithHash to="/convention/2026" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
