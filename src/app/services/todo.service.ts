import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoCollection: Array<Todo> = [
    {
      title: 'Pierwsze zadanie',
      completed: false
    },
    new Todo('Drugie zadanie', true),
    new Todo('Trzecie zadanie', true)
  ];

   public getTodoCollection (): Array<Todo>
   {
    return this.todoCollection;
   }

   public addTodoItem(todo: Todo)
   {
    this.todoCollection.push(todo);
   }
}
