import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private interval: any;
  
  public play?: boolean = false;
  public state?: string = "tic";
  public tictac?: boolean = false;
  public action_btn?: string = "Play";
  public period: number = 1000;

  constructor() {
  }

  public startClock(period: number): void {
    this.period = period;
    this.interval = setInterval(() => {
      this.tictac = !this.tictac;
      if (this.tictac) {
        this.state = "tic";
        console.log("tic");
      }
      else {
        this.state = "tac";
        console.log("tac");
      }
    }, this.period);
  }

  public play_pause_btn() {
    if (this.play) {
      clearInterval(this.interval);
      this.action_btn = "Play";
    }
    else {
      this.startClock(this.period);
      this.action_btn = "Pause";
    }
    this.play = !this.play;
  }

  public changeSpeed(period: number): void {
    console.log("changing speed");
    this.period = period;
  }
}
