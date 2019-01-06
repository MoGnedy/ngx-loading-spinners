import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    BrowserModule
  ],
  exports: [LoadingSpinnerComponent]
})
export class LoadingSpinnerModule { }
