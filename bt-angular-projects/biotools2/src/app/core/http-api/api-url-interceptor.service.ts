import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import {GLOBALS} from '@bt-core/globals';
import { Observable } from "rxjs";

export class ApiUrlInterceptorService implements HttpInterceptor {
  
  // Need to make sure we only intercept requests going to bio.tools API
  // perhaps in the future we might have requests that go to a different website API
  // these other requests don't need an API URL prefix and probably not format json params
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (!req.url.toLowerCase().startsWith('http://') && !req.url.toLowerCase().startsWith('https://')){
        const newUrl = GLOBALS.DEV_BASE_API_URL + req.url;
        let newParams: HttpParams = req.params;
        if (!newParams){
          newParams = new HttpParams();
        }
        if (!newParams.get(GLOBALS.formatKey)){
          newParams = newParams.set(GLOBALS.formatKey, GLOBALS.formatValue);
        }
        const newReq = req.clone({url: newUrl, params: newParams});
        return next.handle(newReq);
      }
      // request outside of bio.tools
      return next.handle(req);
  }
  constructor() { }
}
