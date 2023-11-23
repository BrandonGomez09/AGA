import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Cart from "../pages/Cart.jsx";
import Error from "../pages/Error.jsx";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
