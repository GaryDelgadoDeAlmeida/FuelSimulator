import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function HeaderAdmin(props) {

    const [isLogged, setIsLogged] = useState(true)

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.setItem("token", "")
        setIsLogged(false)
    }

    return (
        <>
            {!isLogged && (
                <Navigate to={"/login"} />
            )}

            <div className={"page-admin"}>
                <div className={"page-header"}>
                    <nav className={"menu"}>
                        <li><Link to={"/admin"}>Home</Link></li>
                        <li><Link to={"/admin/brands"}>Brands</Link></li>
                        <li><Link to={"/admin/cars"}>Cars</Link></li>
                        <li><Link to={"/admin/fuels"}>Fuels</Link></li>
                        <li><Link to={"/admin/fuels-histories"}>Fuels Histories</Link></li>
                        <li><Link to={"#logout"} onClick={(e) => handleLogout(e)}>Logout</Link></li>
                    </nav>
                </div>
                <div className={"page-content"}>
                    <div className={"page-wrapper"}>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}