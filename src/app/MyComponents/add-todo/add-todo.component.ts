import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  title: string | undefined
  desc: string | undefined
onSubmit() {
    const todo:Todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active: true
      
    }
    this.addTodo.emit(todo)
}

}
