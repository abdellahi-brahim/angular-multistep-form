import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  private activeStepIndex = new BehaviorSubject<number>(0);
  private maxStepReached = new BehaviorSubject<number>(0);
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

  public get activeStepIndex$(): Observable<number> {
    return this.activeStepIndex.asObservable();
  }

  public get maxStepReached$(): Observable<number> {
    return this.maxStepReached.asObservable();
  }

  goToStep(index: number): void {
    if (index < this.activeStepIndex.getValue() || this.isCurrentStepValid()) {
      this.activeStepIndex.next(index);
    }
  }

  nextStep(): void {
    if (this.isCurrentStepValid()) {
      const nextIndex = this.activeStepIndex.getValue() + 1;
      this.activeStepIndex.next(nextIndex);
      if (nextIndex > this.maxStepReached.getValue()) {
        this.maxStepReached.next(nextIndex);
      }
    }
  }

  previousStep(): void {
    const previousIndex = this.activeStepIndex.getValue() - 1;
    if (previousIndex >= 0) {
      this.activeStepIndex.next(previousIndex);
    }
  }

  goToNextStep(): void {
    if (this.isCurrentStepValid()) {
      const nextIndex = this.activeStepIndex.getValue() + 1;
      this.activeStepIndex.next(nextIndex);
      if (nextIndex > this.maxStepReached.getValue()) {
        this.maxStepReached.next(nextIndex);
      }
    }
  }

  goToPreviousStep(): void {
    const previousIndex = this.activeStepIndex.getValue() - 1;
    if (previousIndex >= 0) {
      this.activeStepIndex.next(previousIndex);
    }
  }

  isCurrentStepValid(): boolean {
    const currentStepKey = Object.keys(this.wizardForm.controls)[this.activeStepIndex.getValue()];
    const currentFormGroup = this.wizardForm.get(currentStepKey) as FormGroup;
    return currentFormGroup?.valid ?? false;
  }

  getCurrentStepIndex(): number {
    return this.activeStepIndex.getValue();
  }

  getStepCount(): number {
    return Object.keys(this.wizardForm.controls).length;
  }
}
