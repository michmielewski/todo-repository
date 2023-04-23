import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  public title: string = '';

  @Output()
  public add: EventEmitter<Todo> = new EventEmitter();

  public addTodo(): void
  {
    let todo: Todo;

    todo = new Todo(this.title, false);

    this.add.emit(todo);
  }
}
