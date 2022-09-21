import { Injectable } from '@angular/core';
import { CacheSlot, Cache_data } from '../models/cache-slot';
import { MemSlot } from '../models/mem-slot';
import { Operation } from '../models/operation';
import { SizesService } from './sizes.service';

@Injectable({
  providedIn: 'root'
})
export class BlockService extends SizesService {

  // public cpu_data!: CPU_data[];
  public static cpu_0: Operation[];
  public static cpu_1: Operation[];
  public static cpu_2: Operation[];
  public static cpu_3: Operation[];

  // public blocks_cache: Cache_data[] = [];
  public static cache_0: CacheSlot[];
  public static cache_1: CacheSlot[];
  public static cache_2: CacheSlot[];
  public static cache_3: CacheSlot[];

  public static blocks_memory: MemSlot[];

  constructor() {
    super()
  }
}
