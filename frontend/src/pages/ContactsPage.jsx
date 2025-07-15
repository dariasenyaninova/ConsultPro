import React from "react";
import {FaTelegramPlane, FaMapMarkerAlt, FaPhone} from "react-icons/fa";
import Header from "../components/Header.jsx";

const ContactsPage = () => {
    return (
        <>
            <Header/>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#f5f5f5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Montserrat, sans-serif',
                zIndex: 0
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '3rem 2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.05)',
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: '600px'
                }}>
                    <h1 style={{
                        fontSize: '1.8rem',
                        fontWeight: '900',
                        marginBottom: '2rem',
                        color: '#0d0c3f',
                        textShadow: '2px 2px 0 #bcbccf'
                    }}>
                        HOW TO FIND US
                    </h1>

                    <div style={{marginBottom: '1.5rem', color: '#2F2FA2', fontSize: '1.2rem', fontWeight: 600}}>
                        <FaPhone style={{marginRight: '0.5rem'}}/> +372 5706 4455
                    </div>

                    <div style={{marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 500}}>
                        <FaTelegramPlane style={{marginRight: '0.5rem', color: '#2F2FA2'}}/>
                        Telegram: <span style={{color: '#ff4c7c', fontWeight: 700}}>@ConsultPro</span>
                    </div>

                    <div style={{fontSize: '1.2rem', fontWeight: 500, color: '#2F2FA2'}}>
                        <FaMapMarkerAlt style={{marginRight: '0.5rem'}}/> Office: Tartu mnt 15
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactsPage;
