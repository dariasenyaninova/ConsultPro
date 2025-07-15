import React, {useEffect} from "react";
import Header from "../components/Header";
import SideMenu from "../components/profile/SideMenu";
import CustomerEditForm from "../components/CustomerEditForm.jsx";
import {useLocation} from "react-router-dom";

export default function ProfileCustomerEditPage() {
    const location = useLocation();
    const initialData = location.state;

    useEffect(() => {}, [initialData]);
    return (
        <>
            <Header/>
            <div className="profile-container ">
                <SideMenu activeItem={"profile"}/>
                <CustomerEditForm initialData={initialData}/>
            </div>
        </>
    );
}
