import { Route, Routes, Navigate } from "react-router-dom";

import Signup from "./components/Singup";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import App3 from "./App3";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
      {user && <Route path="/" element={<App3/>} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
