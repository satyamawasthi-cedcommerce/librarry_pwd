import { Route, Routes } from "react-router-dom";
// importing required modules
import "./App.css";
import Details from "./Components/Details";
import Landing from "./Components/Landing";
function App() {
  return (
    <div className="App">
      {/* providing navigation */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
