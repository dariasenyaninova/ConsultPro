import ButtonEdit from "../../elements/Button.jsx";
import {useNavigate} from "react-router-dom";

export default function SpecialistCard({specialist, editable = true}) {
    const navigate = useNavigate();
    return (
        <div className="specialist-card-full">
            <div className="two-columns">
                <div>
                    <strong>Name</strong><br/>{specialist.name}
                </div>
                <div>
                    <strong>Phone</strong><br/>{specialist.phone}
                </div>
                <div>
                    <strong>Experience</strong><br/>{specialist.experience}
                </div>
                <div>
                    <strong>Wage</strong><br/>{specialist.wage}
                </div>
                <div>
                    <strong>Department</strong><br/>{specialist.department}
                </div>
                <div>
                    <strong>About</strong><br/>{specialist.about}
                </div>
            </div>
            <div className="space"/>
            <br/>
            <div >
                {editable ?
                    (<ButtonEdit onClick={() => navigate(`/profile/specialist/edit`, {state: specialist})} text={"Edit"}/>)
                    :
                    <></>
                }
            </div>
        </div>
    );
}
