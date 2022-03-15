import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TUI_SANITIZER, TuiDialogModule, TuiNotificationsModule, TuiRootModule} from '@taiga-ui/core';
import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {TuiInputDateTimeModule} from '@taiga-ui/kit';
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';
import {of} from 'rxjs';

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
import {InfoListComponent} from './order-page/main-order-info/info-list/info-list.component';
import {StepModelComponent} from './order-page/steps/step-model/step-model.component';
import {StepExtraComponent} from './order-page/steps/step-extra/step-extra.component';
import {StepFinalComponent} from './order-page/steps/step-final/step-final.component';
import {AutoCardComponent} from './order-page/steps/step-model/auto-card/auto-card.component';
import {RadioButtonComponent} from './shared/components/radio-button/radio-button.component';
import {AppInterceptor} from './shared/app.interceptor';
import {ComboBoxComponent} from './shared/components/combo-box/combo-box.component';
import {ResetComponent} from './shared/components/buttons/reset/reset.component';
import {CheckboxComponent} from './shared/components/checkbox/checkbox.component';
import {DialogConfirmComponent} from './order-page/steps/step-final/dialog-confirm/dialog-confirm.component';
import {environment} from '../environments/environment';
import {PreloaderComponent} from './shared/components/preloader/preloader.component';

const ICONS_PROVIDER: Provider = {
  provide: ICONS_PATH,
  useValue: 'assets/icons',
};

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};

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
    StepModelComponent,
    StepExtraComponent,
    StepFinalComponent,
    AutoCardComponent,
    RadioButtonComponent,
    ComboBoxComponent,
    ResetComponent,
    CheckboxComponent,
    DialogConfirmComponent,
    PreloaderComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKeyMap,
    }),
    AppRoutingModule,
    IconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,

    TuiInputDateTimeModule,
  ],
  providers: [
    ICONS_PROVIDER,
    INTERCEPTOR_PROVIDER,
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {provide: TUI_LANGUAGE, useValue: of(TUI_RUSSIAN_LANGUAGE)},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
