import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Material';
  notification = 0;
  showSpinner = false;
  opened = false;
  selectedValue:string;

  numbers = [];
  constructor(){
    for(let i=0; i<1000;i++){
      this.numbers.push(i) ;
    }
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(()=> {
      this.showSpinner=false;
    },5000)
  }
}
