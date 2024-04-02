import { Component } from '@angular/core';
import { WizardService } from './wizard.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
})
export class WizardComponent {
  steps = [
    { label: 'Personal Info', key: 'personalInfo' },
    { label: 'Language', key: 'language' },
    { label: 'Address', key: 'address' }
  ];

  constructor(public wizardService: WizardService) {}

  nextStep(): void {
    this.wizardService.goToNextStep();
  }

  previousStep(): void {
    this.wizardService.goToPreviousStep();
  }

  goToStep(index: number): void {
    this.wizardService.goToStep(index);
  }

  isCurrentStepValid(): boolean {
    return this.wizardService.isCurrentStepValid();
  }

  showNextButton(): boolean {
    return this.wizardService.currentStepIndex < this.steps.length - 1;
  }

  showPreviousButton(): boolean {
    return this.wizardService.currentStepIndex > 0;
  }

  showSubmitButton(): boolean {
    return this.wizardService.currentStepIndex === this.steps.length - 1;
  }

  submitForm(): void {
    if (this.isCurrentStepValid()) {
      console.log('Form submission', this.wizardService.wizardForm.value);
    }
  }
}
