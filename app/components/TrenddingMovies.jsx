import { FaFire } from "react-icons/fa";
import React from 'react';
import { IoSearch } from "react-icons/io5";
import TrenddingMoviesCard from './TrenddingMoviesCard';
import Loading from "./Loading";

export default function TrenddingMovies({ data, title, icon, queries, loading }) {
    if (!data?.length > 0 ) {
        return <h1 className="font-bold text-xl flex gap-1 h-full w-full justify-center items-center">Search Query's Data Not Found! </h1>
    }
    return (
        <div className="h-full w-full">
            {loading ?
                <>
                    <h1 className='font-bold text-2xl flex gap-1 justify-start items-center'><span>{icon === 'trendding Icon' ? <FaFire size={20} color='yellow' /> : <IoSearch size={23} color='white' />}</span> {title} {queries} </h1>
                    <div className="flex flex-col w-full h-full gap-3 mt-2">
                        {data?.map((item, index) => (
                            <TrenddingMoviesCard item={item} key={index} />
                        ))
                        }
                    </div>
                </>
                : <div className="flex justify-center items-center h-full w-full">
                    <Loading />
                </div>}
        </div>
    )
}
