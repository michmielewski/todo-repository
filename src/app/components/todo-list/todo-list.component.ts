import { Component } from '@angular/core';
import { Todo } from 'src/app/model/Todo'

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
  {
    title: 'Drugie zadanie',
    completed: true
  },
  {
    title: 'Trzecie zadanie',
    completed: true
  },
]
}
