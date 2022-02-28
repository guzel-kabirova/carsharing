import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './landing-page/slider/slider.component';
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
import {LangComponent} from './shared/components/buttons/lang/lang.component';
import {LogoComponent} from './shared/components/logo/logo.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {StepperComponent} from './order-page/stepper/stepper.component';
import {StepComponent} from './order-page/stepper/step/step.component';
import {StepperArrowComponent} from './order-page/stepper/stepper-arrow/stepper-arrow.component';
import {StepLocationComponent} from './order-page/steps/step-location/step-location.component';
import {LabelComponent} from './shared/components/label/label.component';
import {InputComponent} from './shared/components/input/input.component';
import {MainOrderInfoComponent} from './order-page/main-order-info/main-order-info.component';
import {InfoListComponent} from './shared/components/info-list/info-list.component';
import {InfoItemComponent} from './shared/components/info-list/info-item/info-item.component';
import { StepModelComponent } from './order-page/steps/step-model/step-model.component';
import { StepExtraComponent } from './order-page/steps/step-extra/step-extra.component';
import { StepFinalComponent } from './order-page/steps/step-final/step-final.component';
import {ReactiveFormsModule} from '@angular/forms';

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
    LogoComponent,
    HeaderComponent,
    StepperComponent,
    StepComponent,
    StepperArrowComponent,
    StepLocationComponent,
    LabelComponent,
    InputComponent,
    MainOrderInfoComponent,
    InfoListComponent,
    InfoItemComponent,
    StepModelComponent,
    StepExtraComponent,
    StepFinalComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IconModule,
        ReactiveFormsModule,
    ],
  providers: [
    {
      provide: ICONS_PATH,
      useValue: 'assets/icons',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
