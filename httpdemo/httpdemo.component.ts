import { Component, OnInit, Inject } from '@angular/core';
import { IData } from './data';
import { HttpDemoService } from './httpdemo.service';

@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html'
})
export class HttpDemoComponent implements OnInit {
  private jsonData: IData[];
  private errorMessage: any;

  constructor( @Inject(HttpDemoService) private httpDemoService: HttpDemoService) {

  }

  ngOnInit(): void {
    this.httpDemoService.getAll().subscribe(res => this.jsonData = res, error => this.errorMessage = error);
  }
}
