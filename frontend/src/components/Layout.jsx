import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import React from "react";

export default function Layout() {
    return (

        <div className="app">
            <Header className="header"/>
            <main className="main container">
                <Outlet/>
            </main>
        </div>
    );
}