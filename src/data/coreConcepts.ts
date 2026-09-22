// 출처: Reputii/Web/plan.md 4-4절 "핵심 개념 설명" 초안 카피 (확정 아님).
export type CoreConcept = {
  title: string;
  description: string;
};

export const coreConcepts: CoreConcept[] = [
  {
    title: "개인 토큰",
    description: "당신을 상징하는, 당신이 직접 발행하는 단위",
  },
  {
    title: "시장 가격",
    description:
      '사람들이 얼마나 보유하려 하는지를 보여주는 숫자 — "당신이라는 사람의 총점"이 아닙니다.',
  },
  {
    title: "발행 정책",
    description: "발행자인 내가 공급량을 늘리거나 줄이는 선택을 할 수 있다는 것",
  },
];
