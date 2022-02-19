import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {RefDirective} from './shared/directives/ref.directive';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDirective)
  refDir?: RefDirective;

  title = 'carsharing';

  constructor(private resolver: ComponentFactoryResolver) {
  }

  public openNav() {
    if (this.refDir) {
      this.refDir.viewContainerRef.clear();
      this.refDir.createComponent();
    }

  }
}
