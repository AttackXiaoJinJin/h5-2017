import {Injectable} from '@angular/core'
import {HttpClient,HttpParams,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TopicService {
  url:string="http://101.132.127.138:3000/topic"
  constructor(
    private http:HttpClient,
  ){}

  getAllTopics():Promise<any>{
    let params = new HttpParams().set('myParam' , 'myValue');
    return this.http.post(this.url+'/alltopics',{params:params}).toPromise().then((data) =>data)
  }

  getTopicById(id):Promise<any>{
    return this.getAllTopics().then(data=>{
        for(let item of data){
          if(item.topic_id===id){
            return item
          }
        }
      })
    //return this.http.post(this.url+'/alltopics',{topic_id:id}).toPromise().then((data) =>data)
  }



}
