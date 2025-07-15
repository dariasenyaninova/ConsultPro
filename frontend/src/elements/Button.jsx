import '../styles/buttons.css';
export default function Button({ text, onClick }) {
    return (
        <button className="edit-btn" onClick={onClick}>{text}</button>
    );
}