import { Injectable } from '@angular/core';

@Injectable()
export class CalculateService {

  constructor() { }

  Add(firstNumber: any, secondNumber: any): number {
    return parseInt(firstNumber) + parseInt(secondNumber);
  }
  Sub(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }
  Div(firstNumber: number, secondNumber: number): number {
    return firstNumber / secondNumber;
  }
  Mul(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }
}
