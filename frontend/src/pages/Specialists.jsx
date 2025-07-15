import React, {useEffect, useState} from "react";
import SpecialistCategoryBlock from "../components/main-specialists-page/SpecialistCategoryBlock.jsx";
import {API_BASE_URL} from "../config";
import Header from "../components/Header.jsx";

export default function Specialists() {
    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/specialists`)
            .then((res) => res.json())
            .then((data) => setSpecialists(data))
            .catch((err) => console.error("Failed to load specialists:", err));
    }, []);

    const grouped = specialists.reduce((acc, curr) => {
        acc[curr.department] = acc[curr.department] || [];
        acc[curr.department].push(curr);
        return acc;
    }, {});

    return (
        <>
            <Header />
            <div className="container">
                {Object.entries(grouped).map(([department, items]) => (
                    <SpecialistCategoryBlock
                        key={department}
                        title={department}
                        specialists={items}
                    />
                ))}
            </div>
        </>
    );
}