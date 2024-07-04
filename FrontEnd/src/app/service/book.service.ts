import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASIC_PATH=["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  CreateBook(book:any): Observable<any>
  {
    return this.http.post(BASIC_PATH+"/bo/add",book)
  }
  getBook(): Observable<any>
  {
    return this.http.get(BASIC_PATH+"/bo/all");
  }

  delBook(id:any):Observable<any>
  {
    return this.http.delete(BASIC_PATH+"/bo/del/{id}"+id);
  }
  getSingleBook(id:any):Observable<any>
  {
    return this.http.get(BASIC_PATH+"/bo/{id}"+id);
  }
  updateSingleBook(id:any,book:any):Observable<any>
  {
    return this.http.put(BASIC_PATH+"/bo/update/"+id,book);
  }

 

}
