import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login_Component from "./Login_Component";
import Signup_Component from "./Signup_Component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login_Component />} />
        <Route path="/signup" element={<Signup_Component />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
