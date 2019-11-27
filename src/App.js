import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
