import TodoService from './todo.service.js'
import './todo-item.element.js'
import './todo-list.element.js'

export default class TodoController {
        
    constructor() {
        this.todoService = new TodoService()
        this.todoListDisplay = document.querySelector('section')
    }
    
   async init() { 
        await this.todoService.fetchTodos()
        let todoList = document.querySelector('todo-list')        

        todoList.addEventListener('add-todo', (e)=> {
            console.log(e.detail)
            this.todoService.addTodo(e.detail)
            this.listdisplay()
        })
        
        this.listdisplay()
   }
   
   listdisplay() {
       const todos = this.todoService.getTodos()
       this.todoListDisplay.innerHTML = `${todos.map(title => `<todo-item>${title}</todo-item>`).join(' ')}`
   }
}