export interface Operation {
    operation: string,
    direction: string,
    data: string
}

export var operations: Operation[] = [
    { operation: "calc", data: "", direction: "" },
    { operation: "read", data: "wxyz", direction: "1111" },
    { operation: "write", data: "abcd", direction: "0000" }
];
