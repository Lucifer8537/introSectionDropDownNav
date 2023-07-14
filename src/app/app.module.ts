import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopViewComponent,
    MobileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
