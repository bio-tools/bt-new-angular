import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tool } from '@bt/core/tool/tool.model';

@Injectable({
   providedIn: 'root'
})
export class ToolService {

  constructor(private httpClient: HttpClient) {}
  
  getTool(biotoolsID: string): Observable<Tool> {
    return this.httpClient.get<Tool>(biotoolsID);
  }
}
