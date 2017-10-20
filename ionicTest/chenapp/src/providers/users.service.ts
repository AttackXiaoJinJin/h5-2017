import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  url:string='http://101.132.127.138:3000/users';
  constructor(
    private http:HttpClient,
    private storage:Storage
  ) {

  }

  login(user):Promise<any>{
    return this.http.post(this.url+'/login',user).toPromise().then((data)=> data
    )
  }

  getAllUsers():Promise<any>{
    return this.storage.ready().then(()=>{
      return this.storage.get('token').then(val=>{
        let _head=new HttpHeaders({"token":val});
          return this.http.get(this.url+'/getAllUsers',{headers:_head}).toPromise().then(data=>{
           return data;
         });
      });

    });



    //
    // let param=new HttpParams().set('id','0011111');
    //
    //
    //
    // this.http.get(this.url+'/getAllUsers',{headers:_head,params:param}).subscribe(
    //   function (result) {
    //     console.log('>>>>>>>>>>>>>>>>>>>>');
    //     console.log(result);
    //   },
    //   function (error) {
    //     console.log(error.message);
    //   }
    //
    // )

  }

}
