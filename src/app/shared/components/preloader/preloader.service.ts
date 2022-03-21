import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PreloaderService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$ = this._isLoading.asObservable();

  constructor() {}

  loadingOn() {
    this._isLoading.next(true);
  }

  loadingOff() {
    this._isLoading.next(false);
  }
}
