import { Component, OnInit } from '@angular/core';
import { MemSlot } from 'src/app/models/mem-slot';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  private block_size: number = 16;
  private mem_size: number = 8;
  public slots: MemSlot[] = new Array<MemSlot>(this.mem_size);

  constructor() { }

  ngOnInit(): void {
    this.buildSlots();
  }

  /**
   * build the empty slots
   */
  private buildSlots(): void {
    var block_bus_size: number = Math.ceil(Math.log2(this.block_size))
    var data: string = "0".repeat(block_bus_size)

    var mem_bus_size: number = Math.ceil(Math.log2(this.mem_size))
    var bus: string = "0".repeat(mem_bus_size)

    var binary: string = "";
    var slicer: number = 0;

    for (let i = 0; i < this.mem_size; i++) {
      binary = i.toString(2);
      slicer = binary.length
      bus = bus.slice(0, -1 * slicer) + binary
      this.slots[i] = { direction: bus, data: data }
    }
  }

}
