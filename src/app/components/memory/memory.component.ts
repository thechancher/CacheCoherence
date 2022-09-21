import { Component, OnInit } from '@angular/core';
import { MemSlot } from 'src/app/models/mem-slot';
import { BlockService } from 'src/app/services/block.service';
import { MemoryService } from 'src/app/services/memory.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  public blocks!: MemSlot[];

  constructor(public memoryService: MemoryService) {
    this.blocks = BlockService.blocks_memory;
  }

  ngOnInit(): void { }

}
