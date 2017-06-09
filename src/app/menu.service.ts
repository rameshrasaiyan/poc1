import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MenuService {

  constructor(private http:Http) { }

  getMenus(): Observable<any> {
  return this.http.get('assets/menu.json')
  .map((res:Response) => res.json())
  .catch((error:any) => Observable.throw(console.log("This is an error")))
  }
}
