import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

    return (
        <div className={"page"}>
            <div className={"page-header"}>
                <div className={"header-wrapper"}>
                    <div className={"header-desktop"}>
                        <div className={"-left"}></div>
                        <div className={"-right"}>
                            <div className={"menu"}>
                                <Link to={"/"}>Home</Link>
                                <Link to={"/login"}>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"page-content"}>
                {props.children}
            </div>
            <div className={"page-footer"}>
                <div className={"footer-copyright"}>
                    <p>
                        Copyright {(new Date()).getFullYear()} &minus; All right reserved<br/>
                        Designed & Realised by <a href="https://garry-almeida.com">Garry ALMEIDA</a>
                    </p>
                </div>
            </div>
        </div>
    )
}