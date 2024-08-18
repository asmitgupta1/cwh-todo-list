import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';
import { AngularBasicComponent } from './MyComponents/angular-basic/angular-basic.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    AngularBasicComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
