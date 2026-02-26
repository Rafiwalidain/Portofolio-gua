import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ComputersCanvas from "./components/canvas/Computers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* WRAPPER HERO + ABOUT */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <ComputersCanvas />
          </div>

          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
          </div>
        </div>

        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
