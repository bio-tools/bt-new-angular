import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tool } from '@bt/core/tool/tool.model';
import { Observable } from 'rxjs';

@Injectable()
export class ToolEditService {

  constructor(private httpClient: HttpClient) {}

  validateCreateTool(toolContent: Tool): Observable<Tool>{
    return this.httpClient.post<Tool>('t/validate/', toolContent);
  }
  
  createTool(toolContent: Tool): Observable<Tool>{
    return this.httpClient.post<Tool>('t', toolContent);
  }

  validateUpdateTool(biotoolsID: string, toolContent: Tool): Observable<Tool>{
    return this.httpClient.put<Tool>(`t/${biotoolsID}/validate/`, toolContent);
  }

  updateTool(biotoolsID: string, toolContent: Tool): Observable<Tool>{
    return this.httpClient.put<Tool>(`t/${biotoolsID}`, toolContent);
  }

  deleteTool(biotoolsID: string){
    return this.httpClient.delete(`t/${biotoolsID}`);
  }
}
