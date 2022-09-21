import { Injectable } from '@angular/core';
import { BlockService } from './block.service';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  constructor(public blockService: BlockService) {
    this.buildOperations();
  }

  private buildOperations(): void {
    // var instructions = SizesService.instructions_history
    // var operations: Operation[] = []
    // for (let i = 0; i < instructions; i++) {
    //   operations.push({ operation: "ope" + i, direction: "dir", data: "dat" })
    // }

    BlockService.cpu_0 = [
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" }
    ];
    BlockService.cpu_1 = [
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" }
    ];
    BlockService.cpu_2 = [
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" }
    ];
    BlockService.cpu_3 = [
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" },
      { operation: ".", direction: "000", data: "0000" }
    ];
  }

}
