import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hayki } from '../model/hayki';

@Injectable({
  providedIn: 'root'
})
export class HaykiService {
  URL = 'https://bkdernestgoitar.herokuapp.com/hayki/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Hayki[]>{
    return this.httpClient.get<Hayki[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Hayki>{
    return this.httpClient.get<Hayki>(this.URL + `detail/${id}`);
  }

  public save(hayki: Hayki): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', hayki);
  }

  public update(id: number, hayki: Hayki): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, hayki);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
