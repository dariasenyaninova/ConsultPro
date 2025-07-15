import { useEffect, useState } from 'react';
import TextField from '../elements/TextField';
import {updateCustomer} from "../utils/api-customer.jsx";
import {useNavigate} from "react-router-dom";

export default function CustomerEditForm({ initialData }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        about: ''
    });

    useEffect(() => {
        if (initialData && typeof initialData === 'object') {
            setFormData({
                name: initialData.name || '',
                phone: initialData.phone || '',
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
            await updateCustomer(formData).then(() => navigate("/profile/me"))
        } catch (err) {
            alert('Something went wrong. See console.' + err);
        }
    };
    return (
        <div className="specialist-form-wrapper">
            <h3>Edit My Profile</h3>
            <div className="form-box">
                <TextField label="Name" name="name" value={formData.name} onChange={handleChange} />
                <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                <TextField label="About" name="about" value={formData.about} onChange={handleChange} />
            </div>
            <button className="confirm-btn" onClick={handleSubmit}>Save Changes</button>
        </div>
    );
}
