import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  @Output()
  onMenuClick = new EventEmitter();

  public isRussian = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  public showNav() {
    this.onMenuClick.emit();
  }

  public toggleLanguage() {
    this.isRussian = !this.isRussian;
  }
}
