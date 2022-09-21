import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/operation';
import { BlockService } from 'src/app/services/block.service';
import { InstructionsService } from 'src/app/services/instructions.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CPUComponent implements OnInit {

  @Input() CPU!: number; // CPU id

  public operations!: Operation[]

  constructor(public instructionService: InstructionsService) { }

  ngOnInit(): void {
    // console.log("this CPU: " + this.CPU);
    switch (this.CPU) {
      case 0:
        this.operations = BlockService.cpu_0
        break;
      case 1:
        this.operations = BlockService.cpu_1
        break;
      case 2:
        this.operations = BlockService.cpu_2
        break;
      case 3:
        this.operations = BlockService.cpu_3
        break;
      default:
        break;
    }
  }

}
