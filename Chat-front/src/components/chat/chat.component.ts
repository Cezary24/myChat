import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatMessage } from 'src/chatMessage';
import { mockapMessages } from 'src/mockap-messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {

  mockapMessages: ChatMessage [] = mockapMessages;
  isCurrentUser: number = 2;
  userInputMessage: FormControl = new FormControl();

  constructor(private readonly _cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onEnter():void{
    console.log(this.userInputMessage.value);

    const userInput: ChatMessage = {
      chatId:1,
      message: this.userInputMessage.value,
      userId: this.isCurrentUser,
      userNickName:"Cezar"
    }
    mockapMessages.push(userInput);

    this.userInputMessage.reset()
  }

}
