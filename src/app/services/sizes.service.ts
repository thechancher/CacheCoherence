import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  public static CPUs: number = 4;
  public period: number = 2000;

  public static instructions_history: number = 4;
  public cache_size: number = 4;
  public mem_sizes: number = 8;

  public data_size: number = 16;
  // public data_max: number = 2 ** this.data_size - 1;
  public data_max: number = 4;

  public static lastOperation: number = SizesService.instructions_history - 1;

  constructor() { }

  public getRandom(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
