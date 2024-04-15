import React from 'react';
import Image from 'next/image';
export default function TrenddingMoviesCard({ item }) {
    const { original_title, poster_path, release_date, id } = item
    const BaseUel = 'https://image.tmdb.org/t/p/w500'
    return (
        <>
           <div className="h-24 w-full bg-gray-950 flex gap-3">
                <div className="p-1">
                    <Image src={poster_path ? BaseUel + poster_path : '/poster-not-found.png'  } alt={original_title} className='h-full w-full rounded-md' height={100} width={100} />
                </div>
                <div className="flex flex-col mt-2">
                    <h2 className='font-bold text-base '>{original_title}</h2>
                    <p className='text-sm '>Release Date: {release_date}</p>
                    <div className="flex mt-1.5 gap-2">
                        <span className='py-1 px-4 flex rounded-xs text-sm text-white bg-gray-900'>Action</span>
                        <span className='py-1 px-4 flex rounded-xs text-sm text-white bg-gray-900'>Action</span>
                        <span className='py-1 px-4 flex rounded-xs text-sm text-white bg-gray-900'>Action</span>
                    </div>
                </div>
            </div>
        </>
    )
}
