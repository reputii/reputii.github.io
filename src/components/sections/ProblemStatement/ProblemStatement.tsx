import styles from "./ProblemStatement.module.css";

/** 출처: plan.md 4-2절 (가안). */
export default function ProblemStatement() {
  return (
    <section className={styles.section}>
      <p className={styles.text}>
        우리는 누군가를 몇 초짜리 자기소개나 프로필 사진으로 판단합니다. 하지만 진짜 신뢰는
        시간이 쌓여야 보입니다.
      </p>
      <p className={styles.text}>그래서 우리는 시간이 쌓인 기록을 볼 수 있는 곳을 만들었습니다.</p>
    </section>
  );
}
