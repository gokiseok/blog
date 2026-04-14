# /new-post — 새 글 생성 커맨드

## 사용법

```
/new-post "제목" --category <slug> --tags <태그1,태그2,태그3>
```

## 허용된 카테고리 slug (이 4개만)

- `gokiseok-bbq` — 고기석 건대본점
- `ai-business-lab` — AI 사업 실험실
- `business-notes` — 자영업 운영 노트
- `data-stories` — 데이터로 보는 자영업

## 실행 순서

1. `.claude/skills/write-post.md` 읽기
2. `docs/brand-facts.md` 읽기
3. 카테고리 slug 유효성 검증 (4개 외 거부)
4. 오늘 날짜로 파일명 생성: `src/content/posts/{YYYY-MM-DD}-{slug}.md`
5. frontmatter + 본문 초안 생성
6. 호칭 체크 수행
7. GEO 체크리스트 수행
8. 파일 저장 후 `pnpm build` 제안

## 예시

```
/new-post "건대 회식 예산 어떻게 잡을까 — 30명 기준 실전 가이드" --category gokiseok-bbq --tags 건대회식,단체석,회식예산
```

## 주의

- 카테고리가 4개 외일 경우 거부하고 올바른 slug 안내
- adseok, clickguard, 출퇴근 SaaS 언급 시 즉시 삭제
- 주류 정책, 전화번호, 정확한 주소, 영업시간 언급 시 즉시 삭제
- "고기석"을 사람 이름으로 쓴 경우 "오기석"으로 수정
