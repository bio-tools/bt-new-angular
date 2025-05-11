import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domain, DomainData } from '@bt/core/domain/domain.model';
import { Observable } from 'rxjs';

@Injectable()
export class DomainEditService {
  private domainRoot = 'd/';
  constructor(private httpClient: HttpClient) { }

  //[Note]: does it make sense to have 2 services , this and NewDomainService or should there be just one?
  getDomain(domain: string): Observable<DomainData>{
    return this.httpClient.get<DomainData>(this.domainRoot + domain.toLowerCase());
  }

  updateDomain(domain: string, domainContent: any){
    return this.httpClient.put<Domain>(this.domainRoot + domain.toLowerCase(), domainContent);
  }

  // [Note]: should we have a DELETE method here as well? It wasn't there in the past, and it is already part of the domain-manager service
  deleteDomain(domain: string){
    return this.httpClient.delete(this.domainRoot + domain.toLowerCase());
  }
}
