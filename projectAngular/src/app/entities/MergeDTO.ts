export enum OperationM {
    MAX = "MAX",
    AVG = "AVG",
    COEFS = "COEFS"
}

// Interface for MergeDTO
export interface MergeDTO {
    id: number;
    title: string;
    operation: OperationM;
    iDSessions: number[];
    coefSessions: number[];
}
