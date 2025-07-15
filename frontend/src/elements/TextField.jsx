import '../styles/forms.css';
export default function TextField({ label, name, value, onChange }) {
    return (
        <label className="form-label">
            {label}
            <input
                className="form-input"
                name={name}
                value={value}
                onChange={onChange}
                type="text"
            />
        </label>
    );
}
