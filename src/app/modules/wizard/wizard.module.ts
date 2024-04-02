import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { WizardComponent } from './components/wizard/wizard.component';
import { PersonalInfoComponent } from './components/steps/personal-info/personal-info.component';
import { LanguageComponent } from './components/steps/language/language.component';
import { AddressComponent } from './components/steps/address/address.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { WizardService } from './services/wizard.service';

const wizardRoutes: Routes = [
  {
    path: '',
    component: WizardComponent
  }
];

@NgModule({
  declarations: [
    WizardComponent,
    PersonalInfoComponent,
    LanguageComponent,
    AddressComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(wizardRoutes)
  ],
  providers: [WizardService]
})
export class WizardModule {}
