import { Component } from '@angular/core';
import { WizardService } from '../../services/wizard.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html'
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

  get currentStepIndex(): number {
    return this.wizardService.getCurrentStepIndex();
  }

  isStepActive(index: number): boolean {
    return index === this.currentStepIndex;
  }

  showNextButton(): boolean {
    return this.currentStepIndex < this.steps.length - 1;
  }

  showPreviousButton(): boolean {
    return this.currentStepIndex > 0;
  }

  showSubmitButton(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  submitForm(): void {
    if (this.wizardService.isCurrentStepValid()) {
      console.log('Form data to submit:', this.wizardService.wizardForm.value);
    } else {
      console.error('Current step is not valid.');
    }
  }
}
