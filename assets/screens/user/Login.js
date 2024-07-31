import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../forms/LoginForm";

export default function Login() {

    return (
        <Header>
            <section className={"page-section"}>
                <div className={"page-wrapper"}>
                    <div className={"login-card"}>
                        <div className={"-content"}>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </section>
        </Header>
    )
}