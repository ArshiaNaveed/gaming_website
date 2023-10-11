import { Routes, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
