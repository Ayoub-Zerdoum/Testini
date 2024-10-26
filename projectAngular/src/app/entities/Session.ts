import { Result } from "./Result";

export interface Session {
    id: number;
    title: string;
    results: Result[];
}