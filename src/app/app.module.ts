import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { PersonalInfoComponent } from './wizard/steps/personal-info/personal-info.component';
import { LanguageComponent } from './wizard/steps/language/language.component';
import { AddressComponent } from './wizard/steps/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    PersonalInfoComponent,
    LanguageComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
