import {ButtonEditBig} from "../elements/Button.jsx";

export default function HeroBanner({ title, text, imgSrc, onClick }) {

    return (
        <section className="hero container">
            <div className="hero-inner">
                <div className="hero-left">
                    <div className="text-block">
                        <h1 className="text-block-title hero-title">{title}</h1>
                        <h3 className="text-block-text hero-subtitle">{text}</h3>
                    </div>

                    <div className="hero-cta">
                        <ButtonEditBig text={"Choose a specialist"} onClick={onClick}/>
                    </div>
                </div>

                <div className="hero-right">
                    <img className="hero-illustration" src={imgSrc} alt="" />
                </div>
            </div>
        </section>
    );
}
