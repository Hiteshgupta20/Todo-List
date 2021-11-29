import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: todo;
  @Output() tododDelete: EventEmitter<todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo:todo) {
this.tododDelete.emit(todo)
  }
}
