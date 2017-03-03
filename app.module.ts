import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculateInnerComponent } from './calculator/calculate-inner.component';
import { ChangeSizeDirective } from './changesize.directive';
import { UnderlineDirective } from './underline.directive';
import { CalculateService } from './calculator/calculate.service';
import { HttpDemoComponent } from './httpdemo/httpdemo.component';
import { HttpDemoService } from './httpdemo/httpdemo.service'

@NgModule({
  declarations: [
    AppComponent, CalculatorComponent, CalculateInnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
