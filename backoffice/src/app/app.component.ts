import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChatService } from './services/chat.service';

@Component({
  selector: 'halp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  connectionStatus: string;

  constructor(private chatService: ChatService) {
    // https://web.archive.org/web/20170629045142/http://horizon.io:80/api/horizon/#status
    this.connectionStatus = 'unconnected';
  }

  ngOnInit() {
    this.chatService.connect();
    this.chatService.connectionStatus.subscribe(status => this.connectionStatus = status);
  }
}
