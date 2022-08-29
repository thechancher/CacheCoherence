export interface Operation {
    operation: string,
    direction: string,
    data: string
}

export var operations: Operation[] = [
    { operation: "calc", data: "", direction: "" },
    { operation: "read", data: "xyz", direction: "1111" },
    { operation: "write", data: "abc", direction: "0000" }
];
