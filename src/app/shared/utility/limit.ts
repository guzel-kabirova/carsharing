export function limit(value: number, maxValue: number): number {
  return Math.max(Math.min(value || 0, maxValue), 0);
}
