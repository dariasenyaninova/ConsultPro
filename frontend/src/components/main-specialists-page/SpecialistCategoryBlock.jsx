import SpecialistCard from "./SpecialistCard.jsx";
import {useState} from 'react';

export default function SpecialistCategoryBlock({title, specialists}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="container">
            {/*<div className="category-block">*/}
                <h2 className="category-title" onClick={toggleOpen} style={{color: '#ff4c7c', cursor: 'pointer'}}>
                    {title}
                    <span
                        className={`arrow ${isOpen ? 'rotated' : ''}`}
                        style={{color: '#ff4c7c', display: 'inline-block', transition: 'transform 0.3s'}}
                    >
                    →
                </span>
                </h2>
                <div className="card-scroll">
                    {specialists.map((spec) => (
                        <SpecialistCard key={spec.id} specialist={spec}/>
                    ))}
                </div>
            {/*</div>*/}
        </div>
    );
}
