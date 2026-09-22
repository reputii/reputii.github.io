import { howItWorksSteps } from "../../../data/howItWorksSteps";
import styles from "./HowItWorks.module.css";

/** 출처: plan.md 4-3절. 단계 목록은 data/howItWorksSteps.ts로 분리해 카피
 * 수정 시 컴포넌트 코드를 안 건드려도 되게 했다(dev-plan.md 4장 참고). */
export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>작동 방식</h2>
      <ol className={styles.list}>
        {howItWorksSteps.map((item) => (
          <li key={item.step} className={styles.item}>
            <span className={styles.badge}>{item.step}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
