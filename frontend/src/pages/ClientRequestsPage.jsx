import Header from "../components/Header.jsx";
import SideMenu from "../components/profile/SideMenu.jsx";
import React, {useEffect, useState} from "react";
import SpecialistCard from "../components/profile/SpecialistCard.jsx";
import {fetchSpecialistRequests} from "../utils/api-requests.jsx";
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
        <div className="profile-container">
            <SideMenu activeItem={"clients"}/>
            <main className="profile-main">
                <h3 className="align-center">Client requests</h3>
                <div className="profile-block">
                    {data.map((s) => (
                        <ClientRequestCard key={s.id} request={s}/>
                    ))}
                </div>
            </main>
        </div>
);
}
