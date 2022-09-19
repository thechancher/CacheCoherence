import { Component, Input, OnInit } from '@angular/core';
import { Operation, operations } from 'src/app/models/operation';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CPUComponent implements OnInit {

  @Input() CPU!: number; // CPU id

  public operations: Operation[] = new Array<Operation>(this.clockService.instructions_history);

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clockService.getRandom$().subscribe((random: number[]) => {
      console.log(operations[random[this.CPU]].operation);

      for (let i = 1; i < this.operations.length; i++) {
        this.operations[i - 1] = this.operations[i];
      }

      this.operations[this.clockService.instructions_history - 1] = operations[random[this.CPU]];
    });
  }
}
