import { Component, OnInit} from '@angular/core';
import {demo, HelloWorldInterface} from './demo'

@Component({
  moduleId: module.id,
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {
  static staticVariable: string;
  instanceVariable: string;
  demoInstance: demo;
  message: string;

  constructor() {   
    this.demoInstance = new demo();
    this.message = this.demoInstance.HelloWorld({message: "Hello World"});
  }

  static staticMethod(){
    return DemoComponent.staticVariable;
  }

  ngOnInit(){
    DemoComponent.staticVariable = "static";
    this.instanceVariable = DemoComponent.staticMethod();    
  }
}