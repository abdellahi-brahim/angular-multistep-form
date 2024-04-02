import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  private activeStepIndex = new BehaviorSubject<number>(0);
  public readonly activeStepIndex$ = this.activeStepIndex.asObservable();

  public wizardForm: FormGroup;

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

  public getCurrentStepIndex(): number {
    return this.activeStepIndex.getValue();
  }

  isCurrentStepValid(): boolean {
    const currentStepKey = Object.keys(this.wizardForm.controls)[this.activeStepIndex.getValue()];
    return this.wizardForm.get(currentStepKey)?.valid ?? false;
  }

  goToNextStep(): void {
    if (this.isCurrentStepValid()) {
      const nextIndex = this.activeStepIndex.getValue() + 1;
      this.activeStepIndex.next(nextIndex);
    }
  }

  goToPreviousStep(): void {
    const previousIndex = this.activeStepIndex.getValue() - 1;
    if (previousIndex >= 0) {
      this.activeStepIndex.next(previousIndex);
    }
  }

  goToStep(index: number): void {
    if (index >= 0 && index < this.getStepCount()) {
      this.activeStepIndex.next(index);
    }
  }

  getStepCount(): number {
    return Object.keys(this.wizardForm.controls).length;
  }
}
