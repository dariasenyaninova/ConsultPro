import Header from "../components/Header.jsx";
import SideMenu from "../components/profile/SideMenu.jsx";
import React, {useEffect, useState} from "react";
import SpecialistCard from "../components/profile/SpecialistCard.jsx";
import {fetchClientRequests, fetchSpecialistRequests} from "../utils/api-requests.jsx";
import SentRequestCard from "../components/SentRequestCard.jsx";
import ClientRequestCard from "../components/ClientRequestCard.jsx";



export default function ClientRequestsPage() {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchSpecialistRequests()
            .then(setData)
            .catch(console.error);
    }, []);

    return (
        <>
            <Header/>
            <div className="profile-container">
                <SideMenu activeItem={"clients"}/>
                <section className="specialist-section">
                    <h2>Client requests</h2>
                    <main className="profile-main">
                        {data.map((s) => (
                            <ClientRequestCard key={s.id} request={s}/>
                        ))}
                    </main>
                </section>
            </div>
        </>
    );
}
