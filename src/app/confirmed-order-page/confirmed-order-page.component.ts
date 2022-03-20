import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';

import {ConfirmedOrderPageService} from './services/confirmed-order-page.service';

@Component({
  selector: 'app-confirmed-order-page',
  templateUrl: './confirmed-order-page.component.html',
  styleUrls: ['./confirmed-order-page.component.scss', '../order-page/order-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmedOrderPageComponent implements OnInit {
  public id = '';

  constructor(
    private _route: ActivatedRoute,
    private _service: ConfirmedOrderPageService,
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(
      tap(params => this.id = params.id),
      switchMap(() => this._service.getOrderInfo(this.id)),
    ).subscribe();
  }
}
