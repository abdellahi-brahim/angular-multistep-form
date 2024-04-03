import { Component } from '@angular/core';
import { WizardService } from '../../services/wizard.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html'
})
export class WizardComponent {
  steps = [
    { label: 'Personal Info', id: 'personalInfo' },
    { label: 'Language', id: 'language' },
    { label: 'Address', id: 'address' }
  ];

  constructor(public wizardService: WizardService) {}

  get currentStepIndex(): number {
    return this.wizardService.getCurrentStepIndex();
  }

  goToStep(index: number): void {
    this.wizardService.goToStep(index);
  }

  nextStep(): void {
    this.wizardService.goToNextStep();
  }

  previousStep(): void {
    this.wizardService.goToPreviousStep();
  }

  showPreviousButton(): boolean {
    return this.currentStepIndex > 0;
  }

  showNextButton(): boolean {
    return this.currentStepIndex < this.steps.length - 1;
  }

  showSubmitButton(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  submitForm(): void {
    if (this.wizardService.isCurrentStepValid()) {
      console.log('Form data to submit:', this.wizardService.wizardForm.value);
    } else {
      console.error('Form is not valid and cannot be submitted.');
    }
  }
}
