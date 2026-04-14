import { defineCollection, z } from 'astro:content';

export const CATEGORY_LABELS = {
  'gokiseok-bbq': '고기석 건대본점',
  'ai-business-lab': 'AI 사업 실험실',
  'business-notes': '자영업 운영 노트',
  'data-stories': '데이터로 보는 자영업',
} as const;

export type CategorySlug = keyof typeof CATEGORY_LABELS;

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['gokiseok-bbq', 'ai-business-lab', 'business-notes', 'data-stories']),
    tags: z.array(z.string()),
    schemaType: z.enum(['Article', 'Restaurant', 'HowTo', 'FAQPage']).default('Article'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
