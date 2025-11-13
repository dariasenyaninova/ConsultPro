import TextField from '../../elements/TextField.jsx';
import {useEffect, useState} from 'react';
import {createSpecialist, updateSpecialist} from '../../utils/api-specialist.jsx';
import {ButtonSubmit} from "../../elements/Button.jsx";
import { useNavigate } from 'react-router-dom';

export default function SpecialistEditForm({ initialData, onUpdated = () => {} }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        experience: '',
        department: '',
        wage: '',
        about: '',
    });

    const [status, setStatus] = useState(null); // "loading" | "true" | "false"
    const navigate = useNavigate();

    useEffect(() => {
        if (initialData && typeof initialData === 'object') {
            setFormData({
                name: initialData.name || '',
                phone: initialData.phone || '',
                experience: initialData.experience || '',
                department: initialData.department || '',
                wage: initialData.wage || '',
                about: initialData.about || '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async () => {
        try {
            setStatus('loading');

            let updated;
            if (!initialData) {
                const res = await createSpecialist(formData);
                updated = { ...(res?.data ?? {}), ...formData };
            } else {
                await updateSpecialist({ id: initialData.id, ...formData });
                updated = { id: initialData.id, ...formData };
            }

            onUpdated(updated);

            navigate('.', { state: updated, replace: true });

            try {
                localStorage.setItem('specialistEdit', JSON.stringify(updated));
            } catch { /* empty */ }

            setStatus('true');
        } catch (err) {
            console.error(err);
            setStatus('false');
        }
    };

    return (
        <main className="profile-main">
            <h3 className="align-center">Specialist Information</h3>
            <div className="profile-block">
                <div className="profile-card">
                    <TextField label="Name" name="name" value={formData.name} onChange={handleChange}/>
                    <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange}/>
                    <TextField label="Experience" name="experience" value={formData.experience} onChange={handleChange}/>
                    <TextField label="Department" name="department" value={formData.department} onChange={handleChange}/>
                    <TextField label="Wage" name="wage" value={formData.wage} onChange={handleChange}/>
                    <TextField label="About" name="about" value={formData.about} onChange={handleChange}/>
                </div>

                {status === 'loading' && <p>Sending...</p>}
                {status === 'true' && <p style={{color: 'green'}}>Information updated</p>}
                {status === 'false' && <p style={{color: 'red'}}>Failed to send request. Try again.</p>}

                <div className="button-row space-top">
                    <ButtonSubmit onClick={handleSubmit} text={"Save Changes"}/>
                </div>
            </div>
        </main>
    );
}
