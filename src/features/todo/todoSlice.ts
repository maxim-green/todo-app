import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {loadTodos, saveTodos} from '../todo/todoSlice.api'
import {createId} from '../../utils/createId'

export interface Todo {
  id: string,
  text: string,
  isFinished: boolean,
}

export type Filter = 'all' | 'finished' | 'unfinished'

export interface TodoState {
  todos: Todo[]
  filter: Filter
}

const initialState: TodoState = {
  todos: [],
  filter: 'all'
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state) => {
      state.todos = loadTodos()
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({id: createId(), text: action.payload, isFinished: false})
      saveTodos(state.todos)
    },
    finishTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => todo.id !== action.payload ? todo : {...todo, isFinished: true})
      saveTodos(state.todos)
    },
    unfinishTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => todo.id !== action.payload ? todo : {...todo, isFinished: false})
      saveTodos(state.todos)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      saveTodos(state.todos)
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload
    }
  },
});

export const { setTodos, addTodo, deleteTodo, finishTodo, unfinishTodo, setFilter } = todoSlice.actions;

export const selectTodos = (state: RootState) => {
  const todos = state.todo.todos.slice().reverse()
  if (state.todo.filter === 'finished') return todos.filter(todo => todo.isFinished)
  if (state.todo.filter === 'unfinished') return todos.filter(todo => !todo.isFinished)
  return todos.sort(todo => {
    if (!todo.isFinished) return -1
    if (todo.isFinished) return  1
    return 0
  })
};

export default todoSlice.reducer;
