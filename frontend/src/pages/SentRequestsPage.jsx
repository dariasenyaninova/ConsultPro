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
        <div className="profile-container">
            <SideMenu activeItem={"sent"}/>
            <main className="profile-main">
                <h3 className="align-center">Sent requests</h3>
                <div className="profile-block">
                    {data.map((s) => (
                        <SentRequestCard key={s.id} request={s}/>
                    ))}
                </div>
            </main>
        </div>
);
}
