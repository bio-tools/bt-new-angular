import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domain } from '@bt/core/domain/domain.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class NewDomainService {
  // Creates a new domain
  constructor(private httpClient: HttpClient) { }

  //does it make sense to have 2 services , this and DomainEditService or should there be just one?

  createDomain(domain: Domain): Observable<Domain>{
    return this.httpClient.post<Domain>('d', domain);
  }
}
