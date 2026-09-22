import styles from "./Hero.module.css";

/**
 * 출처: plan.md 4-1절. 헤드라인/서브헤드/CTA는 PM 초안(가안)이며 리더 확인
 * 전 확정 카피가 아니다 — 실제 배포 전 카피 담당 검토 필요.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Reputii</p>
      <h1 className={styles.headline}>사람에 대한 기록은, 점수가 아니라 시간이어야 한다.</h1>
      <p className={styles.subhead}>
        Reputii는 당신이 발행한 토큰을 사람들이 오래 사고, 보유하고, 떠나는 과정을 그대로
        기록합니다. 판단은 저희가 하지 않습니다.
      </p>
      <a className={styles.cta} href="#waitlist">
        얼리 액세스 등록
      </a>
    </section>
  );
}
