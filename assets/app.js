/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// User
import Home from './screens/user/Home';
import Login from './screens/user/Login';

// Admin
import AdminHome from "./screens/admin/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/admin"} element={<AdminHome />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);