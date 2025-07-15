import Header from "../components/Header.jsx";
import SideMenu from "../components/profile/SideMenu.jsx";
import React, {useState} from "react";
import SpecialistCard from "../components/profile/SpecialistCard.jsx";
import {useLocation} from "react-router-dom";
import TextBlock from "../elements/TextBlock.jsx";
import {updateRequestStatus} from "../utils/api-requests.jsx";
import RequestCard from "../components/RequestCard.jsx";

export default function ClientRequestViewInfoPage() {
    const location = useLocation();
    const request = location.state;

    const [status, setStatus] = useState(request.status);

    function renderRequestActions(currentStatus) {
        switch (currentStatus) {
            case 'OPEN':
                return (
                    <div>
                        <button style={{marginRight:"30px"}} onClick={onAccept}>Accept</button>
                        <button onClick={onDecline}>Decline</button>
                    </div>
                );
            case 'ACCEPTED':
                return (
                    <div>
                        <button onClick={onClose}>Close</button>
                    </div>
                );
            case 'DECLINED':
            case 'CLOSED':
            case 'CANCELED':
            default:
                return null;
        }
    }

    function onAccept() {
        handleStatusUpdate('ACCEPTED');
    }

    function onDecline() {
        handleStatusUpdate('DECLINED');
    }

    function onClose() {
        handleStatusUpdate('CLOSED');
    }

    const handleStatusUpdate = async (newStatus) => {
        try {
            const result = await updateRequestStatus(request.id, newStatus);
            if (result) {
                console.log(`Status successfully updated to ${newStatus}`);
                setStatus(newStatus);
            }
        } catch (err) {
            console.error('Error while updating status:', err);
        }
    };

    return (
        <>
            <Header/>
            <div className="profile-container">
                <SideMenu activeItem={"clients"}/>
                <section className="specialist-section">
                    <h2>Requests</h2>
                    <main className="profile-main">
                        <SpecialistCard specialist={request.specialist} editable={false}/>
                        {/*<TextBlock title={"Status"} text={status} />*/}
                        {/*<TextBlock title={"Data"} text={request.createdAt} />*/}
                        {/*<TextBlock title={"Message"} text={request.message} />*/}
                        {/*<TextBlock title={"ID"} text={request.id} />*/}
                        <RequestCard request={request}/>
                        <div style={{
                            alignSelf: "center",
                            paddingBottom:"5rem"
                        }}>
                            {renderRequestActions(status)}
                        </div>
                    </main>
                </section>
            </div>
        </>
    );
}
