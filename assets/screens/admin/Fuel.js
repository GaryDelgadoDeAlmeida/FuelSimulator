import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PrivateResources from "../../hooks/PrivateResources";
import HeaderAdmin from "../../components/HeaderAdmin";
import Notification from "../../components/Notification";
import FuelForm from "../../forms/FuelForm";

export default function Fuel() {

    const { fuelID } = useParams()
    if(isNaN(fuelID)) {
        return <Navigate to={"/admin/fuels"} />
    }

    const { loading, items, load, error } = PrivateResources(`${window.location.origin}/api/backoffice/fuel/${fuelID}`)
    useEffect(() => {
        load()
    }, [fuelID])

    return (
        <HeaderAdmin>
            <Link className={"btn btn-primary"} to={"/admin/fuels"}>Return</Link>

            <section className={"page-section mt-25"}>
                {loading && (
                    <Notification classname={"information"} message={"Loading ..."} />
                )}

                {!loading && (
                    <>
                        {Object.keys(error).length > 0 && (
                            <Notification classname={"danger"} message={error.response.data.message ?? error.response.data.detail} />
                        )}

                        {Object.keys(items ?? {}).length > 0 && (
                            <div className={"card"}>
                                <div className={"-content"}>
                                    <FuelForm fuel={items.results} />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </section>
        </HeaderAdmin>
    )
}