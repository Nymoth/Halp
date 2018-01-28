import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChatService } from '../../services/chat.service';
import { Session } from '../../models/session';

@Component({
  selector: 'halp-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  sessions: Session[];

  constructor(private chatService: ChatService) {
    this.sessions = [];
  }

  ngOnInit() {
    this.chatService.messages.subscribe(messages => {
      const sessions = [];
      const sessionsMap = {};
      messages.forEach(message => {
        if (!sessionsMap.hasOwnProperty(message.sessionId)) {
          const index = sessions.length;
          sessionsMap[message.sessionId] = index;
          sessions[index] = { sessionId: message.sessionId, messages: [{ ...message }] };
        } else {
          const index = sessionsMap[message.sessionId];
          sessions[index].messages.push({ ...message });
        }
      });
      this.sessions = sessions;
    });
  }

  trackById(session: Session): string {
    return session.sessionId;
  }

  sendMessage({ sessionId, text }): void {
    this.chatService.sendMessage(sessionId, text);
  }

}
