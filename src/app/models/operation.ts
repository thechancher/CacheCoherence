export interface Operation {
    operation: string,
    // direction_number: number,
    direction: string,
    data: string
}

// export interface CPU_data {
//     CPU: number,
//     operations: Operation[]
// }

export var operationx: Operation[] = [
    { operation: "calc", data: "", direction: "" },
    { operation: "read", data: "wxyz", direction: "666" },
    { operation: "write", data: "mnop", direction: "999" }
];
