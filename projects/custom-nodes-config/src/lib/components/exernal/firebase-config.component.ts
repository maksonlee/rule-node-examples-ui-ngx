import { Component } from '@angular/core';
import { AppState } from '@core/public-api';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tb-external-node-firebase-config',
  templateUrl: './firebase-config.component.html',
  styleUrls: []
})
export class FirebaseConfigComponent extends RuleNodeConfigurationComponent {

  firebaseConfigForm: FormGroup;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.firebaseConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.firebaseConfigForm = this.fb.group({
      credential: [configuration ? configuration.credential : null, [Validators.required]]
    });
  }

}
