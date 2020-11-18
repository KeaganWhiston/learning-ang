import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/ContentDB';
import {Observable, of} from 'rxjs';
import {MessageService} from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }
  getContent(): Content[]{ // synchronous
    return CONTENTLIST;
  }
  getContentObs(): Observable<Content[]>{ // asynchronous
    this.messageService.add('Content Retrieved');
    return of(CONTENTLIST);
  }
}
