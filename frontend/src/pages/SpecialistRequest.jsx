import { useParams } from "react-router-dom";

export default function SpecialistRequest() {
    const { id } = useParams();
    return <div className="p-4">Specialist request page for ID: {id}</div>;
}