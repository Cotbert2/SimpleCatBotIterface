import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
//import * as convJson from 'src/assets/conversation.json';
//import bar component
import { BarComponent } from './package/bar/bar.component';

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

  isPresentation : boolean = false;

  constructor(private render2: Renderer2){
    console.log('Starts component')
  }

  @ViewChild(BarComponent) bar !: BarComponent;
  public xd : any[] = [];

  public updateMesagges() : void {

  }

  ngAfterViewInit(){
    this.xd = this.bar.something;
  }
  ngOnInit(): void {

    console.log(this.xd[1]);
  }
  title = 'chatBot';
}
