import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-extra',
  templateUrl: './step-extra.component.html',
  styleUrls: ['./step-extra.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepExtraComponent implements OnInit {
  public form?: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      color: ['', Validators.required],
      date: ['', Validators.required],
      rate: ['', Validators.required],
      extra: ['', Validators.required],
    });
  }
}
