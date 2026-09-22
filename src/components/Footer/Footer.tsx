import styles from "./Footer.module.css";

/**
 * 출처: reputii-site-plan.md 4장 "Footer 구성" — 이솝이야기 소속 전제가
 * 사라지며 새로 필요해진 운영주체 표기. 법인·사업자 정보가 아직 확인되지
 * 않아(plan.md 8장 10번, reputii-site-plan.md 7장 3번 미결정) 최소한의
 * 자리표시자만 둔다.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>[운영주체 표기 확인 필요] · 문의: [이메일 확인 필요]</p>
    </footer>
  );
}
