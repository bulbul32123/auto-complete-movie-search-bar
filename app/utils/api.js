import axios from 'axios';

const Base_url = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTlhNDg1MzFmODg2NGViODE2Mjc3ZjY4NWI3NzQyOCIsInN1YiI6IjY0ZmMyOGViZjg1OTU4MDEzYThkOTZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HYOjZlZedMecL5pKyXV3YP0T195UfBXFHHTmdDgTWjg'

const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params)=>{
    try{
        const { data } = await axios.get(Base_url + url ,{
            headers,
            params
        })
        return data;
    }
    catch(error){
        console.log(error);
        return error
    };
};