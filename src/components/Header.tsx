import {AppBar, Container, Stack} from '@mui/material'
import React from 'react'

export const Header: React.FC<{children?: React.ReactNode}> = ({children}) => {
    return <AppBar
            position="fixed"
            elevation={0}
            color={'transparent'}
            sx={{
                borderBottom: '1px solid lightgrey',
                padding: 2,
                backgroundColor: 'white'
            }}
        >
            <Container maxWidth="sm">
                <Stack spacing={2}>
                    {children}
                </Stack>
            </Container>
        </AppBar>
}

