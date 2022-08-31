import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Baner } from '../model/baner';

@Injectable({
  providedIn: 'root'
})
export class BanerService {
  URL = 'https://bkdernestgoitar.herokuapp.com/baner/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Baner[]>{
    return this.httpClient.get<Baner[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Baner>{
    return this.httpClient.get<Baner>(this.URL + `detail/${id}`);
  }

  public save(baner: Baner): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', baner);
  }

  public update(id: number, baner: Baner): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, baner);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
