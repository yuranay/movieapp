import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar'

const Layout = () => {
    return (
        <Container>
            <Grid container spacing={3} py={4}>
                <Grid item xs={12} md={3}>
                    <Box bgcolor={'white'} boxshadow={1}>
                        {/* サイドバー */}
                        <Sidebar />
                    </Box>
                </Grid>

                <Grid item xs={12} md={9}>
                    {/* {children} */}
                    コンテンツ
                </Grid>
            </Grid>
        </Container>
    )
}

export default Layout
