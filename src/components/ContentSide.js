import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import iconArrow from '../img/icon_arrow.png'
import Video from './Video';

const apiKey = process.env.REACT_APP_API_KEY;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const ContentSideBlock = styled.div`
    background-color: white;
    /* margin: 1.5rem 15rem;
    padding: 1rem 0 1rem 1.5rem; */
    margin-left: 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #00000020;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    h4{
        font-size: 1.3rem;
    }

    .platfomLogo{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 100%;
        border: 0.1px solid #A2A2A2;
        background-position: center;

    }
    .platfomName{
        color: black;
        font-size: 1.1rem;
        margin-left: 1rem;
        line-height: 1.5rem;
    }
    .platformBtn{
        width: 1.1rem;
        height: 1.1rem;
        margin-left: auto;
        margin-top: 1.5rem;
        margin-right: 1rem;
    }
    .wrapPlatform{
        display: flex;
        margin-top: 1rem;
    }
    .GalleryImg{
        width: 8rem;
        height: 5rem;
        margin-right: 0.8rem;
    }
    .wrapGallery{
        display: flex;
        overflow-x: scroll;
    }
    .videoTitle{
        margin-top: 0.5rem;
        color: black;
    }
`

const ContentSide = ({ category, id }) => {
    const [platforms, setPlatforms] = useState('');
    const [gallery, setGallery] = useState('');
    const [videos, setVideos] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/${category}/${id}/watch/providers?api_key=${apiKey}`);
                setPlatforms(response.data.results.KR);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [category, id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/${category}/${id}/images?api_key=${apiKey}`);
                setGallery(response.data.backdrops);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [category, id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/${category}/${id}/videos?api_key=${apiKey}`);
                setVideos(response.data.results);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [category, id]);

    return (
        <ContentSideBlock>
            {platforms && <h4>감상 가능한 곳</h4>}
            {platforms && (platforms.buy || platforms.rent || platforms.flatrate).map((p, index) => (
                <a key={index} style={{ textDecoration: "none" }} href={`https://www.google.com/search?q=${p.provider_name}`}><div className='wrapPlatform'>
                    <img className='platfomLogo' src={IMAGE_URL + p.logo_path} alt={p.provider_name}></img>
                    <p className='platfomName'>{p.provider_name}</p>
                    <img className='platformBtn' src={iconArrow} alt='화살표 이미지'></img>
                </div></a>
            ))
            }
            {gallery.length !== 0 && <h4>갤러리</h4>}
            <div className='wrapGallery'>
                {gallery && gallery.map((g, index) => (
                    <img className='GalleryImg' key={index} alt='갤러리 이미지' src={IMAGE_URL + g.file_path}></img>
                ))}
            </div>
            <h4>동영상</h4>
            <div className='wrapGallery'>
                {videos && videos.map((v, index) => (
                    <a style={{ textDecoration: "none" }} key={index} href={`https://www.youtube.com/watch?v=${v.key}`}>
                        <Video video={v} />
                        <p className='videoTitle'>{v.name}</p>
                    </a>
                ))}
            </div>
        </ContentSideBlock >
    );
};

export default ContentSide;