import React from 'react'
import { SearchCard } from './SearchCard'

export const SearchList = ({moviesData}) => {
  if(!moviesData?.length) return

  return (
    <div className='max-h-52 p-2 bg-white/80'>
        {moviesData.map(movie => <SearchCard title={movie.title}/>)}
    </div>
  )
}
