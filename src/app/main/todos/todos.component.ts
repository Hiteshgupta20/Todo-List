import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "Title 1",
        desc: "description",
        active: true
      },
      {
        sno: 2,
        title: "Title 2",
        desc: "description",
        active: true
      },
      {
        sno: 3,
        title: "Title 3",
        desc: "description",
        active: true
      },
    ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)

  }
}
