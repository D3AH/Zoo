import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AnimalRestService {
  endpoint = 'http://localhost:3789/v1/animal';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    return res || [ ] || { };
  }

  findAll(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
      map(this.extractData)
    );
  }

  add(animal): Observable<any> {
    const params = JSON.stringify(animal);
    return this.http.post(this.endpoint, params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
