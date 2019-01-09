import { Component } from '@angular/core';

class TodoInfo {
  constructor(public id: number, public content: string, public isDone: boolean) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Array<TodoInfo> = [
    { id: 1, content: '哈哈', isDone: false },
    { id: 2, content: '嘿嘿', isDone: false },
    { id: 3, content: '嘎嘎', isDone: false },
  ]
  public userInputContent: string = ''
  public addTodo(): void {
    if (!this.userInputContent.trim()) return
    let lastTodoInfo = this.todos[this.todos.length - 1]
    let todoInfo = new TodoInfo(lastTodoInfo.id + 1, this.userInputContent, false)
    this.todos.unshift(todoInfo)
    this.userInputContent = ''
  }
  get toggleAll(): boolean {
    return this.todos.every(item => item.isDone)
  }
  set toggleAll(val) {
    this.todos.forEach(item => item.isDone = val)
  }
  get completedCount(): number {
    return this.todos.filter(item => !item.isDone).length
  }
}
