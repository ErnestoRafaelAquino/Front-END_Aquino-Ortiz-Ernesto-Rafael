import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hayca } from '../model/hayca';

@Injectable({
  providedIn: 'root'
})
export class HaycaService {
  URL = 'https://bkdernestgoitar.herokuapp.com/hayca';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hayca[]> {
    return this.httpClient.get<Hayca[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Hayca>{
    return this.httpClient.get<Hayca>(this.URL + `/detail/${id}`);
  }

  public save(hayca:Hayca): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', hayca);
  }

  public update(id: number, hayca:Hayca): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, hayca);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
