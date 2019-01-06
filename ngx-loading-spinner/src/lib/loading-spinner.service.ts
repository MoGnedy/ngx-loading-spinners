import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private loaderObserver: Observer<{ name: string, show: boolean }>;

  public loaderObservable: Observable<any>;

  constructor() {
    this.loaderObservable = new Observable(observer => {
      this.loaderObserver = observer;
    }
    ).pipe(share());
  }


  show(name: string) {
    if (this.loaderObserver) {
      this.loaderObserver.next({ name: name, show: true });
    }
  }


  hide(name: string) {
    if (this.loaderObserver) {
      this.loaderObserver.next({ name: name, show: false });
    }
  }

}
