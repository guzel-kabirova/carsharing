import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { LocationComponent } from './components/location/location.component';
import { ButtonComponent } from './components/button/button.component';
import { LandingPageInfoComponent } from './landing-page/landing-page-info/landing-page-info.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
