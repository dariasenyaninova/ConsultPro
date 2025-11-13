import Header from "../components/Header.jsx";
import SideMenu from "../components/profile/SideMenu.jsx";
import React, {useState} from "react";
import SpecialistCard from "../components/profile/SpecialistCard.jsx";
import {useLocation} from "react-router-dom";
import TextBlock from "../elements/TextBlock.jsx";
import {updateRequestStatus} from "../utils/api-requests.jsx";
import RequestCard from "../components/RequestCard.jsx";
import ButtonEdit, {ButtonBack, ButtonSubmit} from "../elements/Button.jsx";

export default function ClientRequestViewInfoPage() {
    const location = useLocation();
    const request = location.state;

    const [status, setStatus] = useState(request.status);

    function renderRequestActions(currentStatus) {
        switch (currentStatus) {
            case 'OPEN':
                return (
                    <div className="button-row">
                        <ButtonSubmit onClick={onAccept} text={"Accept"}/>
                        <ButtonBack onClick={onDecline} text={"Decline"}/>
                    </div>
                );
            case 'ACCEPTED':
                return (
                    <div className="button-row">
                        <ButtonBack onClick={onClose} text={"Close"}/>
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
        <div className="profile-container">
            <SideMenu activeItem={"clients"}/>
            <main className="profile-main">
                <h3 className="align-center">Requests</h3>
                <div className="profile-block">
                    <div>
                        <SpecialistCard specialist={request.specialist} editable={false}/>
                        <RequestCard request={request}/>
                            {renderRequestActions(status)}
                    </div>
                </div>
            </main>
        </div>
    );
}
