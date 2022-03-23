import {Directive, ViewContainerRef} from '@angular/core';

import {DialogConfirmComponent} from '../../order-page/steps/step-final/dialog-confirm/dialog-confirm.component';

@Directive({
  selector: '[appRefDialog]',
})
export class RefDialogDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

  createComponent() {
    return this.viewContainerRef.createComponent(DialogConfirmComponent);
  }
}
