import { Component, Input, OnInit } from '@angular/core';
import { CacheSlot } from 'src/app/models/cache-slot';
import { BlockService } from 'src/app/services/block.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent implements OnInit {

  @Input() CPU!: number; // CPU id

  public blocks!: CacheSlot[];

  constructor(public cacheService: CacheService) { }

  ngOnInit(): void {
    // console.log("this CPU: " + this.CPU);
    switch (this.CPU) {
      case 0:
        this.blocks = BlockService.cache_0
        break;
      case 1:
        this.blocks = BlockService.cache_1
        break;
      case 2:
        this.blocks = BlockService.cache_2
        break;
      case 3:
        this.blocks = BlockService.cache_3
        break;
      default:
        break;
    }
  }

  // /**
  //    * build the empty slots
  //    */
  // private buildSlots(): void {
  //   var data_bus_size: number = Math.ceil(Math.log2(this.clockService.data_size))
  //   var data: string = "0".repeat(data_bus_size)

  //   var mem_bus_size: number = Math.ceil(Math.log2(this.clockService.mem_size))
  //   var mem_bus: string = "0".repeat(mem_bus_size)

  //   // var binary: string = "";
  //   var slicer: number = 0;

  //   for (let i = 0; i < this.clockService.cache_size; i++) {
  //     // binary = i.toString(2);
  //     // slicer = binary.length
  //     // bus = bus.slice(0, -1 * slicer) + binary
  //     this.slots[i] = { slot: i, state: "", direction: mem_bus, data: data }
  //   }
  // }

}
