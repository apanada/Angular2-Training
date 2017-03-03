import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CalculateService } from './calculate.service';

@Component({
    selector: 'inner-calculator',
    templateUrl: './calculate-inner.component.html'
})
export class CalculateInnerComponent {
    @Input() firstNumber: number;
    @Input() secondNumber: number;
    @Output() calcEvent = new EventEmitter();
    result: number = 0;

    constructor( @Inject(CalculateService) private calculateService: CalculateService) { }

    Calculate(event: any) {
        if (event.target.outerText == "Addition") {            
            this.result = this.calculateService.Add(this.firstNumber, this.secondNumber);            
        }
        if (event.target.outerText == "Subtraction") {
            this.result = this.calculateService.Sub(this.firstNumber, this.secondNumber);
        }
        if (event.target.outerText == "Division") {
            this.result = this.calculateService.Div(this.firstNumber, this.secondNumber);
        }
        if (event.target.outerText == "Multiplication") {
            this.result = this.calculateService.Mul(this.firstNumber, this.secondNumber);
        }
        this.calcEvent.emit(this.result);
    }
}
