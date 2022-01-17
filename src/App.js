import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Browse from "./pages/Browse";

// Import Components
import Nav from "./components/nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
