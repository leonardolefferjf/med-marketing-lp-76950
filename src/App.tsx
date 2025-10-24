import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MedMarketingLP1 from "./features/landings/medmarketing-lp1/MedMarketingLP1";
import MedMarketingLP2 from "./features/landings/medmarketing-lp2/MedMarketingLP2";
import MedMarketingLP3 from "./features/landings/medmarketing-lp3/MedMarketingLP3";
import MedMarketingLP4 from "./features/landings/medmarketing-lp4/MedMarketingLP4";
import MedMarketingLP5 from "./features/landings/medmarketing-lp5/MedMarketingLP5";
import MedMarketingLP6 from "./features/landings/medmarketing-lp6/MedMarketingLP6";
import MedMarketingLP7 from "./features/landings/medmarketing-lp7/MedMarketingLP7";
import MedMarketingLP8 from "./features/landings/medmarketing-lp8/MedMarketingLP8";
import MedMarketingLP9 from "./features/landings/medmarketing-lp9/MedMarketingLP9";
import MedMarketingLP10 from "./features/landings/medmarketing-lp10/MedMarketingLP10";
import MedMarketingLP11 from "./features/landings/medmarketing-lp11/MedMarketingLP11";
import MedMarketingLP12 from "./features/landings/medmarketing-lp12/MedMarketingLP12";
import MedMarketingLP13 from "./features/landings/medmarketing-lp13/MedMarketingLP13";
import MedMarketingLP14 from "./features/landings/medmarketing-lp14/MedMarketingLP14";
import MedMarketingLP15 from "./features/landings/medmarketing-lp15/MedMarketingLP15";
import MedMarketingLP16 from "./features/landings/medmarketing-lp16/MedMarketingLP16";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lp1" element={<MedMarketingLP1 />} />
        <Route path="/lp2" element={<MedMarketingLP2 />} />
        <Route path="/lp3" element={<MedMarketingLP3 />} />
        <Route path="/lp4" element={<MedMarketingLP4 />} />
        <Route path="/lp5" element={<MedMarketingLP5 />} />
        <Route path="/lp6" element={<MedMarketingLP6 />} />
        <Route path="/lp7" element={<MedMarketingLP7 />} />
        <Route path="/lp8" element={<MedMarketingLP8 />} />
        <Route path="/lp9" element={<MedMarketingLP9 />} />
        <Route path="/lp10" element={<MedMarketingLP10 />} />
        <Route path="/lp11" element={<MedMarketingLP11 />} />
        <Route path="/lp12" element={<MedMarketingLP12 />} />
        <Route path="/lp13" element={<MedMarketingLP13 />} />
        <Route path="/lp14" element={<MedMarketingLP14 />} />
        <Route path="/lp15" element={<MedMarketingLP15 />} />
        <Route path="/lp16" element={<MedMarketingLP16 />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
