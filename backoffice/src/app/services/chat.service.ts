import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as Horizon from '@horizon/client';
import * as uuid from 'uuid/v1';
import 'rxjs/add/operator/startWith';

import { Message } from '../models/message';

@Injectable()
export class ChatService {

  private horizon: any;
  private messagesCol: any;
  private messagesBase: Message[];
  private messagesSubject: Subject<Message[]>;

  constructor() {
    this.horizon = Horizon({ host: 'localhost:8181', authType: 'unauthenticated' });
    this.messagesCol = this.horizon('messages');
    this.messagesBase = [];
    this.messagesSubject = new Subject<Message[]>();
  }

  connect(): void {
    this.horizon.onReady().subscribe(() => {
      this.messagesCol
        // .findAll()
        .order('datetime', 'ascending')
        .watch()
        .subscribe(data => {
          this.messagesBase = data;
          this.messagesSubject.next(this.messagesBase);
        });
    });

    this.horizon.connect();
  }

  get messages(): Observable<Message[]> {
    return this.messagesSubject
      .asObservable()
      .startWith(this.messagesBase);
  }

  get connectionStatus(): Observable<string> {
    return this.horizon.status()
      .map(res => res.type);
  }

  sendMessage(sessionId: string, text: string): Observable<any> {
    return this.messagesCol
      .store({
        id: uuid(),
        sessionId,
        by: '__cs',
        text,
        datetime: new Date()
      });
  }

}
