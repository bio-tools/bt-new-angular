import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveEmptyService {
  /*
  Removes null, undefined, {}, [], "" from objects and arrays
  */
 // Maybe this should be a function and a bigger UtilsService or something , but perhaps it's better like this to keep things small
  constructor() { }

  private isObj(o: any) {
    return (o && typeof o === 'object' && !Array.isArray(o) && Object.keys(o).length !== 0);
  }

  private isEmptyObjectOrArray(oa: any) {
    return (
      oa === undefined ||
      oa === null || oa === '' ||
      (Array.isArray(oa) && oa.length === 0) ||
      (typeof oa === 'object' && !Array.isArray(oa) && Object.keys(oa).length === 0)
    );
  }

  // is array with stuff inside
  private isArray(a: any) {
    return Array.isArray(a) && a.length > 0;
  }

  removeEmpty(obj: any) {
    Object.keys(obj).forEach(key => {
      if (this.isObj(obj[key])) {
        this.removeEmpty(obj[key]);
        if (this.isEmptyObjectOrArray(obj[key])) {
          delete obj[key];
        }
      } else if (this.isEmptyObjectOrArray(obj[key])) {
        delete obj[key];
      } else if (this.isArray(obj[key])) {
        let i = 0;
        let N = obj[key].length;
        while (i < N) {
          this.removeEmpty(obj[key]);
          if (this.isEmptyObjectOrArray(obj[key][i])) {
            obj[key].splice(i, 1);
            N--;
          } else {
            i++;
          }
        }
        if (this.isEmptyObjectOrArray(obj[key])) {
          delete obj[key];
        }
      }
    });
    return obj;
  }
}
