import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';
import { Cache } from 'src/app/models/cache';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent implements OnInit {

  public slots: Cache[] = new Array<Cache>(this.clockService.cache_size);

  constructor(public clockService: ClockService) { }

  ngOnInit(): void {
    this.buildSlots();
  }

  /**
     * build the empty slots
     */
  private buildSlots(): void {
    var data_bus_size: number = Math.ceil(Math.log2(this.clockService.data_size))
    var data: string = "0".repeat(data_bus_size)

    var mem_bus_size: number = Math.ceil(Math.log2(this.clockService.mem_size))
    var mem_bus: string = "0".repeat(mem_bus_size)

    // var binary: string = "";
    var slicer: number = 0;

    for (let i = 0; i < this.clockService.cache_size; i++) {
      // binary = i.toString(2);
      // slicer = binary.length
      // bus = bus.slice(0, -1 * slicer) + binary
      this.slots[i] = { slot: i, state: "", direction: mem_bus, data: data }
    }
  }

}
