export default function SentRequestCard({request}) {
    // const navigate = useNavigate();

    return (
        <div className="margin-bottom">
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
                {/*<Button onClick={() => navigate(`/profile/request/edit`, { state: request }) } text={"Edit"} />*/}
            </div>
        </div>
    );
}
