import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-step-location',
  templateUrl: './step-location.component.html',
  styleUrls: ['./step-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
