import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsedTerms } from 'src/app/core/models/used-terms.model';
import {GLOBALS} from 'src/app/core/globals';

@Injectable()
export class UsedTermsService {
    constructor(private httpClient: HttpClient) {}
    formatKey = 'format';
    formatValue = 'json';

    private appendFormat(p: HttpParams) {
        if (!p.get(this.formatKey)) {
            return p.append(this.formatKey, this.formatValue);
        }
        return p;
    }

    getAllUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/all', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getTopicUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/topic', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getOperationUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/operation', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getInputUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/input', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getOuputUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/output', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getToolTypeUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/toolType', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getLanguageUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/language', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getAccessibilityUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/accessibility', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getCostUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/cost', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getLicenseUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/license', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getCreditUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/credit', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getCollectionUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/collectionID', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

    getNameUsedTerms(p: HttpParams) {
        p = this.appendFormat(p);
        return this.httpClient.get<UsedTerms>(GLOBALS.BASE_API_URL + 'used-terms/name', {params: p}).pipe(map(
            (usedTerms: UsedTerms) => {
                return usedTerms.data;
            }
        ));
    }

}

