import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
  Renderer2,
  ElementRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingSpinnersService } from './loading-spinners.service';

@Component({
  selector: 'ngx-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LoadingSpinnerComponent implements OnInit, AfterViewInit, OnDestroy {

  private _name: String;
  private _img: String;
  private subscription: Subscription;
  private _showLoader = false;
  private _defaultImage: string;
  private _minHeight: string;
  constructor(
    private loadingSpinnersService: LoadingSpinnersService,
    private cd: ChangeDetectorRef,
    private renderer2: Renderer2,
    private el: ElementRef
  ) {
    this._defaultImage = this.loadingSpinnersService.defaultSpinnerFilePath;
    this._minHeight = '100%';
  }

  ngOnInit() {
    this.createServiceSubscription();
  }

  ngAfterViewInit() {
    this.renderer2.setStyle(this.el.nativeElement.parentNode, 'min-height', this.minHeight);
  }

  @Input()
  public set name(value: String) {
    this._name = value;
  }

  public get name(): String {
    return this._name;
  }

  @Input()
  public set img(value: String) {
    this._img = value;
  }

  public get img(): String {
    return this._img || this._defaultImage;
  }

  @Input()
  public set minHeight(value: string) {
    this._minHeight = value;
  }

  @Input()
  public set show(value: boolean) {
    this._showLoader = value;
  }

  public get minHeight(): string {
    return this._minHeight;
  }

  public get defaultImage() {
    return this._defaultImage;
  }

  createServiceSubscription() {

    this.subscription =
      this.loadingSpinnersService.loaderObservable.subscribe(obj => {
        if (obj.name === this._name) {
          if (obj.show) {
            this._showLoader = true;
            this.renderer2.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
            this.renderer2.setStyle(this.el.nativeElement.parentNode, 'box-sizing', 'border-box');
          } else {
            this._showLoader = false;
          }
          this.cd.detectChanges();
        }
      });
  }

  get showLoader() {
    return this._showLoader;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
