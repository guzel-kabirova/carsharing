import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import {NgControl} from '@angular/forms';

import {limit} from '../../utility/limit';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent implements AfterContentChecked {
  @Input()
  items: readonly string[] = [];

  @Input()
  open = false;

  @Output()
  closeAutocomplete = new EventEmitter<void>();

  private activeIndex = NaN;

  @ContentChild(NgControl)
  private readonly control?: NgControl;

  @HostListener('keydown.arrowUp', ['-1'])
  @HostListener('keydown.arrowDown', ['1'])
  onArrow(step: number) {
    this.activeIndex = limit(this.activeIndex + step, this.filteredItems.length - 1);
  }

  @HostListener('keydown.escape')
  @HostListener('focusout')
  close() {
    this.closeAutocomplete.emit();
    this.activeIndex = NaN;
  }

  @HostListener('keydown.enter')
  onEnter() {
    this.selectItem(this.open ? this.filteredItems[this.clampedIndex] : this.value);
  }

  get filteredItems(): readonly string[] {
    return this.filter(this.items, this.value);
  }

  private get clampedIndex(): number {
    return limit(this.activeIndex, this.filteredItems.length - 1);
  }

  private get value(): string {
    return this.control?.value
      ? this.control?.value.toString()
      : '';
  }

  constructor(private _cdr: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {
    this._cdr.markForCheck();
  }

  public isActive(index: number): boolean {
    return index === this.clampedIndex;
  }

  public onMouseEnter(index: number) {
    this.activeIndex = index;
  }

  public preventMouseEvent(event: MouseEvent) {
    event.preventDefault();
  }

  public onClick(item: string) {
    this.selectItem(item);
  }

  private selectItem(value: string) {
    this.control?.control?.setValue(value);
    this.close();
  }

  private filter(items: readonly string[], value: string) {
    return items.filter(item => item.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()));
  }
}
