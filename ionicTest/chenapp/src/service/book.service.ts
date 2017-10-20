import {Injectable} from '@angular/core'
import {HttpClient,HttpParams,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class BookService {
  url:string="http://101.132.127.138:3000/books"
  constructor(
    private http:HttpClient,
  ){}

  getAllBooks():Promise<any>{
    let params = new HttpParams().set('myParam' , 'myValue');
    return this.http.post(this.url+'/mmostcombooks',{params:params}).toPromise().then((data) =>data)
  }

  getBookById(id):Promise<any>{
    return this.getAllBooks().then(data=>{
        for(let item of data){
          if(item.book_id===id){
            return item
          }
        }
      })
    //return this.http.post(this.url+'/alltopics',{topic_id:id}).toPromise().then((data) =>data)
  }



}
