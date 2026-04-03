import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Help from "./pages/Help";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
