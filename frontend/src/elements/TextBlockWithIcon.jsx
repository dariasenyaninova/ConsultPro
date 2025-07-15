import '../styles/text-block.css';
export default function TextBlockWithIcon({
                                              icon,
                                              title,
                                              text,
                                              italic = false
                                          }) {
    return (
        <div className="text-block-icon-container">
            <div className="title-with-icon">
                <img alt="icon" src={icon} className="text-icon" />
                <h2 className="text-block-title with-icon">{title}</h2>
            </div>
            <p className={`text-block-text ${italic ? "italic" : ""}`}>
                {text}
            </p>
        </div>
    );
}


