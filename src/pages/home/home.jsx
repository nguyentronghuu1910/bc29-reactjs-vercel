import React from 'react'
import Carousel from '../../modules/carousel/carousel'
import MovieList from '../../modules/movieList/movie-list'

export default function Home() {
   return (
      <div className="py-5">
         <Carousel />
         <MovieList />
      </div>
   )
}
