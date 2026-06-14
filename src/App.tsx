import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Management } from "./pages/students/Management";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students/management/" element={<Management />} />
    </Routes>
  );
}

export default App;
