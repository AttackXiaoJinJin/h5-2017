import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class PositionsService {

  // url:string='http://106.14.213.216:8080/positions';
  url:string='http://101.132.127.138:3000/books';
  constructor(
    private http:HttpClient,
  ) {

  }

  getallbooks():Promise<any>{

    let params = new HttpParams().set('myParam', 'myValue');
    return this.http.post(this.url+'/allbooks',{params:params}).toPromise().then((data)=> data
    )

  }
  getbookdetailById(id):Promise<any>{
      return this.getallbooks().then(data=>{
        for(let item of data){
          if(item.id===id){
            return item;
          }
        }
      })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || 'error');
  }
}
