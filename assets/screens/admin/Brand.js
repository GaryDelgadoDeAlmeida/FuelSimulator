import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { Link } from "react-router-dom";

export default function Brand() {

    return (
        <HeaderAdmin>
            <Link to={"/admin/brands"}>Return</Link>

            <section className={"page-section mt-25"}></section>
        </HeaderAdmin>
    )
}