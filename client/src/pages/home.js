import AppLayout from '@/components/Layouts/AppLayout'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Home = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('api/getPopularMovies')
                // console.log(response.data.results)
                setMovies(response.data.results)
                console.log(movies)
            } catch (err) {
                console.log(err)
            }
        }
        fetchMovies()
    }, [])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Home
                </h2>
            }>
            <Head>
                <title>Laravel - Home</title>
            </Head>

            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
                breakpoints={{
                    //320px以上の画面サイズの場合
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    //480px以上の画面サイズの場合
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    //640px以上の画面サイズの場合
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    //768px以上の画面サイズの場合
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}>
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </AppLayout>
    )
}

export default Home
