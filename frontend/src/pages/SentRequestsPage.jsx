import Header from "../components/Header.jsx";
import SideMenu from "../components/profile/SideMenu.jsx";
import React, {useEffect, useState} from "react";
import SpecialistCard from "../components/profile/SpecialistCard.jsx";
import {fetchClientRequests} from "../utils/api-requests.jsx";
import SentRequestCard from "../components/SentRequestCard.jsx";


export default function SentRequestsPage() {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchClientRequests()
            .then(setData)
            .catch(console.error);
    }, []);

    return (
        <>
            <Header/>
            <div className="profile-container">
                <SideMenu activeItem={"sent"}/>
                <section className="specialist-section">
                    <h2>Sent requests</h2>
                    <main className="profile-main">
                        {data.map((s) => (
                            <SentRequestCard key={s.id} request={s}/>
                        ))}
                    </main>
                </section>
            </div>
        </>
    );
}
