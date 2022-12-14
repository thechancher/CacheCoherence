import { Component } from '@angular/core';
import { SizesService } from 'src/app/services/sizes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cache Coherence Simulator v1.0';
  year = (new Date()).getFullYear()

  public cpus: number[] = new Array(SizesService.CPUs);

  constructor() { }

  /**
   * used to build an array for the loop
   * @param i number of iterations
   * @returns the array
   */
  public counter(i: number): Array<number> {
    return new Array(i);
  }
}
