import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepComponent implements OnInit {
  @Input()
  stepText = '';
  @Input()
  isLast = false;

  constructor() { }

  ngOnInit(): void {
  }

}
