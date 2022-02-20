import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './shared/components/slider/slider.component';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {LocationComponent} from './shared/components/location/location.component';
import {ButtonComponent} from './shared/components/buttons/button/button.component';
import {LandingInfoComponent} from './landing-page/landing-info/landing-info.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {RefDirective} from './shared/directives/ref.directive';
import {IconModule} from './shared/components/icon/icon.module';
import {ICONS_PATH} from './shared/components/icon/icons-path';
import { LangComponent } from './shared/components/buttons/lang/lang.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SidebarComponent,
    LandingPageComponent,
    OrderPageComponent,
    LocationComponent,
    ButtonComponent,
    LandingInfoComponent,
    NavbarComponent,
    RefDirective,
    LangComponent,
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
