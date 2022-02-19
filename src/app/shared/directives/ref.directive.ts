import {Directive, ViewContainerRef} from '@angular/core';
import {NavbarComponent} from '../../navbar/navbar.component';

@Directive({
  selector: '[appRef]'
})
export class RefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

  createComponent() {
    // this.viewContainerRef.createComponent(NavbarComponent);
  }

}
