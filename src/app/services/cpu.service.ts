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
      { operation: "ope_0", direction: "dir", data: "dat" },
      { operation: "ope_0", direction: "dir", data: "dat" },
      { operation: "ope_0", direction: "dir", data: "dat" },
      { operation: "ope_0", direction: "dir", data: "dat" }
    ];
    BlockService.cpu_1 = [
      { operation: "ope_1", direction: "dir", data: "dat" },
      { operation: "ope_1", direction: "dir", data: "dat" },
      { operation: "ope_1", direction: "dir", data: "dat" },
      { operation: "ope_1", direction: "dir", data: "dat" }
    ];
    BlockService.cpu_2 = [
      { operation: "ope_2", direction: "dir", data: "dat" },
      { operation: "ope_2", direction: "dir", data: "dat" },
      { operation: "ope_2", direction: "dir", data: "dat" },
      { operation: "ope_2", direction: "dir", data: "dat" }
    ];
    BlockService.cpu_3 = [
      { operation: "ope_3", direction: "dir", data: "dat" },
      { operation: "ope_3", direction: "dir", data: "dat" },
      { operation: "ope_3", direction: "dir", data: "dat" },
      { operation: "ope_3", direction: "dir", data: "dat" }
    ];
  }

}
