import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input()
  navbarLinkNames?: string[];
  @Input()
  socialIcons?: string[];
  @Output()
  onCloseBtnClick = new EventEmitter<void>();

  constructor() {
  }

  public closeNav() {
    this.onCloseBtnClick.emit();
  }

}
