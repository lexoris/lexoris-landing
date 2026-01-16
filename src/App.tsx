import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import WhyLexoris from "./pages/WhyLexoris";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
import Security from "./pages/Security";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import LegalTranscriptionSoftwareAustralia from "./pages/LegalTranscriptionSoftwareAustralia";
import TranscriptionForBarristers from "./pages/TranscriptionForBarristers";
import LegalDictationSoftware from "./pages/LegalDictationSoftware";
import SecureLegalTranscription from "./pages/SecureLegalTranscription";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-lexoris" element={<WhyLexoris />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/security" element={<Security />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/legal-transcription-software-australia" element={<LegalTranscriptionSoftwareAustralia />} />
          <Route path="/transcription-for-barristers" element={<TranscriptionForBarristers />} />
          <Route path="/legal-dictation-software" element={<LegalDictationSoftware />} />
          <Route path="/secure-legal-transcription" element={<SecureLegalTranscription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

export default App;
