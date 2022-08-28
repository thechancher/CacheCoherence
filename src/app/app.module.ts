import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './components/app/app.component';
import { ClockComponent } from './components/clock/clock.component';

// services
import { ClockService } from './services/clock.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
