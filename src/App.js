import AppRoutes from "./routes/routes";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <ToastContainer autoClose={3000} />;
            <AppRoutes />;
        </div>
    );
}

export default App;
