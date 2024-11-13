import Banner from "./components/Banner";
import CreateAmigurumi from "./views/CreateAmigurumi";
import PatternGallery from "./views/PatternGallery";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Banner />
      <Routes>
        <Route path="/view-patterns" element={<PatternGallery />} />
        {/* <Route
          path="/view-patterns/:amigurumiId"
          element={<AmigurumiPatternCard />}
        /> */}
        <Route path="/add-pattern" element={<CreateAmigurumi />} />
      </Routes>
    </div>
  );
}

export default App;
