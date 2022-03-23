import {TuiDay, TuiTime} from '@taiga-ui/cdk';

export function toUnix(date: [TuiDay | null, TuiTime | null]): number {
  const [day, time] = date;
  if (day && time) {
    return day.toLocalNativeDate().getTime() + time.toAbsoluteMilliseconds();
  }
  return 0;
}
