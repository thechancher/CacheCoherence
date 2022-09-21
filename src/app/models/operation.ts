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
    { operation: "calc", direction: "100", data: "abcd" },
    { operation: "read", direction: "100", data: "abcd" },
    { operation: "write", direction: "100", data: "abcd" }
];
