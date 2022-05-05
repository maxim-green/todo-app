import {Container} from '@mui/material'
import React from 'react'

export const Content: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <Container maxWidth="sm" sx={{marginTop: 26, paddingBottom: 2}}>
        {children}
    </Container>
}