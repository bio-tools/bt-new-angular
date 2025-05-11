import { Injectable } from '@angular/core';
import { ToolEditData } from '@bt-core/tool/tool.model';
import { User } from '@bt-core/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ToolEditRightsService {

  constructor() { }

  public canEditTool(toolEditData: ToolEditData, user: User): boolean{
    if (user.is_superuser) return true;
    if (toolEditData.type === 'public') return true;
    if (toolEditData.owner === user.username) return true;
    if (toolEditData.authors.includes(user.username)) return true;
    return false;
  }
}
