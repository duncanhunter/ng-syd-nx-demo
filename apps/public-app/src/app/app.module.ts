import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedUiHeaderModule }from '@company-workspace/shared/ui/header';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiHeaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
