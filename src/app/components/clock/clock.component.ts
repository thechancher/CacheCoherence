import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor(public clockService: ClockService) {
  }

  ngOnInit(): void {
  }

  /**
   * toggle the running state
   */
  public togglePlay(): void {
    this.clockService.play_pause_btn();
  }

  /**
   * change the running speed
   */
  public speedUp(): void {
    this.clockService.changeSpeed(this.clockService.period / 2);
  }

  /**
   * change the running speed
   */
  public speedDown(): void {
    this.clockService.changeSpeed(this.clockService.period * 2);
  }

  /**
   * step in
   */
  public stepIn(): void {
    this.clockService.generateTick();

  }

}
