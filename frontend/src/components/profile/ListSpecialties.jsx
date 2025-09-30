
import SpecialistCard from "./SpecialistCard";

export default function ListSpecialties({ specialties }) {

  return (
    <section className="specialist-section-full">
      <h3 align="center">Specialist Information</h3>
      {specialties.map((s) => (
        <SpecialistCard key={s.id} specialist={s} />
      ))}
    </section>
  );
}
