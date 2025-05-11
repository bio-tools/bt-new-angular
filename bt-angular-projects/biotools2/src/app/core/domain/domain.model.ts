export interface DomainSummary  {
    name: string,
    resourcesCount: number
}

export interface Domain {
    domain: string;
    title?: string,
    sub_title?: string,
    description?: string,
    is_private?: boolean,
    tag?: string[],
    collection?: string[],
    resources? : {
        name: string,
        biotoolsID: string
    }[]
}

export interface DomainListData {
    count: number,
    data: Domain[]
}

export interface DomainData{
    count: number;
    data: Domain;
}