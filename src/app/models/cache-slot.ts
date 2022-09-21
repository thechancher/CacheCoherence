export interface CacheSlot {
    slot: number,
    state: string,
    direction: string,
    data: string
}

export interface Cache_data {
    cache: number,
    blocks: CacheSlot[]
}