import { Route, Routes, Navigate } from "react-router-dom";

import Signup from "./components/Singup";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App3 from "./App3";
import App2 from "./App2";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/home" element={<App2/>} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App3/>} />
       
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
