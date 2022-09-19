import { Component, OnInit } from '@angular/core';
import { MemSlot } from 'src/app/models/mem-slot';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  public slots: MemSlot[] = new Array<MemSlot>(this.clockService.mem_size);

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

    var binary: string = "";
    var slicer: number = 0;

    for (let i = 0; i < this.clockService.mem_size; i++) {
      binary = i.toString(2);
      slicer = binary.length
      mem_bus = mem_bus.slice(0, -1 * slicer) + binary
      this.slots[i] = { direction: mem_bus, data: data }
    }
  }

}
