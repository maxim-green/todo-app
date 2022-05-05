import React, {ChangeEvent, useState} from 'react'
import {addTodo} from '../features/todo/todoSlice'
import {Button, FormControl, Stack, TextField} from '@mui/material'
import {useAppDispatch} from '../app/hooks'

export const TodoInput = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useAppDispatch()
    const inputChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const addTodoClickHandler = () => {
        if (inputValue) dispatch(addTodo(inputValue))
        setInputValue('')
    }
    const addTodoKeyDownHandler: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.code === 'Enter') {
            if (inputValue) dispatch(addTodo(inputValue))
            setInputValue('')
        }
    }
    return <Stack direction="row" spacing={1}>
        <FormControl fullWidth={true}>
            <TextField
                id="outlined-basic"
                value={inputValue}
                onChange={inputChangeHandler}
                onKeyDown={addTodoKeyDownHandler}
                variant="outlined"
                placeholder={'Enter todo'}
            />
        </FormControl>
        <Button variant={'contained'} disableElevation onClick={addTodoClickHandler}>Add</Button>
    </Stack>
}