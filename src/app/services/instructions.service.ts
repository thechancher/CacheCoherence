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

  private isHere: boolean = false
  private cache: number[] = []
  private slot: number[] = []

  constructor(
    public clockService: ClockService,
    public cpuService: CpuService,
    public cacheService: CacheService,
    public memoryService: MemoryService
  ) {
    this.subscribeClock();
  }

  private subscribeClock(): void {
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

  private generateInstructions(cpu: number = -1): void {
    let ope: string = "";
    if (cpu != 0) {
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
    }

    if (cpu != 1) {
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
    }


    if (cpu != 2) {
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
    }

    if (cpu != 3) {
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
    console.log("==========");

  }

  public generateInstructions_manual(cpu: number, ope: string, dir: string, dat: string): void {
    this.scrollData()

    switch (ope) {
      case "calc":
        console.log("calc");
        switch (cpu) {
          case 0:
            BlockService.cpu_0[SizesService.lastOperation] = {
              operation: "calc",
              direction: "",
              data: ""
            };
            this.doOperation(0, BlockService.cpu_0[SizesService.lastOperation]);
            break;
          case 1:
            BlockService.cpu_1[SizesService.lastOperation] = {
              operation: "calc",
              direction: "",
              data: ""
            };
            this.doOperation(1, BlockService.cpu_1[SizesService.lastOperation]);
            break;
          case 2:
            BlockService.cpu_2[SizesService.lastOperation] = {
              operation: "calc",
              direction: "",
              data: ""
            };
            this.doOperation(2, BlockService.cpu_2[SizesService.lastOperation]);
            break;
          case 3:
            BlockService.cpu_3[SizesService.lastOperation] = {
              operation: "calc",
              direction: "",
              data: ""
            };
            this.doOperation(3, BlockService.cpu_3[SizesService.lastOperation]);
            break;
        }
        break;

      case "read":
        switch (cpu) {
          case 0:
            BlockService.cpu_0[SizesService.lastOperation] = {
              operation: "read",
              direction: dir,
              data: ""
            };
            this.doOperation(0, BlockService.cpu_0[SizesService.lastOperation]);
            break;
          case 1:
            BlockService.cpu_1[SizesService.lastOperation] = {
              operation: "read",
              direction: dir,
              data: ""
            };
            this.doOperation(1, BlockService.cpu_1[SizesService.lastOperation]);
            break;
          case 2:
            BlockService.cpu_2[SizesService.lastOperation] = {
              operation: "read",
              direction: dir,
              data: ""
            };
            this.doOperation(2, BlockService.cpu_2[SizesService.lastOperation]);
            break;
          case 3:
            BlockService.cpu_3[SizesService.lastOperation] = {
              operation: "read",
              direction: dir,
              data: ""
            };
            this.doOperation(3, BlockService.cpu_3[SizesService.lastOperation]);
            break;

          default:
            break;
        }
        break;

      case "write":
        switch (cpu) {
          case 0:
            BlockService.cpu_0[SizesService.lastOperation] = {
              operation: "write",
              direction: dir,
              data: dat
            };
            this.doOperation(0, BlockService.cpu_0[SizesService.lastOperation]);
            break;
          case 1:
            BlockService.cpu_1[SizesService.lastOperation] = {
              operation: "write",
              direction: dir,
              data: dat
            };
            this.doOperation(1, BlockService.cpu_1[SizesService.lastOperation]);
            break;
          case 2:
            BlockService.cpu_2[SizesService.lastOperation] = {
              operation: "write",
              direction: dir,
              data: dat
            };
            this.doOperation(2, BlockService.cpu_2[SizesService.lastOperation]);
            break;
          case 3:
            BlockService.cpu_3[SizesService.lastOperation] = {
              operation: "write",
              direction: dir,
              data: dat
            };
            this.doOperation(3, BlockService.cpu_3[SizesService.lastOperation]);
            break;

          default:
            break;
        }
        break;
      default:
        break;
    }
    console.log("==========");
    this.generateInstructions(cpu);
  }

  public doOperation(cpu: number, operation: Operation): void {
    // console.log("Doing: " + JSON.stringify(operation));

    if (operation.operation == "write") {
      console.log("writing to cache");
      // console.log("dir bin: " + operation.direction);
      // console.log("dir: " + parseInt(operation.direction));
      BlockService.blocks_memory[parseInt(operation.direction, 2)].data = operation.data
      console.log("----------");

    } else if (operation.operation == "read") {
      console.log("reading from memory");
      if (this.checkInCache(operation.direction)) {
        for (let i = 0; i < this.cache.length; i++) {
          this.cacheService.writeFromCache(this.cache[i], this.slot[i], cpu)
        }
        this.cache = []
        this.slot = []
        this.isHere = false
      } else
        this.cacheService.writeFromMemory(cpu, operation.direction)
      console.log("----------");
    } else {
      console.log("calculating");
      console.log("----------");
    }
  }

  public checkInCache(dir: string): boolean {
    // var isHere: boolean = false
    // var cache: number[] = []
    // var slot: number[] = []

    for (let i = 0; i < this.clockService.cache_size; i++) {
      if (BlockService.cache_0[i].direction == dir) {
        this.cache.push(0);
        this.slot.push(i);
        this.isHere = true;
        break;
      }
    }

    for (let i = 0; i < this.clockService.cache_size; i++) {
      if (BlockService.cache_1[i].direction == dir) {
        this.cache.push(1);
        this.slot.push(i);
        this.isHere = true;
        break;
      }
    }

    for (let i = 0; i < this.clockService.cache_size; i++) {
      if (BlockService.cache_2[i].direction == dir) {
        this.cache.push(2);
        this.slot.push(i);
        this.isHere = true;
        break;
      }
    }

    for (let i = 0; i < this.clockService.cache_size; i++) {
      if (BlockService.cache_3[i].direction == dir) {
        this.cache.push(3);
        this.slot.push(i);
        this.isHere = true;
        break;
      }
    }

    if (this.isHere) {
      console.log("is in cache: " + this.cache + " slot: " + this.slot);
    }

    return this.isHere
  }
}
