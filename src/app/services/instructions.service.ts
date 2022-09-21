import { Injectable } from '@angular/core';
import { Operation, operationx } from '../models/operation';
import { BlockService } from './block.service';
import { CacheService } from './cache.service';
import { ClockService } from './clock.service';
import { CpuService } from './cpu.service';
import { MemoryService } from './memory.service';
import { SizesService } from './sizes.service';

@Injectable({
  providedIn: 'root'
})
export class InstructionsService {

  constructor(
    public clockService: ClockService,
    public cpuService: CpuService,
    public cacheService: CacheService,
    public memoryService: MemoryService
  ) {
    this.subscribeClock();
  }

  private subscribeClock(): void {
    console.log("subs");

    this.clockService.getClock$().subscribe(() => {
      this.scrollData();

      this.generateInstructions();
    });
  }

  private scrollData(): void {
    BlockService.cpu_0[0] = BlockService.cpu_0[1]
    BlockService.cpu_0[1] = BlockService.cpu_0[2]
    BlockService.cpu_0[2] = BlockService.cpu_0[3]

    BlockService.cpu_1[0] = BlockService.cpu_1[1]
    BlockService.cpu_1[1] = BlockService.cpu_1[2]
    BlockService.cpu_1[2] = BlockService.cpu_1[3]

    BlockService.cpu_2[0] = BlockService.cpu_2[1]
    BlockService.cpu_2[1] = BlockService.cpu_2[2]
    BlockService.cpu_2[2] = BlockService.cpu_2[3]

    BlockService.cpu_3[0] = BlockService.cpu_3[1]
    BlockService.cpu_3[1] = BlockService.cpu_3[2]
    BlockService.cpu_3[2] = BlockService.cpu_3[3]
  }

  private generateInstructions(): void {
    let ope: string = "";
    ope = operationx[Math.floor(Math.random() * 3)].operation.toString();
    BlockService.cpu_0[SizesService.lastOperation] = {
      operation: ope,
      direction: this.clockService.getRandom(this.clockService.mem_sizes - 1).toString(2),
      data: this.clockService.getRandom(this.clockService.data_max - 1).toString(16)
    };
    if (ope == "read") {
      BlockService.cpu_0[SizesService.lastOperation].data = ""
    } else if (ope == "calc") {
      BlockService.cpu_0[SizesService.lastOperation].direction = ""
      BlockService.cpu_0[SizesService.lastOperation].data = ""
    }
    this.doOperation(0, BlockService.cpu_0[SizesService.lastOperation]);

    ope = operationx[Math.floor(Math.random() * 3)].operation.toString();
    BlockService.cpu_1[SizesService.lastOperation] = {
      operation: ope,
      direction: this.clockService.getRandom(this.clockService.mem_sizes - 1).toString(2),
      data: this.clockService.getRandom(this.clockService.data_max - 1).toString(16)
    };
    if (ope == "read") {
      BlockService.cpu_1[SizesService.lastOperation].data = ""
    } else if (ope == "calc") {
      BlockService.cpu_1[SizesService.lastOperation].direction = ""
      BlockService.cpu_1[SizesService.lastOperation].data = ""
    }
    this.doOperation(1, BlockService.cpu_1[SizesService.lastOperation]);

    ope = operationx[Math.floor(Math.random() * 3)].operation.toString();
    BlockService.cpu_2[SizesService.lastOperation] = {
      operation: ope,
      direction: this.clockService.getRandom(this.clockService.mem_sizes - 1).toString(2),
      data: this.clockService.getRandom(this.clockService.data_max - 1).toString(16)
    };
    if (ope == "read") {
      BlockService.cpu_2[SizesService.lastOperation].data = ""
    } else if (ope == "calc") {
      BlockService.cpu_2[SizesService.lastOperation].direction = ""
      BlockService.cpu_2[SizesService.lastOperation].data = ""
    }
    this.doOperation(2, BlockService.cpu_2[SizesService.lastOperation]);

    ope = operationx[Math.floor(Math.random() * 3)].operation.toString();
    BlockService.cpu_3[SizesService.lastOperation] = {
      operation: ope,
      direction: this.clockService.getRandom(this.clockService.mem_sizes - 1).toString(2),
      data: this.clockService.getRandom(this.clockService.data_max - 1).toString(16)
    };
    if (ope == "read") {
      BlockService.cpu_3[SizesService.lastOperation].data = ""
    } else if (ope == "calc") {
      BlockService.cpu_3[SizesService.lastOperation].direction = ""
      BlockService.cpu_3[SizesService.lastOperation].data = ""
    }
    this.doOperation(3, BlockService.cpu_3[SizesService.lastOperation]);
  }

  public doOperation(cpu: number, operation: Operation): void {
    // console.log("Doing: " + JSON.stringify(operation));

    if (operation.operation == "write") {
      console.log("writing");
      console.log("dir bin: " + operation.direction);
      console.log("dir: " + parseInt(operation.direction));
      BlockService.blocks_memory[parseInt(operation.direction, 2)].data = operation.data

    } else if (operation.operation == "read") {
      console.log("reading from mem");
      this.cacheService.write(cpu, operation.direction)
    }
  }
}
