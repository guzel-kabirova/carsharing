import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoItemComponent implements OnInit {
  @Input()
  key = '';

  constructor() { }

  ngOnInit(): void {
  }

}
