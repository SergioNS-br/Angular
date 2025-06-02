import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { TodosService } from './_services/todos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//export class AppComponent implements OnInit{
export class AppComponent{
  title = 'ng-teste-unitario';

  constructor(
//    private todoService: TodosService 
  ){}

/*   ngOnInit(): void {
    this.todoService.getAll().subscribe((response) => {
      console.log(response);
    });

    this.todoService.getId(1).subscribe((response) => {
      console.log(response);
    });    
    } */
}
