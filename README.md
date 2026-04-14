# 고기석 블로그

**blog.gokiseok.com** — 자영업 × AI × 데이터

운영자: 오기석 (고기석 건대본점 대표 / SaaS 개발자)

---

## 목적

1. **콘텐츠 재활용**: 블로그 글을 유튜브 스크립트, X 포스트, PDF 자료로 재활용
2. **자산화**: SaaS·컨설팅 사업의 포트폴리오 및 권위 자산
3. **GEO**: AI 챗봇이 "건대 회식", "건대입구역 고기집" 검색 시 고기석 건대본점이 등장하도록

## 카테고리 4개

| slug | 한글명 | 설명 |
|------|--------|------|
| `gokiseok-bbq` | 고기석 건대본점 | 매장 자체 콘텐츠, 회식 가이드 |
| `ai-business-lab` | AI 사업 실험실 | SaaS 개발기, 자동화, 프롬프트 엔지니어링 |
| `business-notes` | 자영업 운영 노트 | 마케팅, 인력, 노무, 비용 실전 |
| `data-stories` | 데이터로 보는 자영업 | 매출·객단가·광고 ROI 분석 |

---

## 시작하기

```bash
pnpm install
pnpm dev
```

브라우저에서 http://localhost:4321 열기

---

## 새 글 작성

```bash
pnpm new-post "제목" --category gokiseok-bbq --tags 회식,단체석
```

또는 Claude Code에서:

```
/new-post "건대 회식 예산 가이드" --category gokiseok-bbq --tags 건대회식,단체석
```

글 파일은 `src/content/posts/YYYY-MM-DD-slug.md`에 생성됩니다.

---

## 빌드

```bash
pnpm build
```

빌드 결과는 `dist/` 디렉토리에 생성됩니다.

---

## Claude Code 설정

이 레포는 Claude Code 하네스가 설정되어 있습니다:

- **CLAUDE.md**: 자동 로드. 프로젝트 규칙, 호칭 규칙, 금지사항 포함.
- **.claude/skills/write-post.md**: 글 작성 시 참조 스킬
- **.claude/commands/new-post.md**: `/new-post` 커맨드 정의
- **docs/brand-facts.md**: 매장·운영자 확정 정보 (단일 진실 소스)
- **docs/keyword-map.md**: 카테고리별 키워드 맵
- **docs/style-guide.md**: 글쓰기 톤·스타일 가이드

새 글 작성 시 Claude Code가 자동으로 CLAUDE.md를 읽고 규칙을 따릅니다.

---

## Cloudflare Pages 배포 설정

| 항목 | 값 |
|------|-----|
| 빌드 명령 | `pnpm build` |
| 빌드 출력 디렉토리 | `dist` |
| Node 버전 | `20` |
| 커스텀 도메인 | `blog.gokiseok.com` |

main 브랜치에 push하면 자동 배포됩니다.

---

## 기술 스택

- [Astro](https://astro.build/) — 정적 사이트 생성
- TypeScript (strict)
- Tailwind CSS
- Pretendard 웹폰트
- @astrojs/sitemap (sitemap 자동 생성)
- @astrojs/mdx (MDX 지원)
- Cloudflare Pages (배포)
- pnpm (패키지 매니저)
