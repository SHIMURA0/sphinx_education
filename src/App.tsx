import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
                {/* 背景元素可以保留 */}
                <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-cyan-300 rounded-full blur-3xl opacity-20"></div>
                </div>

                <AppRoutes />
            </div>
        </Router>
    );
};

export default App;
