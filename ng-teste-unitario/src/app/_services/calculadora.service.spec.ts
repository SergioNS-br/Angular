import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { LoggerService } from './logger.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;
  let loggerSpy: any;

  //Executado antes de cada it (teste)
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']); //espião

    TestBed.configureTestingModule({    //TestBed -> prepara um modulo de teste para um ambiente de teste.
      providers: [CalculadoraService,
         {provide: LoggerService, useValue: loggerSpy} //isso porque LoggerService está injetado no CalculadoraService
      ]
    }); 
    service = TestBed.inject(CalculadoraService);  // Obtendo uma instancia de CalculadoraService
  });

  //O afterEach é executado após cada it (teste)

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('somar corretamente 2 números.',() =>{
    const resultado = service.calcular(5,7,'+');
    expect(resultado).toBe(12,'resultado deveria ser 12');
  });

  it('subtrair corretamente 2 números.',() =>{
    const resultado = service.calcular(10,8,'-');
    expect(resultado).toBe(2,'resultado deveria ser 2');
  });

  it('multiplicar corretamente 2 números.',() =>{
    const resultado = service.calcular(7,3,'*');
    expect(resultado).toBe(21,'resultado deveria ser 21');
  });

  it('dividir corretamente 2 números.',() =>{
    const resultado = service.calcular(36,4,'/');
    expect(resultado).toBe(9,'resultado deveria ser 9');
  });

  it('nenhuma da 4 operações.',() =>{
    const resultado = service.calcular(5,7,'q');
    expect(resultado).toBeNull();
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
