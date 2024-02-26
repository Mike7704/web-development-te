import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import OtterGallery from "./pages/OtterGallery";
import { OtterDetails } from "./pages/OtterDetails";
import ConservationInfo from "./pages/ConservationInfo";

export default function App() {
  return (
    <div>
      <h1>React Routes Demo</h1>
      <nav className="nav-bar">
        <Link to="/home">Home</Link>
        <Link to="/otters">Otters</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/otters" element={<OtterGallery />}></Route>
        {/* Anything after /otters is fine, : means dynamic route */}
        <Route path="/otters/:otter" element={<OtterDetails />}>
          <Route path="conservation" element={<ConservationInfo />} />
        </Route>
      </Routes>
    </div>
  );
}
