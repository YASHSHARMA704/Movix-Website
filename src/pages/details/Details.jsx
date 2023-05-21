import React from 'react';
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom"; 

//useParams is for fetching data from path shown in(navigation bar).

import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";

import Cast from "./cast/Cast";
import VideosSection from './videosSection/VideosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation';

const Details = () => {
 

    const {mediaType , id} = useParams();

    // Below API fetching is for videos fetching which will use in DetailsBanner.jsx
    const {data , loading} = useFetch(`/${mediaType}/${id}/videos`);

    // below API fetching is for cast details which will use in DetailsBanner.jsx
    const {data: credits , loading : creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);
    
    return (

    <div>
        <DetailsBanner video = {data?.results?.[0]} crew = {credits?.crew}/>

        {credits?.cast && (<Cast data = {credits?.cast} loading = {creditsLoading} />)}

        <VideosSection data = {data} loading = {loading}/>

        <Similar mediaType={mediaType} id = {id}/>

        <Recommendation mediaType={mediaType} id = {id}/>

    </div>
    
    )
}

export default Details;