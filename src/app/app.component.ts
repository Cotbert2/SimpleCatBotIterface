import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
//import * as convJson from 'src/assets/conversation.json';

interface Conversation {
  me : string,
  you : string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  //public data : any = convJson;
  
  constructor(private render2: Renderer2){}
  public xd : Conversation[] = [
    {
      "me" : "Hola1",
      "you": "xd"
    },
    {
      "me" : "Hola2",
      "you": "xd"
    },
    {
      "me" : "Hola3",
      "you": "xd"
    }
  ];  
  
  @ViewChild('messages') element !: ElementRef;

  public updateMesagges() : void {
    
  }
  

  ngOnInit(): void {
    console.log(this.xd[1]);
    
  }
  title = 'chatBot';
}
