import React, { useEffect, useState } from "react";
import SideMenu from "../components/profile/SideMenu";
import { useLocation, useNavigate } from "react-router-dom";
import SpecialistEditForm from "../components/profile/SpecialistEditForm.jsx";

export default function ProfileSpecialistEditPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [specialist, setSpecialist] = useState(location.state || null);

    useEffect(() => {
        if (!specialist) {
            try {
                const cached = localStorage.getItem('specialistEdit');
                if (cached) {
                    const parsed = JSON.parse(cached);
                    setSpecialist(parsed);
                    navigate('.', { state: parsed, replace: true });
                }
            } catch { /* empty */ }
        }
    }, []);

    useEffect(() => {
        if (location.state) {
            setSpecialist(location.state);
            try { localStorage.setItem('specialistEdit', JSON.stringify(location.state)); } catch {}
        }
    }, [location.state]);

    const handleUpdated = (updatedData) => {
        setSpecialist(updatedData);
        try { localStorage.setItem('specialistEdit', JSON.stringify(updatedData)); } catch {}
    };

    return (
        <div className="profile-container">
            <SideMenu activeItem={"profile"} />
            <SpecialistEditForm initialData={specialist} onUpdated={handleUpdated} />
        </div>
    );
}
