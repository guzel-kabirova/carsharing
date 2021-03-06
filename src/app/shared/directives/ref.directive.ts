import {Directive, ViewContainerRef} from '@angular/core';

import {NavbarComponent} from '../components/navbar/navbar.component';

@Directive({
  selector: '[appRef]',
})
export class RefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

  createComponent() {
    return this.viewContainerRef.createComponent(NavbarComponent);
  }
}
