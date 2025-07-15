import Button from "../../elements/Button.jsx";
import {useNavigate} from "react-router-dom";
import '../../styles/cards.css';

export default function ClientProfileCard({customer}) {
    const navigate = useNavigate();
    return (
        <div className="profile-card">
            <div className="profile-info two-columns">
                <div>
                    <h3>{customer.name}</h3>
                    <p>{customer.about}</p>
                    <p>{customer.phone}</p>
                </div>
            </div>
            <Button text={"Edit"} onClick={() => navigate("/profile/customer/edit", {state: customer})}/>
        </div>
    );
}
