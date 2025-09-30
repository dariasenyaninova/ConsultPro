import {useNavigate} from "react-router-dom";

export default function SpecialistCard({specialist}) {
    const navigate = useNavigate();

    return (
        <div>
            <div
                className="specialist-card"
                onClick={() => navigate(`/specialist/request`, {state: specialist})}
            >
                <div className="card-image"/>
                <h3 className="card-name">{specialist.name}</h3>
                <p className="card-experience">{specialist.experience} y. of practice</p>
                <p className="card-rate">{specialist.wage}</p>
            </div>
        </div>
    );
}
