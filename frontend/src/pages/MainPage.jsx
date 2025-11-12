import TextBlock from "../elements/TextBlock.jsx";
import {text1, whoWeAre, whatWeDo} from "../content/MainPage/TextBlockItems.js";
import {ButtonEditBig} from "../elements/Button.jsx";
import MainPageDifferencies from "../components/MainPageDifferencies.jsx";
import {useNavigate} from "react-router-dom";
import HeroBanner from "../components/HeroBanner.jsx";

export default function MainPage() {
    const navigate = useNavigate();
    return (
            <div className="body">
                <HeroBanner
                    title={text1.title}
                    text={text1.text}
                    imgSrc="src/content/images/mainPageImg1.png"
                    onClick={() => navigate("/specialists")}
                />
                <div className="block">
                    <TextBlock title={whoWeAre.title} text={whoWeAre.text} italic={whoWeAre.italic}/>
                    <TextBlock title={whatWeDo.title} text={whatWeDo.text} italic={whatWeDo.italic}/>
                </div>
                <div>
                    <MainPageDifferencies/>
                </div>
            </div>
    );
}
