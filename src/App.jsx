import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { Login } from "./components/login";
import { Signup } from "./components/Signup";
import Home from "./components/Home";
import "C:/Users/Ameen/Mits React/-lightweight/src/App.jsx";
import HireTalent from "./components/HireTalent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/hire" element={<HireTalent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
