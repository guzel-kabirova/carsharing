import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './shared/components/slider/slider.component';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {LocationComponent} from './shared/components/location/location.component';
import {ButtonComponent} from './shared/components/button/button.component';
import {LandingPageInfoComponent} from './landing-page/landing-page-info/landing-page-info.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {RefDirective} from './shared/directives/ref.directive';
import {IconModule} from './icon/icon.module';
import {ICONS_PATH} from './icon/icons-path';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SidebarComponent,
    LandingPageComponent,
    OrderPageComponent,
    LocationComponent,
    ButtonComponent,
    LandingPageInfoComponent,
    NavbarComponent,
    RefDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
  ],
  providers: [
    {
      provide: ICONS_PATH,
      useValue: 'assets/icons'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
