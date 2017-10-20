import {Injectable} from '@angular/core'
import {HttpClient,HttpParams,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'
import {Storage} from "@ionic/storage";

@Injectable()
export class UserService {
  url:string="http://101.132.127.138:3000/users"
  constructor(
    private http:HttpClient,
    private storage: Storage,
  ){}

  login(user):Promise<any>{
    return this.http.post(this.url+'/login',user).toPromise().then((data) =>{
      return data
    })
  }
  getAllUsers():Promise<any>{
    return this.storage.ready().then(()=>{
     return  this.storage.get('token').then(val=>{
       let _head=new HttpHeaders({'token':val})
        this.http.post(this.url+'/getAllUsers',{headers:_head}).toPromise().then((data) =>data)
      })

    })

  }


}
