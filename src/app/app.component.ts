import { Component } from '@angular/core';

class TodoInfo {
  constructor(public id: number = 1, private _content: string, public isDone: boolean) {
    this.content = _content
  }

  public get content(): string {
    return this._content
  }

  public set content(v: string) {
    this._content = v;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Array<TodoInfo> = [
    new TodoInfo(1, '哈哈', false),
    new TodoInfo(2, '嘿嘿', false),
    new TodoInfo(3, '嘎嘎', false),
  ]

  public status: string = 'all'

  get filterTodos(): Array<TodoInfo> {
    switch (this.status) {
      case 'all':
        return this.todos
      case 'active':
        return this.todos.filter(item => !item.isDone)
      case 'completed':
        return this.todos.filter(item => item.isDone)
    }
  }

  public userInputContent: string = ''
  public addTodo(): void {
    if (!this.userInputContent.trim()) return
    let last = this.todos[this.todos.length - 1]
    let todoInfo = new TodoInfo(last ? last.id + 1 : 1, this.userInputContent, false)
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
  public deleteTodo(i): void {
    this.todos.splice(i, 1)
  }
  public currentEditingTodo: TodoInfo = null
  public clearAllDone(): void {
    this.todos = this.todos.filter(item => !item.isDone)
  }
}
