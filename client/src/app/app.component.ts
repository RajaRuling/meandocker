import { Component } from '@angular/core';


import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  Hello:any;
   
 
 
  
  constructor(public restApi: HelloService) { }
  ngOnInit() {
    this.loadHello();
  }
  // Get employees list
  loadHello() {
    return this.restApi.getHello().subscribe((data: {}) => {
      this.Hello = data;
   
    });
  }

}
