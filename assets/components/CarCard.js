import React from "react";

export default function CarCard({carItem}) {

    return (
        <div className={"car-card"}>
            <div className={"-header"}>
                <img src={`${window.location.origin}/${carItem.imgPath}`} alt={""} />
            </div>
            <div className={"-content"}>
                <label>{carItem.title}</label>
            </div>
        </div>
    )
}