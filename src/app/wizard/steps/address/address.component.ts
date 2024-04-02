import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent {
  form: FormGroup;

  constructor(private wizardService: WizardService) {
    this.form = this.wizardService.wizardForm.get('address') as FormGroup;
  }

  get street() {
    return this.form.get('street');
  }

  get city() {
    return this.form.get('city');
  }
}
