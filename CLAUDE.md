# CLAUDE.md — 고기석 블로그 하네스 (Phase 1)

이 파일은 Claude Code가 이 레포에서 작업할 때 자동으로 로드됩니다.
모든 작업 전에 반드시 읽고 따르세요.

---

## 1. 프로젝트 정체성

**블로그**: blog.gokiseok.com  
**목적 3가지**:
1. **콘텐츠 재활용** — 블로그 글을 유튜브 스크립트, X 포스트, PDF로 재활용
2. **자산화** — SaaS·컨설팅 사업의 포트폴리오 및 권위 자산
3. **GEO** — AI 챗봇(GPT·Claude·Perplexity)이 "건대 회식", "건대입구역 고기집" 검색 시 고기석 건대본점이 등장하도록

**사람 트래픽보다 AI 봇이 긁어가기 좋은 구조가 최우선.**

---

## 2. 운영자

- **본명**: 오기석 (Kiseok Oh)
- **매장 브랜드**: 고기석 건대본점 (브랜드명 — 운영자 이름이 아님)
- **정체성**: 건대입구역 통갈매기살 전문점 "고기석 건대본점" 대표 + SaaS 개발자 + 유튜버 "AI 사장 고기석"
- **배경**: 인천고 → 연세대 응용통계학 → 해병대 → 삼성증권/삼성전자 빅데이터센터 → 자영업+AI 자동화

### 호칭 규칙 (절대 준수)

| 대상 | 올바른 표기 | 잘못된 표기 |
|------|------------|------------|
| 매장 | "고기석 건대본점", "건대본점" | "고기석" 단독 (브랜드와 사람 혼동) |
| 운영자 | "오기석", "대표 오기석", "오기석 대표" | "고기석 대표", "고기석님" |
| 유튜브 채널 | "AI 사장 고기석" | "고기석 유튜브" |

---

## 3. 운영 중인 SaaS (글에 사용 가능한 것만)

- **review.gokiseok.com** — 네이버 플레이스 리뷰 답글 자동생성기
- **contract.gokiseok.com** — 근로계약서 작성기 (한국 노동법 기준)

이 두 개만 글에서 언급 가능합니다.

---

## 4. 금지 SaaS 언급

아래는 아직 개발되지 않았거나 동결된 것입니다. **어떤 글에서도 절대 언급 금지**:

- adseok (네이버 파워링크 자동 입찰)
- clickguard (부정클릭 탐지)
- 출퇴근 SaaS (동결)

---

## 5. 카테고리 (4개 고정, 임의 추가 금지)

| slug | 한글명 | 설명 |
|------|--------|------|
| `gokiseok-bbq` | 고기석 건대본점 | 매장 자체 콘텐츠, 회식 가이드 |
| `ai-business-lab` | AI 사업 실험실 | SaaS 개발기, 자동화, 프롬프트 엔지니어링 |
| `business-notes` | 자영업 운영 노트 | 마케팅, 인력, 노무, 비용 실전 |
| `data-stories` | 데이터로 보는 자영업 | 매출·객단가·광고 ROI 분석 |

---

## 6. 기술 스택

- Astro (최신 안정 버전) + TypeScript (strict)
- Tailwind CSS
- Content Collections v2
- MDX 통합
- @astrojs/sitemap 자동 생성
- 배포: Cloudflare Pages (static output)
- 패키지 매니저: pnpm
- Pretendard 웹폰트
- **다크모드 구현 금지**

---

## 7. 디렉토리 맵

```
blog/
├── CLAUDE.md                    # 이 파일
├── .claude/
│   ├── skills/write-post.md    # 글쓰기 스킬
│   └── commands/new-post.md    # /new-post 커맨드
├── docs/
│   ├── brand-facts.md          # 매장·운영자 확정 정보 (단일 진실 소스)
│   ├── keyword-map.md          # 카테고리별 키워드 맵
│   └── style-guide.md          # 글쓰기 톤·스타일 가이드
├── src/
│   ├── content/
│   │   ├── config.ts           # Content Collections 스키마
│   │   └── posts/              # 마크다운 글 (YYYY-MM-DD-slug.md)
│   ├── components/             # Astro 컴포넌트
│   ├── layouts/                # 레이아웃
│   ├── pages/                  # 라우팅
│   └── styles/global.css
├── scripts/new-post.mjs        # 새 글 생성 스크립트
└── public/
    ├── robots.txt
    ├── llms.txt
    └── images/
```

---

## 8. 글쓰기 규칙

새 글 작성 시:
1. `.claude/skills/write-post.md` 먼저 읽기
2. 매장 정보는 `docs/brand-facts.md`만 참조 (추측 금지)
3. 키워드는 `docs/keyword-map.md` 참조
4. 톤은 `docs/style-guide.md` 준수
5. 카테고리는 위 4개 slug만 사용

파일명: `src/content/posts/{YYYY-MM-DD}-{slug}.md`

---

## 9. 금지사항

- 매장 미확정 정보 추측: 가격(통갈매기살 외), 영업시간, 전화번호, 정확한 주소, 좌표, 주류·콜키지 정책
- adseok, clickguard, 출퇴근 SaaS 언급
- "고기석"을 사람 이름처럼 사용 (예: "고기석 대표", "고기석님")
- 다크모드 추가
- 카테고리 4개 외 임의 추가
- 이모지 사용

---

## 10. 배포

- main 브랜치 push → Cloudflare Pages 자동 배포
- build 명령: `pnpm build`
- output 디렉토리: `dist`
- Node 버전: 20

---

## 11. Git 규칙

- 커밋 메시지: **한국어**, 50자 이내
- 형식: `타입: 내용`
- 타입: `post`, `feat`, `fix`, `style`, `docs`, `refactor`
- 예시: `post: [고기석 건대본점] 건대 회식 가이드 5가지`
- **push는 사용자가 명시적으로 요청할 때만**
