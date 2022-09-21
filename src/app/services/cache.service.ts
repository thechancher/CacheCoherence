import { Injectable } from '@angular/core';
import { BlockService } from './block.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(public blockService: BlockService) {
    this.buildSlots();
  }

  /**
   * build the empty slots
   */
  private buildSlots(): void {

    var data_bus_size: number = Math.ceil(Math.log2(this.blockService.data_size))
    var data: string = "0".repeat(data_bus_size)

    var mem_bus_size: number = Math.ceil(Math.log2(this.blockService.mem_sizes))
    var mem_bus: string = "0".repeat(mem_bus_size)

    BlockService.cache_0 = [
      { slot: 0, state: ".", direction: mem_bus, data: data },
      { slot: 1, state: ".", direction: mem_bus, data: data },
      { slot: 2, state: ".", direction: mem_bus, data: data },
      { slot: 3, state: ".", direction: mem_bus, data: data },
    ];
    BlockService.cache_1 = [
      { slot: 0, state: ".", direction: mem_bus, data: data },
      { slot: 1, state: ".", direction: mem_bus, data: data },
      { slot: 2, state: ".", direction: mem_bus, data: data },
      { slot: 3, state: ".", direction: mem_bus, data: data },
    ];
    BlockService.cache_2 = [
      { slot: 0, state: ".", direction: mem_bus, data: data },
      { slot: 1, state: ".", direction: mem_bus, data: data },
      { slot: 2, state: ".", direction: mem_bus, data: data },
      { slot: 3, state: ".", direction: mem_bus, data: data },
    ];
    BlockService.cache_3 = [
      { slot: 0, state: ".", direction: mem_bus, data: data },
      { slot: 1, state: ".", direction: mem_bus, data: data },
      { slot: 2, state: ".", direction: mem_bus, data: data },
      { slot: 3, state: ".", direction: mem_bus, data: data },
    ];

    // var binary: string = "";
    // var slicer: number = 0;

    // var binary: string;
    // var bus: string;
    // var slicer: number;
    // for (let i = 0; i < SizesService.CPUs; i++) {
    //   var blocks: CacheSlot[] = [];
    //   for (let j = 0; j < this.blockService.cache_size; j++) {
    //     const binary = i.toString(2);
    //     const slicer = binary.length
    //     const bus = data.slice(0, -1 * slicer) + binary

    //     blocks.push({ slot: i, state: "", direction: mem_bus, data: data })
    //   }

    //   this.blockService.blocks_cache.push({
    //     cache: i,
    //     blocks: blocks
    //   })

    // }

    // console.log("build slots");
    // console.log("blocks: " + JSON.stringify(this.blockService.blocks_cache));
  }

  public writeFromMemory(cpu: number, direction: string): void {
    console.log("from memory");
    switch (cpu) {
      case 0:
        BlockService.cache_0[0].direction = direction;
        BlockService.cache_0[0].data = BlockService.blocks_memory[parseInt(direction, 2)].data;
        BlockService.cache_0[0].state = "exc"
        break;
      case 1:
        BlockService.cache_1[0].direction = direction;
        BlockService.cache_1[0].data = BlockService.blocks_memory[parseInt(direction, 2)].data;
        BlockService.cache_1[0].state = "exc"
        break;
      case 2:
        BlockService.cache_2[0].direction = direction;
        BlockService.cache_2[0].data = BlockService.blocks_memory[parseInt(direction, 2)].data;
        BlockService.cache_2[0].state = "exc"
        break;
      case 3:
        BlockService.cache_3[0].direction = direction;
        BlockService.cache_3[0].data = BlockService.blocks_memory[parseInt(direction, 2)].data;
        BlockService.cache_3[0].state = "exc"
        break;
      default:
        break;
    }
  }

  public writeFromCache(from: number, slot: number, to: number): void {
    console.log("from cache");
    switch (to) {
      case 0:
        switch (from) {
          case 1:
            BlockService.cache_0[0].direction = BlockService.cache_1[slot].direction;
            BlockService.cache_0[0].data = BlockService.cache_1[slot].data;
            BlockService.cache_0[0].state = "sha";
            BlockService.cache_1[0].state = "sha";
            break;
          case 2:
            BlockService.cache_0[0].direction = BlockService.cache_2[slot].direction;
            BlockService.cache_0[0].data = BlockService.cache_2[slot].data;
            BlockService.cache_0[0].state = "sha";
            BlockService.cache_2[0].state = "sha";
            break;
          case 3:
            BlockService.cache_0[0].direction = BlockService.cache_3[slot].direction;
            BlockService.cache_0[0].data = BlockService.cache_3[slot].data;
            BlockService.cache_0[0].state = "sha";
            BlockService.cache_3[0].state = "sha";
            break;
          default:
            break;
        }
        break;
      case 1:
        switch (from) {
          case 0:
            BlockService.cache_1[0].direction = BlockService.cache_0[slot].direction;
            BlockService.cache_1[0].data = BlockService.cache_0[slot].data;
            BlockService.cache_1[0].state = "sha";
            BlockService.cache_0[0].state = "sha";
            break;
          case 2:
            BlockService.cache_1[0].direction = BlockService.cache_2[slot].direction;
            BlockService.cache_1[0].data = BlockService.cache_2[slot].data;
            BlockService.cache_1[0].state = "sha";
            BlockService.cache_2[0].state = "sha";
            break;
          case 3:
            BlockService.cache_1[0].direction = BlockService.cache_3[slot].direction;
            BlockService.cache_1[0].data = BlockService.cache_3[slot].data;
            BlockService.cache_1[0].state = "sha";
            BlockService.cache_3[0].state = "sha";
            break;
          default:
            break;
        }
        break;
      case 2:
        switch (from) {
          case 0:
            BlockService.cache_2[0].direction = BlockService.cache_0[slot].direction;
            BlockService.cache_2[0].data = BlockService.cache_0[slot].data;
            BlockService.cache_2[0].state = "sha";
            BlockService.cache_0[0].state = "sha";
            break;
          case 1:
            BlockService.cache_2[0].direction = BlockService.cache_1[slot].direction;
            BlockService.cache_2[0].data = BlockService.cache_1[slot].data;
            BlockService.cache_2[0].state = "sha";
            BlockService.cache_1[0].state = "sha";
            break;
          case 3:
            BlockService.cache_2[0].direction = BlockService.cache_3[slot].direction;
            BlockService.cache_2[0].data = BlockService.cache_3[slot].data;
            BlockService.cache_2[0].state = "sha";
            BlockService.cache_3[0].state = "sha";
            break;
          default:
            break;
        }
        break;
      case 3:
        switch (from) {
          case 0:
            BlockService.cache_3[0].direction = BlockService.cache_0[slot].direction;
            BlockService.cache_3[0].data = BlockService.cache_0[slot].data;
            BlockService.cache_3[0].state = "sha";
            BlockService.cache_0[0].state = "sha";
            break;
          case 1:
            BlockService.cache_3[0].direction = BlockService.cache_1[slot].direction;
            BlockService.cache_3[0].data = BlockService.cache_1[slot].data;
            BlockService.cache_3[0].state = "sha";
            BlockService.cache_1[0].state = "sha";
            break;
          case 2:
            BlockService.cache_3[0].direction = BlockService.cache_2[slot].direction;
            BlockService.cache_3[0].data = BlockService.cache_2[slot].data;
            BlockService.cache_3[0].state = "sha";
            BlockService.cache_2[0].state = "sha";
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

}
