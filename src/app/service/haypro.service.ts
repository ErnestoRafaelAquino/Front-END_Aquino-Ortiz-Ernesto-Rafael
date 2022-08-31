import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Haypro } from '../model/haypro';

@Injectable({
  providedIn: 'root'
})
export class HayproService {
  URL = 'https://bkdernestgoitar.herokuapp.com/haypro/'

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Haypro[]>{
    return this.httpClient.get<Haypro[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Haypro>{
    return this.httpClient.get<Haypro>(this.URL + `detail/${id}`);
  }

  public save(haypro: Haypro): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', haypro);
  }

  public update(id: number, haypro: Haypro): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, haypro);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
