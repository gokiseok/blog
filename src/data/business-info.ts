// src/data/business-info.ts
// 고기석 건대본점 NAP·메뉴 단일 상수 (bbq.gokiseok.com 기준 확인된 정보만)
// 신규 5개 포스트의 JSON-LD/CTA에서 import해 한 글자 차이 없이 사용.

export const BUSINESS = {
  name: '고기석 건대본점',
  legalName: '고기석 건대본점',
  cuisine: 'Korean BBQ',
  description:
    '서울 건대입구역 도보 1분 거리의 통갈매기살 전문점. 10·14·32인 단체룸을 운영하며 회식·청첩장·단체모임에 적합한 매장.',
  address: {
    streetAddress: '동일로22길 117-13',
    addressLocality: '광진구',
    addressRegion: '서울',
    addressCountry: 'KR',
    full: '서울 광진구 동일로22길 117-13',
  },
  telephone: '0507-1433-0614',
  hours: {
    label: '매일 17:30 – 21:30',
    opens: '17:30',
    closes: '21:30',
    days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] as const,
  },
  priceRange: '₩₩',
  url: 'https://bbq.gokiseok.com',
  reservationUrl: 'https://booking.naver.com/booking/6/bizes/1095878',
  station: {
    name: '건대입구역',
    line: '서울 지하철 2호선·7호선',
    walkingMinutes: 1,
  },
  capacity: {
    rooms: [
      { label: '10인룸', size: 10 },
      { label: '14인룸', size: 14 },
      { label: '32인룸', size: 32 },
    ],
    maxGroup: 40,
  },
  signature: {
    name: '통갈매기살',
    pricePer100g: 7000,
  },
  menu: [
    { name: '통갈매기살', unit: '100g', price: 7000 },
    { name: '가브리살 반판', unit: '200g', price: 20000 },
    { name: '가브리살 한판', unit: '400g', price: 39000 },
    { name: '목살 반판', unit: '200g', price: 18000 },
    { name: '목살 한판', unit: '400g', price: 35000 },
    { name: '벌집 양념 돼지껍데기', unit: '1인', price: 5000 },
    { name: '치즈 폭탄 계란찜', unit: '1인', price: 5000 },
    { name: '고기석 비빔국수', unit: '1인', price: 5000 },
    { name: '꽃게 순두부전골', unit: '1인', price: 9000, note: '첫 방문 무료' },
    { name: '공기밥', unit: '1공기', price: 1000 },
    { name: '소주', unit: '1병', price: 5000 },
    { name: '맥주', unit: '1병', price: 6000 },
  ],
  perks: [
    '첫 방문 시 꽃게 순두부전골(정가 9,000원) 무료 제공',
    '건대입구역 도보 1분',
    '10·14·32인 단체룸 운영',
  ],
} as const;

export type BusinessInfo = typeof BUSINESS;
