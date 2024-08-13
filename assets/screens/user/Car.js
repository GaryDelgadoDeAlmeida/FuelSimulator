import React from "react";
import Header from "../../components/Header";
import { Navigate, useParams } from "react-router-dom";

export default function Car() {

    const { carID } = useParams()
    if(isNaN(carID)) {
        return <Navigate to={"/cars"} />
    }

    return (
        <Header>
            <h1>Car single</h1>
        </Header>
    )
}