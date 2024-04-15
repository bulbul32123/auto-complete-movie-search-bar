import React from 'react'

export default function MovieCard({ item }) {
  const { original_title,overview,vote_average,release_date,poster_path} = item
    const BaseUel = 'https://image.tmdb.org/t/p/w500'
  return (
    <>
      <div className="py-6 flex flex-col justify-center sm:py-12 ">
        <div className="py-3 sm:max-w-xl sm:mx-auto">
          <div className="bg-gray-900 shadow-lg max-h-80 sm:rounded-3xl p-8 flex space-x-8">
            <div className="h-48 overflow-visible w-1/2">
              <img className='h-[370px] w-[600px] rounded-md' src={BaseUel + poster_path} alt={original_title}  />
            </div>
            <div className="flex flex-col w-1/2">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold">{original_title}</h2>
                <div className="bg-yellow-400 font-bold rounded-xl p-2">{vote_average}</div>
              </div>
              <div>
              <div className="flex gap-2 mt-3 mb-2">
              <p>Release Date: </p>
                <p className="text-lg text-gray-400">{release_date}</p>
              </div>
              </div>
              <p className='font-bold text-lg'>Overview</p>
              <p className=" text-gray-400 max-h-60 overflow-x-hidden">{overview}</p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
