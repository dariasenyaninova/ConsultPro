
import SpecialistCard from "./SpecialistCard";
import '../../styles/specialties.css';

export default function ListSpecialties({ specialties }) {

  return (
    <section className="specialist-section">
      <h2>Specialist Information</h2>
      {specialties.map((s) => (
        <SpecialistCard key={s.id} specialist={s} />
      ))}
    </section>
  );
}
