
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideMenu from "../components/profile/SideMenu";
import ClientProfileCard from "../components/profile/ClientProfileCard";
import ListSpecialties from "../components/profile/ListSpecialties";
import {useNavigate} from "react-router-dom";
import {fetchUserProfile} from "../utils/api-customer.jsx";
import '../styles/profile.css';
import '../styles/buttons.css';

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
      <>
        <Header />
        <div className="profile-container">
          <SideMenu activeItem={"profile"}/>
          <main className="profile-main">
            <ClientProfileCard customer={data.customerDto} />
            {hasSpecialties ? (
                <ListSpecialties specialties={data.specialties} />
            ) : (
                <button className="submit-btn" onClick={() => navigate(`/profile/specialist/edit`) }>Become specialist</button>
            )}
          </main>
        </div>
      </>
  );
}