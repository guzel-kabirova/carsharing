import {Component, ChangeDetectionStrategy, Input, Renderer2, ElementRef, OnInit, HostBinding} from '@angular/core';

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input()
  @HostBinding('style.width')
  width = '';

  constructor() { }

  ngOnInit(): void {

  }


}
