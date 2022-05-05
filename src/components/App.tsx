import React, {useEffect} from 'react'
import {setTodos} from '../features/todo/todoSlice'
import {useAppDispatch} from '../app/hooks'
import {Header} from './Header'
import {TodoInput} from './TodoInput'
import {TodoFilter} from './TodoFilter'
import {TodoList} from './TodoList'
import {AppLogo} from './AppLogo'
import {Content} from './Content'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setTodos())
    }, [dispatch])

    return <>
        <Header>
            <AppLogo/>
            <TodoInput/>
            <TodoFilter/>
        </Header>
        <Content>
            <TodoList/>
        </Content>
    </>
}

export default App
