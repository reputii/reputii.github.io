import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import { trackEvent } from "../../../lib/analytics";
import styles from "./CtaWaitlist.module.css";

// TODO(확인 필요): 실제 Formspree 폼 ID로 교체. https://formspree.io 에서
// 폼을 만들면 발급되는 ID이며 비밀값이 아니라 폼 엔드포인트 식별자다(토큰
// 아님) — dev-plan.md 3장/8장 참고.
const FORMSPREE_FORM_ID = "REPLACE_WITH_FORMSPREE_FORM_ID";

/**
 * 출처: plan.md 4-7절 CTA + 7장 "폼 필요 여부". 대기자 명단 이메일만 우선
 * 받는 최소 폼이며, 이해도 설문 문항 포함 여부(plan.md 8장 미결정 6번)가
 * 확정되면 이 폼에 필드만 추가하면 되도록 설계했다(dev-plan.md 4.1절).
 */
export default function CtaWaitlist() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  useEffect(() => {
    if (state.succeeded) {
      trackEvent("WaitlistSignup");
    }
  }, [state.succeeded]);

  return (
    <section id="waitlist" className={styles.section}>
      <h2 className={styles.heading}>얼리 액세스 알림 받기</h2>
      {state.succeeded ? (
        <p className={styles.success}>등록되었습니다. 감사합니다.</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.label}>
            이메일
          </label>
          <div className={styles.row}>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className={styles.input}
            />
            <button type="submit" disabled={state.submitting} className={styles.submit}>
              등록
            </button>
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </form>
      )}
    </section>
  );
}
