import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(
    private loggerService: LoggerService) { }

  calcular(num1: number,  num2: number, operacao: string){
    switch (operacao){
      case '+':
        return num1 + num2;

      case '-':
        return num1 - num2;

      case '/':
        return num1 / num2;

      case '*':
        return num1 * num2;
      
      default:
        this.loggerService.log('Operação não exite !!!!');
        return null;
    }
  }
}
