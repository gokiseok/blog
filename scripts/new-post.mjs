#!/usr/bin/env node
/**
 * 새 블로그 글 생성 스크립트
 * 사용법: pnpm new-post "제목" --category <slug> --tags <태그1,태그2>
 */

import { writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const VALID_CATEGORIES = {
  'gokiseok-bbq': '고기석 건대본점',
  'ai-business-lab': 'AI 사업 실험실',
  'business-notes': '자영업 운영 노트',
  'data-stories': '데이터로 보는 자영업',
};

function parseArgs(args) {
  const result = { title: '', category: '', tags: [] };
  let i = 0;

  // 첫 번째 위치 인수 = 제목
  if (args[0] && !args[0].startsWith('--')) {
    result.title = args[0];
    i = 1;
  }

  while (i < args.length) {
    if (args[i] === '--category' && args[i + 1]) {
      result.category = args[i + 1];
      i += 2;
    } else if (args[i] === '--tags' && args[i + 1]) {
      result.tags = args[i + 1].split(',').map((t) => t.trim()).filter(Boolean);
      i += 2;
    } else {
      i++;
    }
  }

  return result;
}

function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function getToday() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log(`
사용법: pnpm new-post "제목" --category <slug> --tags <태그1,태그2,태그3>

허용된 카테고리:
${Object.entries(VALID_CATEGORIES).map(([slug, label]) => `  ${slug} — ${label}`).join('\n')}

예시:
  pnpm new-post "건대 회식 예산 가이드" --category gokiseok-bbq --tags 건대회식,단체석,회식예산
`);
    process.exit(0);
  }

  const { title, category, tags } = parseArgs(args);

  // 제목 검증
  if (!title) {
    console.error('오류: 제목을 입력하세요.');
    console.error('예시: pnpm new-post "제목" --category gokiseok-bbq');
    process.exit(1);
  }

  // 카테고리 검증
  if (!category) {
    console.error('오류: --category 옵션이 필요합니다.');
    console.error(`허용된 카테고리: ${Object.keys(VALID_CATEGORIES).join(', ')}`);
    process.exit(1);
  }

  if (!VALID_CATEGORIES[category]) {
    console.error(`오류: "${category}"는 허용되지 않은 카테고리입니다.`);
    console.error(`허용된 카테고리: ${Object.keys(VALID_CATEGORIES).join(', ')}`);
    process.exit(1);
  }

  // 파일명 생성
  const today = getToday();
  const titleSlug = toSlug(title).slice(0, 60);
  const filename = `${today}-${titleSlug}.md`;
  const filepath = join(ROOT, 'src', 'content', 'posts', filename);

  if (existsSync(filepath)) {
    console.error(`오류: 파일이 이미 존재합니다: ${filepath}`);
    process.exit(1);
  }

  // frontmatter 생성
  const tagsYaml = tags.length > 0
    ? `[${tags.map((t) => `"${t}"`).join(', ')}]`
    : '["태그를 추가하세요"]';

  const schemaType = category === 'gokiseok-bbq' ? 'Article' : 'Article';

  const content = `---
title: "${title}"
description: "120자 이내로 설명을 작성하세요. 주 키워드를 포함하세요."
pubDate: ${today}
category: "${category}"
tags: ${tagsYaml}
schemaType: "${schemaType}"
draft: false
---

<!--
  작성 전 체크리스트:
  - docs/brand-facts.md 확인 (매장 미확정 정보 사용 금지)
  - docs/keyword-map.md 확인 (${category} 섹션)
  - docs/style-guide.md 확인
  - 호칭: 운영자 = 오기석, 매장 = 고기석 건대본점
  - adseok/clickguard/출퇴근SaaS 언급 금지
  - 이모지 금지
  - 최소 2,000자
-->

## 훅 (3~5줄로 문제 제기)

(여기에 훅을 작성하세요)

---

## 맥락

(왜 이 문제가 중요한지 1~2문단)

---

## 본론

(H2/H3로 구조화된 본론)

---

## 사례

(실제 경험 또는 데이터 기반 사례)

---

## 정리

(핵심 요약 + CTA)
`;

  writeFileSync(filepath, content, 'utf-8');
  console.log(`\n✓ 파일 생성 완료: src/content/posts/${filename}`);
  console.log(`  카테고리: ${VALID_CATEGORIES[category]}`);
  if (tags.length > 0) {
    console.log(`  태그: ${tags.join(', ')}`);
  }
  console.log(`\n다음 단계:`);
  console.log(`  1. src/content/posts/${filename} 열어서 글 작성`);
  console.log(`  2. draft: false 확인 (true면 빌드에서 제외됨)`);
  console.log(`  3. pnpm build 로 빌드 테스트`);
  console.log(`  4. git add . && git commit -m "post: [${VALID_CATEGORIES[category]}] ${title.slice(0, 30)}"`);
}

main();
