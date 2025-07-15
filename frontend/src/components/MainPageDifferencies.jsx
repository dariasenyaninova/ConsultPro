import {differencies_1, differencies_2, differencies_3, differencies_4} from "../content/MainPage/TextBlockItems.js";
import TextBlockWithIcon from "../elements/TextBlockWithIcon.jsx";

export default function MainPageDifferencies() {
    return (
        <>
            <div className="body">
                <div className={"text-block-grid"}>
                    <TextBlockWithIcon title={differencies_1.title} text={differencies_1.text} italic={differencies_1.italic} icon={differencies_1.icon}/>
                    <TextBlockWithIcon title={differencies_2.title} text={differencies_2.text} italic={differencies_2.italic} icon={differencies_2.icon}/>
                    <TextBlockWithIcon title={differencies_3.title} text={differencies_3.text} italic={differencies_3.italic} icon={differencies_3.icon}/>
                    <TextBlockWithIcon title={differencies_4.title} text={differencies_4.text} italic={differencies_4.italic} icon={differencies_4.icon}/>
                </div>
            </div>
        </>
    );
}