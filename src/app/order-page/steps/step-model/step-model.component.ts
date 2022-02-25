import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-step-model',
  templateUrl: './step-model.component.html',
  styleUrls: ['./step-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
