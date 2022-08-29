import { Component } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cache Coherence Simulator v1.0';

  public CPUs: number = 0;

  constructor(private clock: ClockService) {
    this.CPUs = this.clock.CPUs;
  }

  public counter(i: number): Array<number> {
    return new Array(i);
  }
}
