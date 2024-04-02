import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html'
})
export class StepperComponent {
  @Input() steps!: any[];
  @Input() currentStep!: number;
  @Output() stepChanged: EventEmitter<number> = new EventEmitter<number>();

  changeStep(stepIndex: number) {
    this.stepChanged.emit(stepIndex);
  }
}
