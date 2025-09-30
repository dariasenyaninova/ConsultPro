import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import SideMenu from "../components/profile/SideMenu";
import ClientProfileCard from "../components/profile/ClientProfileCard";
import ListSpecialties from "../components/profile/ListSpecialties";
import {useNavigate} from "react-router-dom";
import {fetchUserProfile} from "../utils/api-customer.jsx";
import ButtonEdit, {ButtonSubmit, ButtonSubmitBig} from "../elements/Button.jsx";

export default function ProfilePage() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserProfile()
            .then((data) => {
                setData(data);
                localStorage.setItem("hasSpecialties", (!!data.specialties?.length).toString());
            })
            .catch(console.error);
    }, []);

    if (!data) return <div>Loading...</div>;

    const hasSpecialties = !!data.specialties?.length;
    return (
        <div className="profile-container">
            <SideMenu activeItem={"profile"}/>
            <main className="profile-main">
                <div className="profile-block">
                    <ClientProfileCard customer={data.customerDto}/>
                    {hasSpecialties ? (
                        <ListSpecialties specialties={data.specialties}/>
                    ) : (
                        <div className="text-right  padding-right">
                            <ButtonSubmitBig text={"Become specialist"}
                                             onClick={() => navigate("/profile/specialist/edit")}/>
                        </div>
                    )}
                </div>
            </main>
        </div>
);
}