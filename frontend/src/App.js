import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import HomePage from "./pages/HomePage";
import PosPage from "./pages/POSPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pos" element={<PosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
