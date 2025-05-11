// maybe we should use enums where we have lists of values 
// e.g. tool types that only have specific values
// and are not freehand typed string

interface Credit {
    name?: string | null,
    email? : string | null,
    url?: string | null,
    orcidid?: string | null,
    gridid?: string | null,
    rorid?: string | null,
    fundrefid?: string | null,
    typeEntity?: string | null,
    typeRole?: string[],
    note?: string | null
}

interface LinkOrDoc {
    url: string,
    type: string[],
    note?: string | null
}

interface Download {
    url: string,
    type: string,
    version?: string | null,
    note?: string | null
}

interface EdamConcept {
    uri: string,
    term?: string
}

interface ToolIO {
    data: EdamConcept,
    format?: EdamConcept[]
}

interface Function {
    operation: EdamConcept[],
    input?: ToolIO[],
    output?: ToolIO[],
    note?: string | null,
    cmd?: string | null
}

interface PublicationMetadata {
    title?: string | null,
    abstract?: string | null,
    date?: string | null,
    citationCount?: number | null,
    authors?: {
        name?: string
    }[],
    journal?: string | null

}

interface Publication {
    doi?: string | null,
    pmid? : string | null,
    pmcid?: string | null,
    type?: string[],
    version?: string | null,
    note?: string | null,
    metadata?: PublicationMetadata | null
}

interface Community {
    biolib?: {
        app_name: string | null,
        author_name: string | null,
        author_username: string | null
    }
}

interface EditPermission {
    type: string,
    authors: string[]
}

export interface Tool {
    name: string,
    description: string,
    homepage: string,
    biotoolsID: string,
    biotoolsCURIE?: string,
    version?: string[],
    otherID?: {
        value: string,
        type?: string,
        version?: string
    }[],
    relation?: {
        biotoolsID: string,
        type: string
    }[],
    function?: Function[],
    toolType?: string[],
    topic?: EdamConcept[],
    operatingSystem?: string[],
    language?: string[],
    license?: string | null,
    collectionID?: string[],
    maturity?: string[],
    cost?: string | null,
    accessibility?: string | null,
    elixirPlatform?: string[],
    elixirNode?: string[],
    elixirCommunity?: string[],
    link?: LinkOrDoc[],
    download?: Download[],
    documentation?: LinkOrDoc[],
    publication?: Publication[],
    credit?: Credit[],
    community?: Community,
    owner?: string,
    additionDate?: string,
    lastUpdate?: string,
    editPermission?: EditPermission,
    validated?: number,
    homepage_status?: number,
    elixir_badge?: number,
    confidence_flag?: string | null
}

export class ToolEditData {
    public authors: string[] = [];
    constructor(public owner: string, public type: string, authors: string[]){
        if (authors) this.authors = authors;
    }
}