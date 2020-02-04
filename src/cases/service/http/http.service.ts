import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  simulationPostCall(request: object): Observable<any> {
    return this.http.post<any>(`http://localhost:4000/posts`, request);
  }
}
