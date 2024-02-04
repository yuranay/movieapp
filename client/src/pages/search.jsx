import AppLayout from '@/components/Layouts/AppLayout'
import Layout from '@/components/Layouts/Layout'
import MediaCard from '@/components/MediaCard'
import Sidebar from '@/components/Sidebar'
import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const search = () => {
    const [category, setCategory] = useState('all')
    const [results, setResults] = useState([])
    const router = useRouter()
    const { query: searchQuery } = router.query
    const [loading, setLoading] = useState(true)

    console.log(category)

    useEffect(() => {
        if (!searchQuery) {
            return
        }
        const fetchMedia = async () => {
            try {
                const response = await axios.get(
                    `api/searchMedia?searchQuery=${searchQuery}`,
                )
                console.log(response)
                const searchResults = response.data.results
                console.log(searchResults)

                const validResults = searchResults.filter(
                    item =>
                        item.media_type == 'movie' || item.media_type == 'tv',
                )
                setResults(validResults)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        fetchMedia()
    }, [searchQuery])

    const filterdResults = results.filter(results => {
        if (category == 'all') {
            return true
        }

        return results.media_type === category
    })

    console.log(filterdResults)
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Search
                </h2>
            }>
            <Head>
                <title>Laravel - Search</title>
            </Head>
            <Layout sidebar={<Sidebar setCategory={setCategory} />}>
                {loading ? (
                    <Grid item textAlign={'center'} xs={12}>
                        <Typography>検索中...</Typography>
                    </Grid>
                ) : filterdResults.length > 0 ? (
                    <Grid container spacing={3}>
                        {filterdResults.map(media => (
                            <MediaCard item={media} key={media.id} />
                        ))}
                    </Grid>
                ) : (
                    <Grid item textAlign={'center'} xs={12}>
                        <Typography>検索結果が見つかりませんでした</Typography>
                    </Grid>
                )}
            </Layout>
        </AppLayout>
    )
}

export default search
