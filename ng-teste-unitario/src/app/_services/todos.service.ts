import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Todo } from '../_models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Todo[]>(this.baseUrl + 'todos')
    .pipe(
      map((response) => {
        return response;
      })
    )
  }

  getId(id: number){
    return this.http.get<Todo>(this.baseUrl + 'todos/' + id)
      .pipe(
      map((response) => {
        return response;
      })
    )
  }
}
