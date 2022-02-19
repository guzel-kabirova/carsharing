import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  @Output()
  onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public closeNav() {
    this.onClose.emit();
  }

}
