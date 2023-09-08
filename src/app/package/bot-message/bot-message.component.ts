import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bot-message',
  templateUrl: './bot-message.component.html',
  styleUrls: ['./bot-message.component.css']
})
export class BotMessageComponent {

  @Input() content : string = 'No inicia';
   imagePath : string = './bot.png';
}
