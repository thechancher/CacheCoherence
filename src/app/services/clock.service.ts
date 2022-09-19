import { Injectable } from '@angular/core';
import { Observable, Subject, TimeoutConfig } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private interval!: ReturnType<typeof setInterval>;

  public play?: boolean = false;
  public state?: string = "tic";
  public tictac?: boolean = false;
  public action_btn?: string = "Play";
  public period: number = 2000;

  public CPUs: number = 4;
  public randomOperation: number[] = new Array<number>(this.CPUs);
  private randomOperation$: Subject<number[]> = new Subject();;

  public instructions_history: number = 4;

  public cache_size: number = 4;
  public mem_size: number = 8;

  public data_size: number = 16;

  private static min: number = 0;
  private static max: number = 2;

  constructor() { }

  /**
   * this always build the interval
   * @param period time for the interval
   */
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

  /**
   * when interval is running: destroy the interval
   * when the interval is stopped: build the interval
   */
  public play_pause_btn(): void {
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

  /**
   * change the period of the clock
   * @param period period of the clock
   */
  public changeSpeed(period: number): void {
    console.log("changing speed");
    this.period = period;
  }

  /**
   * generate a random operation
   */
  private generateRandom(): void {
    for (let i = 0; i < this.CPUs; i++) {
      var n = Math.floor(Math.random() * (ClockService.max - ClockService.min + 1)) + ClockService.min;
      this.randomOperation[i] = n;
    }
    console.log(this.randomOperation);
    this.randomOperation$.next(this.randomOperation);
  }

  /**
   * 
   * @returns the random observable
   */
  public getRandom$(): Observable<number[]> {
    return this.randomOperation$.asObservable();
  }
}
