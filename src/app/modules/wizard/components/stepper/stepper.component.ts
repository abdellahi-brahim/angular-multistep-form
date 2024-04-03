import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WizardService } from '../../services/wizard.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent {
  @Input() currentStep!: number;
  @Input() steps!: any[];
  @Output() stepChanged: EventEmitter<number> = new EventEmitter<number>();

  currentStepIndex!: number;
  maxStepReached!: number;

  constructor(wizardService: WizardService) {
    wizardService.activeStepIndex$.subscribe(index => this.currentStepIndex = index);
    wizardService.maxStepReached$.subscribe(index => this.maxStepReached = index);
  }

  changeStep(stepIndex: number) {
    this.stepChanged.emit(stepIndex);
  }

  isStepClickable(stepIndex: number): boolean {
    return stepIndex <= this.maxStepReached;
  }
}
