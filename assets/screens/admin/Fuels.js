import React, { useEffect } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import PrivateResources from "../../hooks/PrivateResources";
import Notification from "../../components/Notification"
import { Link } from "react-router-dom";

export default function Fuels() {

    const { loading, items, load, error } = PrivateResources(`${window.location.origin}/api/fuels`)

    useEffect(() => {
        load()
    }, [])

    return (
        <HeaderAdmin>
            {loading && (
                <Notification classname={"information"} message={"Loading ..."} />
            )}

            {!loading && (
                <>
                    {Object.keys(error).length > 0 && (
                        <Notification classname={"danger"} message={error.response.data.message ?? error.response.data.detail} />
                    )}

                    {Object.keys(items ?? {}).length > 0 && (
                        <>
                            <Link className={"btn btn-green"} to={"/admin/fuels/add"}>Add a fuel</Link>

                            <section className={"page-section mt-25"}>
                                <table className={"table"}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(items.results ?? {}).length > 0 ? (
                                            Object.values(items.results).map((item, index) => (
                                                <tr key={index}>
                                                    <td data-column={"Title"}>{item.title}</td>
                                                    <td data-column={"Price"}>{item.price}</td>
                                                    <td data-column={"Actions"}>
                                                        <Link className={"btn btn-orange -inline"} to={`/admin/fuel/${item.id}`}>
                                                            <img src={`${window.location.origin}/content/svg/pencil-white.svg`} alt={""} />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td data-column={"Message"} colSpan={3}>There is no fuel registered</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </section>
                        </>
                    )}
                </>
            )}
        </HeaderAdmin>
    )
}