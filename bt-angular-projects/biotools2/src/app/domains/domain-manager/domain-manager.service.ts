import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomainSummary } from '@bt/core/domain/domain.model';
import { Observable } from 'rxjs';


@Injectable()
export class DomainManagerService {
  private domainUrl = 'd'
  constructor(private httpClient: HttpClient) { }

  // need a model for this
  getDomainsSummary(): Observable<DomainSummary[]>{
    return this.httpClient.get<DomainSummary[]>(this.domainUrl);
  }

  // need to implement domain DELETE operation that looks at d/{domain}
  deleteDomain(domain: string){
    return this.httpClient.delete(`${this.domainUrl}/${domain}`);
  }

  //[Note]: Should there be a disown domain as well?
}
