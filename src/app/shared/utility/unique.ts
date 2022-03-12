export function unique(arr: string[]): string[] {
  let result: string[] = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
