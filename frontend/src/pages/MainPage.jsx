import Header from "../components/Header";
import TextBlock from "../elements/TextBlock.jsx";
import {text1, whoWeAre, whatWeDo} from "../content/MainPage/TextBlockItems.js";
import Button from "../elements/Button.jsx";
import TextBlockWithIcon from "../elements/TextBlockWithIcon.jsx";
import MainPageDifferencies from "../components/MainPageDifferencies.jsx";
import {useNavigate} from "react-router-dom";
import '../styles/layout.css';

export default function MainPage() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="space-top"/>
            <div className="body">
                <div className="block">
                    <TextBlock title={text1.title} text={text1.text} italic={text1.italic}/>
                    <Button text={"Choose a specialist"} onClick={() => navigate(`/specialists`)}/>
                </div>
                <div className="block">
                    <TextBlock title={whoWeAre.title} text={whoWeAre.text} italic={whoWeAre.italic}/>
                    <TextBlock title={whatWeDo.title} text={whatWeDo.text} italic={whatWeDo.italic}/>
                </div>
                <div>
                    <MainPageDifferencies/>
                </div>
            </div>
        </>
    );
}
