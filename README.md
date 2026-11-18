# 명품스터디클럽 연합 학술 박람회 웹페이지

SKKAI · brAIn · DScover 연합 학술 박람회(2027. 1. 9.) 안내 페이지입니다.
Astro + Tailwind CSS로 만들었고, GitHub Pages에 정적 사이트로 배포됩니다.

## 내용 수정하기 (코드 몰라도 OK)

**모든 텍스트는 `src/data/event.ts` 한 파일에 모여 있습니다.**

| 바꾸고 싶은 것 | 수정할 항목 |
|---|---|
| 장소 확정, 신청 링크, 문의 메일 | `event` (`venue`, `venueNote`, `registerUrl`, `contactEmail`) |
| 타임테이블 | `program` |
| 학회 소개 문구 / 링크 | `clubs` (`description`, `url`) |
| 우수 발표 9팀 | `oralTeams` — 비어 있으면 "선정 후 공개" |
| 포스터 부스 목록 | `booths` — 비어 있으면 "추후 공개" |
| FAQ | `faqs` |

`registerUrl`을 채우면 첫 화면의 "참관 신청 오픈 예정"이 "참관 신청하기" 버튼으로 바뀝니다.

## 로컬에서 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
```

> iCloud 폴더에 있어서 `node_modules`는 `node_modules.nosync`로의 심볼릭 링크로 만들어 두었습니다 (iCloud 동기화 제외).

## GitHub Pages 배포

1. GitHub에 저장소를 만들고 `main` 브랜치에 push
2. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 변경
3. 이후 `main`에 push할 때마다 `.github/workflows/deploy.yml`이 자동으로 빌드·배포합니다

저장소 이름에 맞는 경로(`/<repo>/`)는 워크플로우가 자동으로 설정합니다.

## 디자인 토큰

디자인 레퍼런스: MoML @ MIT (흰↔하늘 그라데이션 배경, 두꺼운 대형 타이포, 연두→시안 그라데이션 버튼, 다크 섹션, 얇은 검정 구분선의 아젠다 표).
색상은 `src/styles/global.css`의 `@theme`(`ink`, `night`, `lime`, `sky` 등)에서 바꿀 수 있습니다. 폰트는 Pretendard.

## 라이선스

[AstroEvent](https://github.com/99points/astrojs-event-template) (MIT, © 2024 Zeeshan Rasool)의 구조를 기반으로 했습니다. 원본 라이선스는 `THIRD_PARTY_LICENSE`에 있습니다.
