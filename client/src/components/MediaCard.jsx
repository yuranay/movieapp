import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'

const MediaCard = ({ item, isContent }) => {
    const imagePath = item.poster_path
        ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
        : 'media_poster_img/NO_IMAGE.png'
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardActionArea>
                    <Link href={`/detail/${item.media_type}/${item.id}`}>
                        <CardMedia
                            component={'img'}
                            sx={{ aspectRatio: '2/3' }}
                            image={imagePath}
                        />
                        {isContent && (
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    component={'div'}
                                    noWrap>
                                    {item.title || item.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="textSecondary">
                                    {item.release_date || item.first_air_date}
                                </Typography>
                            </CardContent>
                        )}
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default MediaCard
