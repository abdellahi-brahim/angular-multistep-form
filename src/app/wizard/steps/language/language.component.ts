import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html'
})
export class LanguageComponent {
  form: FormGroup;

  constructor(private wizardService: WizardService) {
    this.form = this.wizardService.wizardForm.get('language') as FormGroup;
  }

  get language() {
    return this.form.get('language');
  }
}
