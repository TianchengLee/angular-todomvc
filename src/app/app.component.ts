import { Component } from '@angular/core';

class TodoInfo {
  id: number
  content: string
  isDone: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Array<TodoInfo> = [
    { id: 1, content: '哈哈', isDone: true },
    { id: 2, content: '嘿嘿', isDone: false },
    { id: 3, content: '嘎嘎', isDone: false },
  ]
}
