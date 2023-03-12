import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
public todoCollection: Array<Todo> = [
  {
    title: 'Pierwsze zadanie',
    completed: false
  },
  new Todo('Drugie zadanie', true),
  new Todo('Trzecie zadanie', true)
]
}
