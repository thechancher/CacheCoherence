import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private interval: any;

  public play?: boolean = false;
  public state?: string = "tic";
  public tictac?: boolean = false;
  public action_btn?: string = "Play";
  public period: number = 2000;

  public CPUs: number = 4;
  public randomOperation: number[] = new Array<number>(this.CPUs);
  private randomOperation$: Subject<number[]> = new Subject();;

  private static min: number = 0;
  private static max: number = 2;

  constructor() { }

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
        this.generateRandom();
        console.log("tac");
        console.log("");
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

  private generateRandom(): void {
    for (let i = 0; i < this.CPUs; i++) {
      var n = Math.floor(Math.random() * (ClockService.max - ClockService.min + 1)) + ClockService.min;
      this.randomOperation[i] = n;
    }
    console.log(this.randomOperation);
    this.randomOperation$.next(this.randomOperation);
  }

  public getRandom$(): Observable<number[]> {
    return this.randomOperation$.asObservable();
  }
}
