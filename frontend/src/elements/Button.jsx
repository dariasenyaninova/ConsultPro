export default function ButtonEdit({text, onClick}) {
    return (
        <button className="edit-btn" onClick={onClick}>{text}</button>
    );
}

export function ButtonBack({text, onClick}) {
    return (
        <button className="back-btn" onClick={onClick}>{text}</button>
    );
}

export function ButtonEditBig({text, onClick}) {
    return (
        <button className="edit-btn big-button" onClick={onClick}>{text}</button>
    );
}

export function ButtonSubmit({
                                 onClick,
                                 text,
                                 className = "",
                                 type = "button",
                                 form,
                             }) {
    return (
        <button
            type={type}
            onClick={onClick}
            form={form}
            className={`submit-btn ${className}`}
        >
            {text}
        </button>
    );
}
export function ButtonSubmitBig({
                                 onClick,
                                 text,
                                 className = "",
                                 type = "button",
                                 form,
                             }) {
    return (
        <button
            type={type}
            onClick={onClick}
            form={form}
            className={`submit-btn big-button ${className}`}
        >
            {text}
        </button>
    );
}