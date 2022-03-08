import {Component, ViewChild} from '@angular/core';

import {RefDirective} from './shared/directives/ref.directive';
import {NAV_LINKS, NAV_SOCIAL_ICONS} from './landing-page/landing-page.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDirective)
  private refDir?: RefDirective;

  public openNav() {
    if (this.refDir) {
      this.refDir.viewContainerRef.clear();
      const component = this.refDir.createComponent();
      component.instance.navbarLinkNames = NAV_LINKS;
      component.instance.socialIcons = NAV_SOCIAL_ICONS;
      component.instance.onCloseBtnClick
        .subscribe(() => this.refDir && this.refDir.viewContainerRef.clear());
    }
  }
}
