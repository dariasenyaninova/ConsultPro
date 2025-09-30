import {logout} from "../../utils/auth.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function SideMenu({ activeItem }) {
    const navigate = useNavigate();
    const [hasSpecialties, setHasSpecialties] = useState(false);
    useEffect(() => {
        const stored = localStorage.getItem("hasSpecialties");
        setHasSpecialties(stored === "true");
    }, []);

    return (
        <aside className="side-menu">
            <ul>
                <li className={activeItem === 'profile' ? 'active' : ''} onClick={() => navigate(`/profile/me`)}>My Profile</li>
                <li className={activeItem === 'sent' ? 'active' : ''} onClick={() => navigate(`/requests/sent`)}>Sent Requests</li>
                {hasSpecialties && (
                    <li className={activeItem === 'clients' ? 'active' : ''} onClick={() => navigate(`/requests/client`)}>Client Requests</li>
                )}
                <li className={activeItem === 'notifications' ? 'active' : ''}>Notifications</li>
                <li className="danger" onClick={logoutHandle}>Log out</li>
            </ul>
        </aside>
    );

    function logoutHandle() {
        logout()
        navigate("/")
        window.location.reload();
    }
}
