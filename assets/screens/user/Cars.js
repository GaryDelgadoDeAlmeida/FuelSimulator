import React from "react"
import Header from "../../components/Header"
import { Link } from "react-router-dom"

export default function Cars() {

    return (
        <Header>
            <section className={"page-hero-2nd"}>
                <div className={"hero-wrapper"}>
                    <h1>Cars</h1>
                    <div className={"breadcrumbs"}>
                        <Link to={"/"}>Home</Link>
                        <span>Cars</span>
                    </div>
                </div>
            </section>

            <section className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h1>Listings cars</h1>
                </div>
            </section>
        </Header>
    )
}