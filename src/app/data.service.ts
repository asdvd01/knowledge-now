import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) {
    
   // client.setRequestHeader('Access-Control-Allow-Origin', '*');
    //client.setRequestHeader('Access-Control-Allow-Methods', 'POST, PUT');           
  }
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin' + ':' + '9235785668#Ac'),
      'Accept': 'application/json'
    })
  };
   getUsers(){
     return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
   getUser(userId){
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
   }
   getPosts(){
     return this.http.get('https://ashutoshdwivedi.service-now.com/api/now/table/kb_knowledge',this.httpOptions);
    }
   search(searchText){
    
    var requestBody = {
      query:{
          freetext:searchText
      },
      meta:{
          window:{  
              start:"0.0",
              end:"100.0"
          }
      },
      //context:"69a05b3853001300a9a2664906dc343f",
      id:""
      };
     return this.http.post('https://ashutoshdwivedi.service-now.com/api/now/cxs/search',JSON.stringify(requestBody),this.httpOptions)
    
   }
}
