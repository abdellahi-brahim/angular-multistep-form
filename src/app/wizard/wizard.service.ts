import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  public wizardForm: FormGroup;
  public currentStepIndex: number = 0;

  constructor(private fb: FormBuilder) {
    this.wizardForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]]
      }),
      language: this.fb.group({
        language: ['', Validators.required]
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      })
    });
  }

  isCurrentStepValid(): boolean {
    const stepKeys = Object.keys(this.wizardForm.controls);
    const currentStepKey = stepKeys[this.currentStepIndex];
    return this.wizardForm.get(currentStepKey)?.valid ?? false;
  }

  goToNextStep(): void {
    if (this.isCurrentStepValid() && this.currentStepIndex < this.getStepCount() - 1) {
      this.currentStepIndex++;
    }
  }

  goToPreviousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  goToStep(index: number): void {
    if (index >= 0 && index < this.getStepCount()) {
      this.currentStepIndex = index;
    }
  }

  getStepCount(): number {
    return Object.keys(this.wizardForm.controls).length;
  }
}
