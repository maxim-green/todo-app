import {Todo} from '../todo/todoSlice'

export const saveTodos = (todos: Todo[]) => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
}

export const loadTodos = () => {
    const todos = window.localStorage.getItem('todos')
    if (todos) {
        return JSON.parse(todos)
    } else {
        return []
    }
}

