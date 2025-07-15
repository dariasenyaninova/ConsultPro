import '../styles/text-block.css';
export default function TextBlock({ title, text, italic = false }) {
    return (
        <div className="text-block">
            <h1 className="text-block-title">{title}</h1>
            <h3 className={`text-block-text ${italic ? "italic" : ""}`}>
                {text}
            </h3>
        </div>
    );
}


