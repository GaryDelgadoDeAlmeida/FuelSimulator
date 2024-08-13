import React, { useState } from "react";
import Notification from "../components/Notification";

export default function FuelForm({fuel = null}) {

    const [formResponse, setFormResponse] = useState({})
    const [credentials, setCredentials] = useState({})

    const handleChange = (e, fieldName) => {
        setCredentials({
            ...credentials,
            [fieldName]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            {Object.keys(formResponse).length > 0 && (
                <Notification {...formResponse} />
            )}

            <form className={"form"}></form>
        </>
    )
}