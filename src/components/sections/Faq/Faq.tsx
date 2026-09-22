import { useState } from "react";
import { faqItems } from "../../../data/faqItems";
import styles from "./Faq.module.css";

/**
 * 출처: plan.md 4-5절. 아코디언 UI 상태만 관리하고, 문항 데이터는
 * data/faqItems.ts로 분리했다(dev-plan.md 4장 참고).
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>자주 묻는 질문</h2>
      <div className={styles.list}>
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className={styles.item}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className={styles.answer}>{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
