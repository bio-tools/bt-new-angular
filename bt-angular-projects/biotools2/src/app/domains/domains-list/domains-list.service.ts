import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomainListData } from '@bt/core/domain/domain.model';
import { Observable } from 'rxjs';


@Injectable()
export class DomainsListService {
  private domainsUrl = 'd/all';

  constructor(private httpClient: HttpClient) { }

  // we may need a model also
  getAllDomains(): Observable<DomainListData> {
    return this.httpClient.get<DomainListData>(this.domainsUrl);
  }
}
