import {useNavigate} from "react-router-dom";
import Button from "../elements/Button.jsx";


export default function ClientRequestCard({ request }) {
  const navigate = useNavigate();

  return (
      <div className="profile-card">
        <div className="info-grid two-columns">
          <div>
            <strong>Name</strong><br/>{request.specialist.name}
          </div>
          <div>
            <strong>Phone</strong><br/>{request.specialist.phone}
          </div>
          <div>
            <strong>Status</strong><br/>{request.status}
          </div>
          <div>
            <strong>Department</strong><br/>{request.specialist.department}
          </div>
        </div>
        <Button onClick={() => navigate(`/requests/client/view`, { state: request }) } text={"View"} />
    </div>
  );
}
