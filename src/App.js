import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>Find love</h1>}></Route>
        <Route path="/find-love" element={<h1>Find love</h1>}></Route>
        <Route path="/about-team" element={<h1>About Team</h1>}></Route>
        <Route path="/success-story" element={<h1>Success Story</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
