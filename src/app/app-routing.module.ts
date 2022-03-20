import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LandingPageComponent} from './landing-page/landing-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {ConfirmedOrderPageComponent} from './confirmed-order-page/confirmed-order-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'order', component: OrderPageComponent},
  {path: 'order/:id', component: ConfirmedOrderPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
