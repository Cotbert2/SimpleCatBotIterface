import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonajeService } from 'src/app/service/personaje.service'
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  messageBot : string = 'Hola';

  textBox : string = '';

  elementBox : any = '';

  constructor(private service: PersonajeService, private render2 : Renderer2){}
  
  @ViewChild('inputDataDiv') element!: ElementRef;

  public send = (input : any) => {
    if(this.textBox == '' || this.textBox == undefined){
      alert('Ingresa algo primero :3');
    }else {      
      console.log(this.textBox);
      this.service.getAllData().subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
        );
        input.value = '';
        this.textBox = '';
    }
  }
  public getValue(val : any){
    this.textBox = val.value;
  }
  public cleanInput(){
    
  }
}
