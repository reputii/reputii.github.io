import styles from "./TrustNotice.module.css";

/**
 * 출처: plan.md 4-6절. 개인정보 수집 관련 구체 법적 문구는 법률 검토 완료
 * 전까지 정식 게시 불가(plan.md 8장 미결정 9번) — 아래는 자리표시자다.
 */
export default function TrustNotice() {
  return (
    <section className={styles.section}>
      <p className={styles.text}>
        이 페이지는 아직 준비 중인 서비스에 대한 소개입니다. 실제 기능과 정책은 바뀔 수
        있습니다.
      </p>
      <p className={styles.smallText}>
        [법률 검토 필요 — 개인정보 수집 목적 고지 문구는 확정 전까지 자리표시자입니다]
      </p>
    </section>
  );
}
