export class SearchToolsParams {
    page?: number = null;
    sort?: string = null;
    ord?: string = null;
    q?: string = null;
    topic?: string = null;
    operation?: string = null;
    input?: string = null;
    output?: string = null;
    toolType?: string = null;
    language?: string = null;
    accessibility?: string = null;
    cost?: string = null;
    license?: string = null;
    credit?: string = null;
    collectionID?: string = null;
    name?: string = null;
    biotoolsID?: string = null;
    homepage?: string = null;
    description?: string = null;
    version?: string = null;
    topicID?: string = null;
    function?: string = null;
    operationID?: string = null;
    dataType?: string = null;
    dataTypeID?: string = null;
    dataFormat?: string = null;
    dataFormatID?: string = null;
    inputID?: string = null;
    inputDataType?: string = null;
    inputDataTypeID?: string = null;
    inputDataFormat?: string = null;
    inputDataFormatID?: string = null;
    outputID?: string = null;
    outputDataType?: string = null;
    outputDataTypeID?: string = null;
    outputDataFormat?: string = null;
    outputDataFormatID?: string = null;
    maturity?: string = null;
    operatingSystem?: string = null;
    creditName?: string = null;
    creditTypeRole?: string = null;
    creditTypeEntity?: string = null;
    creditOrcidID?: string = null;
    publication?: string = null;
    publicationID?: string = null;
    publicationType?: string = null;
    publicationVersion?: string = null;
    link?: string = null;
    linkType?: string = null;
    documentation?: string = null;
    documentationType?: string = null;
    download?: string = null;
    downloadType?: string = null;
    downloadVersion?: string = null;
    otherID?: string = null;
    otherIDValue?: string = null;
    otherIDType?: string = null;
    otherIDVersion?: string = null;

    private hasValue(v: string | number) {
        return v !== undefined && v !== null && v !== 0 && v !== '';
    }

    public setPage(p: number) {
        this.page = p;
    }

    public getPage() {
        return this.page;
    }

    public hasPage(): boolean {
        return this.hasValue(this.page);
    }

    public setQ(q: string) {
        this.q = q;
    }

    public getQ() {
        return this.q;
    }

    public hasQ() {
        return this.hasValue(this.q);
    }

    public setSort(s: string) {
        this.sort = s;
    }

    public getSort() {
        return this.sort;
    }

    public hasSort() {
        return this.hasValue(this.sort);
    }

    public setOrd(o: string) {
        this.ord = o;
    }

    public getOrd() {
        return this.ord;
    }

    public hasOrd() {
        return this.hasValue(this.ord);
    }


    public hasParam(p: string): boolean {
        return Object.keys(this).includes(p);
    }


    public hasTagParam(p: string): boolean {
        if (p !== 'page' && p !== 'sort' && p !== 'ord') {
            return this.hasParam(p);
        }
        return false;
    }

    public hasNamedTagParam(p: string): boolean {
        if (p !== 'q') {
            return this.hasTagParam(p);
        }
        return false;
    }
}
