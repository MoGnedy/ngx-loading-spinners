import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnersService {

  private loaderObserver: Observer<{ name: string, show: boolean }>;

  public loaderObservable: Observable<any>;

  private _defaultSpinnerFilePath: string;

  constructor() {
    this.loaderObservable = new Observable(observer => {
      this.loaderObserver = observer;
    }
    ).pipe(share());
  }


  public show(name: string) {
    if (this.loaderObserver) {
      this.loaderObserver.next({ name: name, show: true });
    }
  }

  public hide(name: string) {
    if (this.loaderObserver) {
      this.loaderObserver.next({ name: name, show: false });
    }
  }

  public getUniqueName(): string {
    const random = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + new Date().valueOf();
  }

  public get defaultSpinnerFilePath(): string {
    return this._defaultSpinnerFilePath;
  }

  public set defaultSpinnerFilePath(filePath: string) {
    this._defaultSpinnerFilePath = filePath;
  }

}
