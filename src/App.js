import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";

// Import Components
import Nav from "./components/nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<h1>Browse Items</h1>} />
      </Routes>
    </div>
  );
}

export default App;
