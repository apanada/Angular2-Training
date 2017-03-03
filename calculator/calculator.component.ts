import { Component, Inject } from '@angular/core';
import { CalculateInnerComponent } from './calculate-inner.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
  calcForm: FormGroup;

  firstNumber: number;
  secondNumber: number;
  result: number = 0;

  constructor( @Inject(FormBuilder) private builder: FormBuilder) {
    this.builtForm();
  }

  private builtForm() {
    this.calcForm = this.builder.group({
      firstNumber: new FormControl(10, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(3)
      ])),
      secondNumber: new FormControl(20, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(3)
      ]))
    });
  }

  onCalcEvent(result: any): any {
    this.result = result;
  }
}
