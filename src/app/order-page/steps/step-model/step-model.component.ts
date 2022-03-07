import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {StepModelFacadeService} from './services/step-model.facade.service';
import {ALL_CATEGORIES} from './step-model.const';

@Component({
  selector: 'app-step-model',
  templateUrl: './step-model.component.html',
  styleUrls: ['./step-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepModelComponent implements OnInit {
  public form?: FormGroup;
  public cars$ = this._facade.getCars();

  public allCategories = ALL_CATEGORIES;
  public categories$ = this._facade.getCategories();

  constructor(
    private _fb: FormBuilder,
    private _facade: StepModelFacadeService,
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      model: ['', Validators.required],
    });
  }
}
