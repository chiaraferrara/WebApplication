import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApplication';
  mainText: string = " Prop1 : mainText";
  secondText: string = "Prop2 : secondText";

  // un array di numeri chiamato counter con i seguenti numeri: 10, "23", quarantaquattro, 57, uno, "2"
  //  (sono volutamente scritti così, ma devono essere dei NUMBER)
  uno : number = 1 ; 
  quarantaquattro = 44;

  
  // parsing string to int
  
  counter: number[] = [10, Number("23"), this.quarantaquattro, 57, this.uno, Number("2") ]; 
  constructor(){

  }

  ngOnInit(): void {
    console.log(this.counter)
  }
 
}
 
