import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangComponent {
  public isRussian = true;

  constructor() { }

  public toggleLanguage() {
    this.isRussian = !this.isRussian;
  }
}
