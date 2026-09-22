# reputii.github.io

Reputii 랜딩 사이트. GitHub Pages로 배포되는 독립 사이트이며, 회사 산하
서비스가 아니라 Reputii 단독 사이트다 — `/about`, `/services`, `/contact` 같은
회사용 페이지나 라우터가 없다. `Reputii/Web/plan.md`의 7개 섹션이 사이트
루트(`/`) 한 페이지에 그대로 담긴다.

## 스택

React 19 + TypeScript + Vite 7 + CSS Modules. 배경/비교 근거는
`Reputii/Web/dev-plan.md` 참고.

## 개발

```bash
npm install
npm run dev       # 로컬 개발 서버
npm run build     # 타입체크 + 프로덕션 빌드 (dist/)
npm run preview   # 빌드 결과 미리보기
```

## 배포

GitHub Pages, `main` 브랜치 기준. 배포 파이프라인(GitHub Actions 권장) 및
자격증명 설정 방법은 `Reputii/Web/dev-plan.md` 7장·9장 참고 — 실제 토큰 값은
이 저장소나 채팅에 절대 포함하지 않는다.

## 콘텐츠 확정 상태

이 스캐폴딩의 카피는 전부 `Reputii/Web/plan.md`의 PM 초안을 그대로 옮긴
것이며 리더 확인 전 확정 카피가 아니다. 각 섹션 컴포넌트/데이터 파일의 주석에
출처를 남겨뒀다.
