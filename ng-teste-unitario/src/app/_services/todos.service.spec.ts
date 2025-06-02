import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment.development';
import { TODO_STRING, TODOS_STRING } from '../../../server/db-data';

describe('TodosService', () => {
  let todosService: TodosService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        TodosService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    todosService = TestBed.inject(TodosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });

  it('retornar todos To dos ', () => {
    todosService.getAll().subscribe(todos => {
      expect(todos).toBeTruthy();
      expect(todos.length).toEqual(200);
      
      const todoEspec = todos.find(todoEspec => todoEspec.id == 104)
      expect(todoEspec?.title).toEqual("excepturi non laudantium quo");
    });

    const req = httpTestingController.expectOne(environment.apiUrl + 'todos');
    expect(req.request.method).toEqual('GET');
    req.flush(JSON.parse(TODOS_STRING));
  });

/*   it('async retornar todos To dos', async () => {
    const todos = await todosService.getAll().toPromise();
    expect(todos).toBeTruthy();
    expect(todos?.length).toEqual(200);

    const todoEspec = todos?.find(todoEspec => todoEspec.id == 104)
    expect(todoEspec?.title).toEqual("excepturi non laudantium quo");
  }) */
 

  it('retornar id 161 de To dos', () => {
    todosService.getId(161).subscribe(todos => {
      expect(todos).toBeTruthy();
      expect(todos.id).toEqual(161);
      expect(todos.title).toEqual("ex hic consequuntur earum omnis alias ut occaecati culpa");
    });

    const req = httpTestingController.expectOne(environment.apiUrl + 'todos/161');
    expect(req.request.method).toEqual('GET');
    req.flush(JSON.parse(TODO_STRING));
  
  });

/*     it('async retornar id 161 de To dos', async () => {
      const todos = await todosService.getId(161).toPromise();
      expect(todos).toBeTruthy();
      expect(todos?.id).toEqual(161);
      expect(todos?.title).toEqual("ex hic consequuntur earum omnis alias ut occaecati culpa");
    }) */
});
