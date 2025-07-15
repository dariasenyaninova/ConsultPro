
import React, { useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/profile/SideMenu";
import {useLocation} from "react-router-dom";
import SpecialistEditForm from "../components/SpecialistEditForm.jsx";

export default function ProfileSpecialistEditPage() {
  const location = useLocation();
  const specialistData = location.state;

  useEffect(() => {}, [specialistData]);

  return (
    <>
      <Header />
      <div className="profile-container">
        <SideMenu activeItem={"profile"} />
        <SpecialistEditForm initialData={specialistData}/>
      </div>
    </>
  );
}
