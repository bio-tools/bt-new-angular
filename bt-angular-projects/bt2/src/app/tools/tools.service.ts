import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tools } from './tools.model';
import { GLOBALS } from 'src/app/core/globals';

@Injectable()
export class ToolsService {
    constructor(private httpClient: HttpClient) { }

    private createQueryStringParams(searchOptions): HttpParams   {
        let params = new HttpParams().set('format', 'json');

        Object.keys(searchOptions).forEach(key => {
            const value = searchOptions[key];
            params = params.append(key, value);
        });
        return params;
    }


    getTools(searchOptions: any) {
        return this.httpClient.get<Tools>(GLOBALS.BASE_API_URL + 't', {
            observe: 'body',
            params: this.createQueryStringParams(searchOptions)
        });
    }

}
