// Plausible(또는 동급 프라이버시 친화 도구) 커스텀 이벤트 헬퍼.
// index.html에 스크립트 태그를 추가하기 전까지는 window.plausible이 없으므로
// 항상 optional chaining으로 호출한다 — 도구 미선정 상태에서도 빌드/실행에
// 지장이 없다. dev-plan.md 5장 참고.
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(event: string, props?: Record<string, string>): void {
  window.plausible?.(event, props ? { props } : undefined);
}
