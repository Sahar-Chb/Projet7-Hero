import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url = 'http://127.0.0.1:3005/hero/';

  constructor( private http:HttpClient) { }



  ajout( h: any ) {
    
    let response = this.http.post(this.url + 'add', h);
    return response;
    
  }

  all() {
    let response = this.http.get(this.url + 'all');
    return response;
  }

  delete(id: any) {
    return this.http.delete(this.url + 'delete/' + id);    
  }

  getById(id: any) {
    return this.http.get(this.url + 'getbyid/' + id);
  }

  update(id: any, hero: any) {
    
    return this.http.put(this.url+'update/'+id , hero)
    
  }

  
}
