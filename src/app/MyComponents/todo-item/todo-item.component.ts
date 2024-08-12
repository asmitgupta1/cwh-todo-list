import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {


  @Input() idx: number | null
  @Input() todo: Todo | undefined
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo | undefined) {
    if (todo != undefined) {
      this.todoDelete.emit(todo)
    }
    console.log("onClick triggered")
  }
  onCheckboxClick(todo: Todo) {
      this.todoCheckbox.emit(todo)
    }

  ngOnInit(): void {

  }

}
