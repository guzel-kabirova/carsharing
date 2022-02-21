import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Output()
  onOpenBtnClick = new EventEmitter<void>();

  constructor() { }

  public showNav() {
    this.onOpenBtnClick.emit();
  }
}
