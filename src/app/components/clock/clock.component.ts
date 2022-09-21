import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';
import { InstructionsService } from 'src/app/services/instructions.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  public cpu: number = 0;
  public ope: string = "calc";
  public dir: string = "1";
  public dat: string = "0";

  constructor(
    public clockService: ClockService,
    public instructionService: InstructionsService
  ) {
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

  public sendInstruction(): void {
    if (this.cpu != undefined && this.dir != undefined && this.dat != undefined && this.ope != undefined) {
      this.clockService.fromControl = true;
      // console.log("CPU: " + this.cpu);
      // console.log("ope: " + this.ope);
      // console.log("dir: " + this.dir);
      // console.log("dat: " + this.dat);
      if (this.ope == "calc" || this.ope == "read" || this.ope == "write") {
        var dir = parseInt(this.dir, 2)
        var dat = parseInt(this.dat, 16)
        if (!Number.isNaN(dir) && !Number.isNaN(dat)) {
          // console.log("good");
          this.instructionService.generateInstructions_manual(this.cpu, this.ope, this.dir, this.dat)
        }
      }
    }
  }

}
