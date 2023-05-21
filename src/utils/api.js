import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";

const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;

// headers are the configurations which tells the server to fetch data corresponding to bearer type (Authorization) token.
const headers = {
    Authorization: "bearer " + API_TOKEN,
};

export const fetchDataFromApi = async(url , params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url , {
            headers,   // headers and params are configurations.
            params
        })

        return data;
    }
    catch(err)
    {
        console.log(err);
        return err;
    }
} 
