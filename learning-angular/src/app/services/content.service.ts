import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';

import {Observable} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };
  constructor(private http: HttpClient) { }
  getContent(): Observable<Content[]>{
    return this.http.get<Content[]>('api/content');
  }
  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }
  updateContent(content: Content): Observable<any>{
    return this.http.put<Content>('api/content', content, this.httpOptions);
  }
}
