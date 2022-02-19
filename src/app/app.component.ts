import {Component, ViewChild} from '@angular/core';

import {RefDirective} from './shared/directives/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDirective)
  refDir?: RefDirective;

  title = 'carsharing';

  public openNav() {
    if (this.refDir) {
      this.refDir.viewContainerRef.clear();
      const component = this.refDir.createComponent();
      component.instance.onCloseBtnClick
        .subscribe(() => this.refDir && this.refDir.viewContainerRef.clear());
    }
  }
}
