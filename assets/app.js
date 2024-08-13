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
import FuelSimulator from './screens/user/FuelSimulator';
import Cars from './screens/user/Cars';
import Car from './screens/user/Car';
import Login from './screens/user/Login';

// Admin
import AdminHome from "./screens/admin/Home";

// Common
import Page404 from "./screens/Page404"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/cars"} element={<Cars />} />
                <Route path={"/car/:carID"} element={<Car />} />
                <Route path={"/fuel-simulator"} element={<FuelSimulator />} />

                {/* Admin */}
                <Route path={"/admin"} element={<AdminHome />} />
                <Route path={"/admin/profile"} element={<AdminHome />} />
                <Route path={"/admin/cars"} element={<AdminHome />} />
                <Route path={"/admin/cars/add"} element={<AdminHome />} />
                <Route path={"/admin/car/:carID"} element={<AdminHome />} />
                <Route path={"/admin/brands"} element={<AdminHome />} />
                <Route path={"/admin/brands/add"} element={<AdminHome />} />
                <Route path={"/admin/brand/:brandID"} element={<AdminHome />} />
                <Route path={"/admin/fuels"} element={<AdminHome />} />
                <Route path={"/admin/fuels/add"} element={<AdminHome />} />
                <Route path={"/admin/fuel/:fuelID"} element={<AdminHome />} />
                <Route path={"/admin/fuels-histories"} element={<AdminHome />} />
                
                {/* Common */}
                <Route path={"/login"} element={<Login />} />
                <Route path={"*"} element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);