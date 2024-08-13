import React from "react";
import Header from "../../components/Header";
import FuelSimulatorForm from "../../forms/FuelSimulatorForm";

export default function FuelSimulator() {

    return (
        <Header>
            <section className={"page-section"}>
                <div className={"page-wrapper"}>
                    <h2 className={"page-title"}>Fuel Simulator</h2>
                    <p className={"page-description"}>Calculate your potential costs on fuels</p>
                    <FuelSimulatorForm />
                </div>
            </section>
        </Header>
    )
}