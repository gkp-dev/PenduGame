
import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

// Components
import Homepage from "./pages/Homepage";
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
