import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import Notification from "../../components/Notification"
import PrivateResources from "../../hooks/PrivateResources"

export default function Brands() {

    const [offset, setOffset] = useState(1)
    const { loading, items, load, error } = PrivateResources(`${window.location.origin}/api/backoffice/brands?offset=${offset}`)
    
    useEffect(() => {
        load()
    }, [offset])

    return (
        <HeaderAdmin>
            <Link to={"/admin/brands/add"}>Add a brands</Link>

            <section className={"page-section mt-25"}>
                {!loading && (
                    <>
                        {Object.keys(error).length > 0 && (
                            <Notification classname={"danger"} message={error.response.data.message ?? error.response.data.detail} />
                        )}

                        {Object.keys(items ?? {}).length > 0 && (
                            <table className={"table"}>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Nbr vehicules</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.values(items.results ?? {}).map((item, index) => (
                                        <tr key={index}>
                                            <td data-column={"Title"}></td>
                                            <td data-column={"Nbr vehicules"}></td>
                                            <td data-column={"Actions"}>
                                                <Link className={"btn btn-primary"} to={"/admin/brand/"}>See</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </>
                )}
            </section>
        </HeaderAdmin>
    )
}