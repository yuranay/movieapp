import { Box, Container, Grid } from '@mui/material'
import axios from 'axios'
import React from 'react'

const Detail = ({ detail }) => {
    console.log(detail)

    return (
        <Box
            sx={{
                height: '70vh',
                bgcolor: 'red',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
            }}>
            <Box
                sx={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                    },
                }}
            />
            <Container sx={{ zIndex: 1 }}>
                <Grid container>
                    <Grid item>ポスター画像です</Grid>
                    <Grid item>作品情報です</Grid>
                </Grid>
            </Container>
        </Box>
    )
}

//SSR
export async function getServerSideProps(context) {
    const { media_type, media_id } = context.params
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${media_id}?api_key=${process.env.TMDB_API_KEY}&language=ja-JP`,
        )
        const fetchData = response.data

        return {
            props: { detail: fetchData },
        }
    } catch {
        return { notFound: true }
    }
}
export default Detail
