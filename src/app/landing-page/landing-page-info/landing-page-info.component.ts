import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing-page-info',
  templateUrl: './landing-page-info.component.html',
  styleUrls: ['./landing-page-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
