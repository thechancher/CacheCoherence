import { Component, Input, OnInit } from '@angular/core';
import { Operation, operations } from 'src/app/models/operation';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CPUComponent implements OnInit {

  @Input() CPU!: number;

  private history: number = 4;
  public operations: Operation[] = new Array<Operation>(this.history);

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clockService.getRandom$().subscribe((random: number[]) => {
      console.log(operations[random[this.CPU]].operation);

      for (let i = 1; i < this.operations.length; i++) {
        this.operations[i - 1] = this.operations[i];
      }

      this.operations[this.history - 1] = operations[random[this.CPU]];
    });
  }
}
