export type CategorySlug = 'gokiseok-bbq' | 'ai-business-lab' | 'business-notes' | 'data-stories';

export const CATEGORY_CONFIG: Record<CategorySlug, {
  label: string;
  color: string;
  tailwindClass: string;
  description: string;
}> = {
  'gokiseok-bbq': {
    label: '고기석 건대본점',
    color: '#C2410C',
    tailwindClass: 'text-cat-bbq',
    description: '매장 운영기, 회식 가이드, 건대 맛집 정보',
  },
  'ai-business-lab': {
    label: 'AI 사업 실험실',
    color: '#1D4ED8',
    tailwindClass: 'text-cat-ai',
    description: 'SaaS 개발 일지, 자동화 워크플로우, 프롬프트 엔지니어링',
  },
  'business-notes': {
    label: '자영업 운영 노트',
    color: '#78350F',
    tailwindClass: 'text-cat-biz',
    description: '마케팅, 인력, 노무, 비용 — 자영업 실전',
  },
  'data-stories': {
    label: '데이터로 보는 자영업',
    color: '#047857',
    tailwindClass: 'text-cat-data',
    description: '매출·객단가·광고 ROI 숫자 기반 분석',
  },
};
