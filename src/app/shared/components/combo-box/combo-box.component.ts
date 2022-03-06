import {ChangeDetectionStrategy, Component, ContentChild, HostListener, Input} from '@angular/core';
import {NgControl} from '@angular/forms';

import {limit} from '../../utility/limit';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent {
  @Input()
  items: readonly string[] = [];

  private activeIndex = NaN;

  @ContentChild(NgControl)
  private readonly control?: NgControl;

  @HostListener('keydown.arrowUp', ['-1'])
  @HostListener('keydown.arrowDown', ['1'])
  onArrow(step: number) {
    this.activeIndex = this.open ? limit(this.activeIndex + step, this.filteredItems.length - 1) : 0;
  }

  @HostListener('keydown.escape')
  @HostListener('focusout')
  close() {
    this.activeIndex = NaN;
  }

  @HostListener('keydown.enter')
  onEnter() {
    this.selectItem(this.open ? this.filteredItems[this.clampedIndex] : this.value);
  }

  get open(): boolean {
    return !isNaN(this.activeIndex);
  }

  get clampedIndex(): number {
    return limit(this.activeIndex, this.filteredItems.length - 1);
  }

  get filteredItems(): readonly string[] {
    return this.filter(this.items, this.value);
  }

  private get value(): string {
    return this.control?.value
      ? String(this.control?.value)
      : '';
  }

  constructor() { }

  isActive(index: number): boolean {
    return index === this.clampedIndex;
  }

  onMouseEnter(index: number) {
    this.activeIndex = index;
  }

  onClick(item: string) {
    this.selectItem(item);
  }

  private selectItem(item: string) {
    this.control?.control?.setValue(item);
    this.close();
  }

  private filter(items: readonly string[], value: string) {
    return items.filter(item => item.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()));
  }

  public preventMouseEvent(event: MouseEvent) {
    event.preventDefault();
  }
}
