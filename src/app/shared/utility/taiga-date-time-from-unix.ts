import {TuiDay, TuiTime} from '@taiga-ui/cdk';

export function fromUnix(unix: number): [TuiDay | null, TuiTime | null] {
  if (unix) {
    const date = new Date(unix);
    const day = TuiDay.normalizeOf(date.getFullYear(), date.getMonth(), date.getDate());
    const time = TuiTime.fromAbsoluteMilliseconds(unix - day.toLocalNativeDate().getTime());
    return [day, time];
  }
  return [null, null];
}
