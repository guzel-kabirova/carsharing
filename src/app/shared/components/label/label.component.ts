import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {
  @Input()
  labelId = '';
  @Input()
  labelText = '';

  constructor() { }

  ngOnInit(): void {
  }

}
