import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  message: string = "";
  //messages: string[] = [];
  add(message: string) {
    this.message = message;
    //this.messages.push(message);
  }

  clear() {
    this.message = "";
  }
}
