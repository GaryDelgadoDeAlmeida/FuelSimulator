import React from "react";
import Header from "../../components/Header";
import FuelSimulatorForm from "../../forms/FuelSimulatorForm";

export default function Home() {

    return (
        <Header>
            <div className={"page-hero"}>
                <div className={"hero-background"}>
                    <img src={`${window.location.origin}/content/img/background-hero.jpg`} alt={""} />
                    <div className={"hero-superposition"}></div>
                </div>
                <div className={"hero-wrapper"}>
                    <h1 className={"-hero-title"}>Fuel Simulator</h1>
                    <p className={"-hero-description"}>Calculate your potential costs on fuels</p>
                </div>
            </div>

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