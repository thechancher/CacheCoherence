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
  public data_max: number = 2 ** this.data_size;
  // public data_max: number = 4;

  public static lastOperation: number = SizesService.instructions_history - 1;

  constructor() { }

  private generateRandom(k_total: number): number {
    var total = 0;
    var lambda = 5;  // Prom number of error expected in a given time (Lambda symbol)

    for (var i = 0; i < k_total; i++) {
      total += this.poisson(i, lambda);
    }
    console.log(total);

    return total
  }

  private poisson(k: number, lambda: number): number {
    var lambda = 8;  // Prom number of error expected in a given time (Lambda symbol)
    var exponential = 2.718281828;
    var numerator, denominator;

    const exponentialPower = Math.pow(exponential, -lambda); // negative power k
    const lambdaPowerK = Math.pow(lambda, k); // Lambda elevated k
    numerator = exponentialPower * lambdaPowerK;
    denominator = this.factorial(k); // factorial of k.

    return (numerator / denominator);
  }

  private factorial(num: number): number {
    if (num == 0) return 1
    else return num * this.factorial(num - 1)
  }

  public getRandom(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
