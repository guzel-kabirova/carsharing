import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ru} from 'date-fns/locale';
import {add, format, getDay, getDaysInMonth} from 'date-fns';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent implements OnInit {
  public daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  public date = new Date();
  public daysArr: Date[] = [];

  @Input()
  public isOpen = false;

  @Output()
  public selectDate = new EventEmitter<Date>();

  @Output()
  public closeCalendar = new EventEmitter();

  @HostListener('focusout')
  public closeCalendarWindow() {
    this.closeCalendar.emit();
  }

  constructor() { }

  ngOnInit(): void {
    this.createCalendar();
  }

  private createCalendar() {
    const firstDayDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const firstDay = getDay(firstDayDate);

    const daysInMonth = getDaysInMonth(this.date);
    const arr: number[] = [];
    for (let i = 0; i < daysInMonth; i++) {
      arr.push(i);
    }
    this.daysArr = arr.map(n => add(firstDayDate, {days: n}));

    if (firstDay) {
      for (let i = 1; i < firstDay; i++) {
        this.daysArr.unshift(new Date(0));
      }
    } else {
      for (let i = 1; i < 7; i++) {
        this.daysArr.unshift(new Date(0));
      }
    }
  }

  public getCalendarHeader(): string {
    return format(this.date, 'LLLL', {locale: ru}) + ' ' + format(this.date, 'yyyy', {locale: ru});
  }

  public isToday(day: Date): boolean {
    if (this.isThisMonth(day)) {
      return format(new Date(), 'd.MM.yyyy') === format(day, 'd.MM.yyyy');
    }
    return false;
  }

  public isWeekend(day: Date): boolean {
    const weekDay = getDay(day);
    return weekDay === 6 || weekDay === 0;
  }

  public isAvailable(day: Date): boolean {
    return this.isThisMonth(day) && (DateTimePickerComponent.isBiggerToday(day) || this.isToday(day));
  }

  private static isBiggerToday(day: Date): boolean {
    return day.getTime() > new Date().getTime();
  }

  public isThisMonth(day: Date): boolean {
    return day.getFullYear() !== 1970;
  }

  public nextMonth() {
    this.date = add(this.date, {months: 1});
    this.createCalendar();
  }

  public previousMonth() {
    this.date = add(this.date, {months: -1});
    this.createCalendar();
  }

  public onDateClick(day: Date) {
    if (!this.isAvailable(day)) {
      return;
    }
    this.selectDate.emit(day);
    this.closeCalendarWindow();
  }

  public preventMouseDown(event: Event) {
    event.preventDefault();
  }
}
