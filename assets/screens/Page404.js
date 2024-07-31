import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Page404() {

    return (
        <Header>
            <section className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h1 className={"page-title"}>404 Page not found</h1>
                    <p>My bad, the page your are loocking for don't exist.</p>
                    <Link className={"btn btn-primary"} to={"/"}>Back to home</Link>
                </div>
            </section>
        </Header>
    )
}