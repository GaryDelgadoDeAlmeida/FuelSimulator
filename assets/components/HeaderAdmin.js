import React from "react";
import { Link } from "react-router-dom";

export default function HeaderAdmin(props) {

    return (
        <div className={"page-admin"}>
            <div className={"page-header"}>
                <nav className={"menu"}>
                    <li><Link to={"/admin"}>Home</Link></li>
                </nav>
            </div>
            <div className={"page-content"}>
                <div className={"page-wrapper"}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}