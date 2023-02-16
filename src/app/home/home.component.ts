import { Component, OnInit } from '@angular/core';

declare var Mostar:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  
})

export class HomeComponent{    

  Mostrar(){
     
    Mostar();
     
  }
}
