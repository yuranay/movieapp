import {
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Grid,
    Typography,
} from '@mui/material'
import React from 'react'

const Comment = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    ユーザー名
                </Typography>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                    paragraph>
                    コメント内容
                </Typography>

                <Grid container justifyContent="flex-end">
                    <ButtonGroup>
                        <Button>編集</Button>
                        <Button color="error">削除</Button>
                    </ButtonGroup>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Comment
