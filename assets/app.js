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
import AdminProfile from "./screens/admin/Profile";
import AdminBrands from "./screens/admin/Brands";
import AdminBrand from "./screens/admin/Brand";
import AdminCars from "./screens/admin/Cars";
import AdminCar from "./screens/admin/Car";
import AdminCarType from "./screens/admin/CarType";
import AdminFuels from "./screens/admin/Fuels";
import AdminFuel from "./screens/admin/Fuel";
import AdminFuelsHistory from "./screens/admin/FuelsHistory";

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
                <Route path={"/admin/profile"} element={<AdminProfile />} />
                <Route path={"/admin/cars"} element={<AdminCars />} />
                <Route path={"/admin/cars/add"} element={<AdminHome />} />
                <Route path={"/admin/car/:carID"} element={<AdminCar />} />
                <Route path={"/admin/car-types"} element={<AdminCarType />} />
                <Route path={"/admin/brands"} element={<AdminBrands />} />
                <Route path={"/admin/brands/add"} element={<AdminHome />} />
                <Route path={"/admin/brand/:brandID"} element={<AdminBrand />} />
                <Route path={"/admin/fuels"} element={<AdminFuels />} />
                <Route path={"/admin/fuels/add"} element={<AdminHome />} />
                <Route path={"/admin/fuel/:fuelID"} element={<AdminFuel />} />
                <Route path={"/admin/fuels-history"} element={<AdminFuelsHistory />} />
                
                {/* Common */}
                <Route path={"/login"} element={<Login />} />
                <Route path={"*"} element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);