import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Message } from '../../models/message';
import { Session } from '../../models/session';

@Component({
  selector: 'halp-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @Input() session: Session;

  @Output() sendMessage: EventEmitter<{ sessionId: string, text: string }>;

  input: string;
  open: boolean;

  constructor() {
    this.sendMessage = new EventEmitter<{ sessionId: string, text: string }>();
    this.input = '';
    this.open = false;
  }

  trackById(message: Message): string {
    return message.id;
  }

  toggleChat(): void {
    this.open = !this.open;
  }

  submit(evt: Event): void {
    evt.preventDefault();

    this.sendMessage.emit({ sessionId: this.session.sessionId, text: this.input });
    this.input = '';
  }

}
