import React from 'react'
import {deleteTodo, finishTodo, selectTodos, Todo, unfinishTodo} from '../features/todo/todoSlice'
import {Card, Checkbox, IconButton, Stack, Typography} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import {useAppDispatch, useAppSelector} from '../app/hooks'

export const TodoList: React.FC = () => {
    const todos = useAppSelector(selectTodos)
    return <Stack spacing={1}>
        {todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
    </Stack>
}

export const TodoItem: React.FC<Todo> = ({isFinished, text, id}) => {
    const dispatch = useAppDispatch()
    const deleteClickHandler = () => {
        dispatch(deleteTodo(id))
    }
    const finishClickHandler = () => {
        if (!isFinished) {
            dispatch(finishTodo(id))
        } else {
            dispatch(unfinishTodo(id))
        }
    }
    return <Card variant={'outlined'} sx={{padding: 1, opacity: !isFinished ? 1 : 0.5}}>
        <Stack
            direction={'row'}
            spacing={2}
            sx={{alignItems: 'center'}}
        >
            <Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 28}}} checked={isFinished} onChange={finishClickHandler}/>
            <Typography variant={'body1'}
                        sx={{flexGrow: 1, textDecoration: isFinished ? 'line-through' : 'none'}}>{text}</Typography>
            <IconButton onClick={deleteClickHandler}><DeleteIcon/></IconButton>
        </Stack>
    </Card>
}