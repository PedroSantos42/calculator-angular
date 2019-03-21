import { Component } from '@angular/core';

import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  constructor() { }

  resultDisplay: string = ''
  value1: number = 0
  value2: number = 0
  operator: string = ''
  expression: string = ''
  result: number = 0
  
  clearDisplay() { this.resultDisplay = "" }

  negateValue() { this.resultDisplay = stringify(parseFloat(this.resultDisplay) * -1) }
  
  addZero() {
    if (this.resultDisplay != '0')
      this.resultDisplay += '0'
  }

  addComa() {
    if (this.resultDisplay != '' && !this.resultDisplay.includes('.'))
      this.resultDisplay += '.'
    if (this.resultDisplay == '')
      this.resultDisplay = '0.'
  }

  // setOperator(value) {
  //   this.setValue()
  //   this.operator = value
  //   this.resultDisplay = ''
  // }

  setOperator(operator) {
    this.addToExpression(operator);
    this.addToExpression(parseFloat(this.resultDisplay))
    console.log(this.expression)
    this.clearDisplay()
  }

  calculate() {
    // console.log(isUndefined(this.value2))
    // if (this.value2 == 0 && this.resultDisplay != '')
    //   this.value2 = parseFloat(this.resultDisplay)

    // if (!isUndefined(this.value1) && !isUndefined(this.value2) && !isUndefined(this.operator)) {
    //   this.result = eval(this.value1 + this.operator + this.value2)
    // }
    // this.value1, this.value2 = 0
    // console.log(this.value1, this.value2)
    // this.resultDisplay = stringify(this.result)
    if (this.value2 == 0 && this.resultDisplay != '')
      this.addValue(parseFloat(this.resultDisplay))
    
    this.result = this.calculateExpression(this.expression)
    this.resultDisplay = stringify(this.result)
    console.log(this.result)
  }

  private addToExpression(param) { this.expression.concat(stringify(param)) }

  addValue(value) { this.addToExpression(value) }

  addOperator(operator) { this.addToExpression(operator) }
  
  calculateExpression(expression): number { return eval(expression) }
}
