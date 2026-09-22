// 출처: Reputii/Web/plan.md 4-3절 "작동 방식" 초안 카피. 아직 리더 확인 전
// PM 초안이므로 최종 문구가 아니다 — 카피 담당이 확정 카피로 교체할 자리.
export type HowItWorksStep = {
  step: number;
  text: string;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    text: "나만의 토큰을 만든다 — 표시 이름과 공개 범위를 내가 정한다.",
  },
  {
    step: 2,
    text: "사람들이 링크나 QR로 내 토큰을 찾아 시장 조건에 따라 매수한다 — 내가 매번 허락할 필요는 없다.",
  },
  {
    step: 3,
    text: "누가 사고, 얼마나 오래 보유하고, 언제 떠났는지가 계속 기록된다.",
  },
  {
    step: 4,
    text: "시간이 지나면 가격과 관계의 변화를 보고, 그 의미는 보는 사람이 해석한다.",
  },
];
