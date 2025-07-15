import {useLocation, useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import {sendSpecialistRequest} from "../utils/api-requests.jsx";
import {useState} from "react";
import '../styles/global.css';
import '../styles/cards.css';
import '../styles/forms.css';

export default function SpecialistRequestPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const specialist = location.state;

    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await sendSpecialistRequest(specialist.id, message);
            setStatus(res.toString());
        } catch {
            setStatus('false');
        }
    };

    return (
        <>
            <Header/>
            <div className="space"/>
            <div className="space"/>
            <div className="container">
                <div className="specialist-card-full">
                    <div className="two-columns">
                        <div>
                            <h4>Name</h4>
                            <p>{specialist.name}</p>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <p>{specialist.phone}</p>
                        </div>
                        <div>
                            <h4>Experience</h4>
                            <p>{specialist.experience}</p>
                        </div>
                        <div>
                            <h4>Wage</h4>
                            <p>{specialist.wage}</p>
                        </div>
                        <div>
                            <h4>Department</h4>
                            <p>{specialist.department}</p>
                        </div>
                        <div>
                            <h4>About</h4>
                            <p>{specialist.about}</p>
                        </div>
                    </div>
                    <div className="request-footer">
                        <form id="form" onSubmit={handleSubmit} className="request-form">
                            <textarea
                                className="form-textarea large"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="write your message"
                                required
                            />
                            {status === 'loading' && <p>Sending...</p>}
                            {status === 'true' && <p style={{color: 'green'}}>Request sent successfully!</p>}
                            {status === 'false' && <p style={{color: 'red'}}>Failed to send request. Try again.</p>}
                        </form>

                        <div >
                            <button type="button" className="back-btn align-right" onClick={() => navigate(-1)}>
                                Back
                            </button>
                            <button type="submit" form="form" className="submit-btn">
                                Submit
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}
