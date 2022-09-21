import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BlockService } from './block.service';

@Injectable({
  providedIn: 'root'
})
export class ClockService extends BlockService {

  private interval!: ReturnType<typeof setInterval>;

  public play?: boolean = false;
  public state?: string = "tic";
  public tictac?: boolean = false;
  public action_btn?: string = "Play";

  private clock: Subject<void> = new Subject();

  public fromControl: boolean = false;

  constructor() {
    super();
  }

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
        this.generateTick();
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
  public generateTick(): void {
    this.clock.next();
  }

  /**
   * 
   * @returns the random observable
   */
  public getClock$(): Observable<void> {
    return this.clock.asObservable();
  }

}
