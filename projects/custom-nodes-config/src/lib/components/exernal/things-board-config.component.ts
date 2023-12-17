import { Component } from '@angular/core';
import { AppState } from '@core/public-api';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tb-external-node-things-board-config',
  templateUrl: './things-board-config.component.html',
  styleUrls: []
})
export class ThingsBoardConfigComponent extends RuleNodeConfigurationComponent {

  thingsBoardConfigForm: FormGroup;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.thingsBoardConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.thingsBoardConfigForm = this.fb.group({
      host: [configuration ? configuration.host : null, [Validators.required]]
    });
  }

}
