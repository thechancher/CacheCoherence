import { Injectable } from '@angular/core';
import { MemSlot } from '../models/mem-slot';
import { BlockService } from './block.service';
import { ClockService } from './clock.service';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(public clockServices: ClockService) {
    this.buildSlots();
  }

  /**
    * build the empty slots
    */
  private buildSlots(): void {
    var data_bus_size: number = Math.ceil(Math.log2(16))
    var data: string = "0".repeat(data_bus_size)

    var direction_size: number = Math.ceil(Math.log2(8))
    var direction: string = "0".repeat(direction_size)

    var binary: string = "";
    var slicer: number = 0;

    var blocks: MemSlot[] = [];

    for (let i = 0; i < this.clockServices.mem_sizes; i++) {
      binary = i.toString(2);
      slicer = binary.length
      direction = direction.slice(0, -1 * slicer) + binary
      blocks.push({ slot: i, direction: direction, data: data })
    }
    BlockService.blocks_memory = blocks
  }

}
