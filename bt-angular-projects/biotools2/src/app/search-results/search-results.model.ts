import { Tool } from "@bt/core/tool/tool.model";

export interface SearchResults {
    count: number;
    previous: string | null;
    next: string | null;
    list: Tool[];
}