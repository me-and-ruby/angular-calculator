import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  keyPressed="";

  keyPress($event){
       return this.keyPressed=$event.target.value;
  }
}
