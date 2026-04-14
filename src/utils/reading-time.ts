/** 한국어 기준 약 500자/분으로 읽기 시간 계산 */
export function getReadingTime(body: string): string {
  const chars = body.replace(/\s+/g, '').replace(/[#*`>\-_\[\]()!]/g, '').length;
  const minutes = Math.max(1, Math.ceil(chars / 500));
  return `${minutes}분 읽기`;
}
