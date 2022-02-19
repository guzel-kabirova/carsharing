import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { LocationComponent } from './shared/components/location/location.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { LandingPageInfoComponent } from './landing-page/landing-page-info/landing-page-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RefDirective } from './shared/directives/ref.directive';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NavbarComponent],
})
export class AppModule { }
