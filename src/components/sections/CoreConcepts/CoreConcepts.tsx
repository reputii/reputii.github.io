import { coreConcepts } from "../../../data/coreConcepts";
import styles from "./CoreConcepts.module.css";

/** 출처: plan.md 4-4절. */
export default function CoreConcepts() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>핵심 개념</h2>
      <div className={styles.grid}>
        {coreConcepts.map((concept) => (
          <div key={concept.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{concept.title}</h3>
            <p className={styles.cardText}>{concept.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
