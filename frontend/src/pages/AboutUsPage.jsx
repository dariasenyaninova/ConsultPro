import Header from "../components/Header";
import TextBlock from "../elements/TextBlock.jsx";
import '../styles/about-page.css';


export default function AboutUsPage() {

    return (
        <>
            <Header/>
            <div className="about-container">
                <h1 className="about-title">About Us</h1>

                <p className="about-paragraph">
                    At <span className="highlight">ConsultPRO Connect</span>, we provide expert consulting services
                    to help businesses grow, optimize operations, and achieve long-term success.
                </p>

                <p className="about-paragraph">
                    Our team of highly skilled professionals brings deep industry knowledge, strategic insight,
                    and innovative solutions to every challenge.
                </p>
            </div>
        </>
    );
}
