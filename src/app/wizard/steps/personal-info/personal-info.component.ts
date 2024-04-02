import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html'
})
export class PersonalInfoComponent {
  form: FormGroup;

  constructor(private wizardService: WizardService) {
    this.form = this.wizardService.wizardForm.get('personalInfo') as FormGroup;
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }
}
