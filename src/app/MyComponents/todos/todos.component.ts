import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {


  localItem!: string | null;
  todos: Todo[] = [];

  ngOnInit(): void {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null)
    {
      this.todos;
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
  }
  // constructor() {
  //   this.todos = [
  //     {
  //       sno: 1,
  //       title: "title1",
  //       desc: "desc 1",
  //       active: true
  //     },
  //     {
  //       sno: 2,
  //       title: "title2",
  //       desc: "desc 2",
  //       active: true
  //     },
  //     {
  //       sno: 1,
  //       title: "title3",
  //       desc: "desc 3",
  //       active: true
  //     }
  //   ]
  // }

  deleteTodo(todo: Todo) {
    console.log("delete todo")
    const idx = this.todos.indexOf(todo)
    this.todos.splice(idx, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  

  addTodo(todo: Todo) {
    console.log("Add todo")
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo: Todo) {
    console.log("todo status changed")
    const idx = this.todos.indexOf(todo)
    this.todos[idx].active= !this.todos[idx].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }


}
