import React, {useState} from 'react'
import {Filter, setFilter} from '../features/todo/todoSlice'
import {Grid, ToggleButton, ToggleButtonGroup} from '@mui/material'
import {useAppDispatch} from '../app/hooks'

export const TodoFilter = () => {
    const [filterValue, setFilterValue] = useState<Filter>('all')
    const dispatch = useAppDispatch()
    const filterChangeHandler = (
        event: React.MouseEvent<HTMLElement>,
        newFilter: Filter
    ) => {
        dispatch(setFilter(newFilter))
        setFilterValue(newFilter)
    }
    return <Grid container justifyContent={'center'}>
        <ToggleButtonGroup
            color="primary"
            size={'small'}
            value={filterValue}
            exclusive
            onChange={filterChangeHandler}
        >
            <ToggleButton value='all'>All</ToggleButton>
            <ToggleButton value='finished'>Finished</ToggleButton>
            <ToggleButton value='unfinished'>Unfinished</ToggleButton>
        </ToggleButtonGroup>
    </Grid>
}