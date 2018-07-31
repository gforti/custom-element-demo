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
            this.todoService.addTodo({"title": e.detail, "completed" : false})
            this.listdisplay()
        })
        
        this.listdisplay()
   }
   
   listdisplay() {
       const todos = this.todoService.getTodos()
       this.todoListDisplay.innerHTML = `${todos.map(todo => `<todo-item data-completed="${todo.completed}">${todo.title}</todo-item>`).join(' ')}`
       
       document.querySelectorAll('todo-item').forEach( (item, index) => {
           item.addEventListener('item-clicked', (e) => {
               this.todoService.updateItem({"completed": e.target.dataset.completed}, index)
           })
       })
       
   }
}