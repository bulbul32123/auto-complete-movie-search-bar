'use client'
import React, { useEffect, useRef, useState } from 'react'
import TrenddingMovies from './TrenddingMovies';
import { fetchDataFromApi } from '../utils/api';

export default function SearchBar() {
    const [IsFocused, setIsFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const [trenddingData, setTrenddingData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [queries, setQueries] = useState('');
    const searchBarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const getTreddingData = () => {
        fetchDataFromApi(`/trending/movie/day`).then((res) => {
            setLoading(true)
            setTrenddingData(res?.results);
        })
        setLoading(false)
    }
    useEffect(() => {
        getTreddingData()
    }, [])
    const getSearchData = () => {
        fetchDataFromApi(`/search/movie`,{query: queries}).then((res) => {
            setLoading(true)
            setSearchData(res?.results);
        })
        setLoading(false)
    }
    
    useEffect(() => {
        getSearchData()
    }, [queries])



    return (
        <form class="max-w-md mx-auto relative" ref={searchBarRef}>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" onClick={() => setIsFocused(true)} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-t-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500" placeholder="Search Movies" required onChange={(e) => setQueries(e.target.value)} />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            {IsFocused &&
                <div className="absolute h-80 w-full  overflow-x-hidden rounded-b-lg border border-gray-600 mt-1 bg-gray-800 text-white z-10 p-3">

                    {queries.length < 1 && <TrenddingMovies data={trenddingData} loading={loading} icon='trendding Icon'  title='Trendding' queries={''}/> }
                    {queries.length > 0 && <TrenddingMovies data={searchData} loading={loading} title='Results from: ' icon='search Icon' queries={queries}/> }
                </div>
            }
        </form>

    )
}
