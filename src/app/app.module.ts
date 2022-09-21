import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './components/app/app.component';
import { ClockComponent } from './components/clock/clock.component';

// services
import { ClockService } from './services/clock.service';
import { CPUComponent } from './components/cpu/cpu.component';
import { MemoryComponent } from './components/memory/memory.component';
import { CacheComponent } from './components/cache/cache.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    CPUComponent,
    MemoryComponent,
    CacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
