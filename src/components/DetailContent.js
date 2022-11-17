import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const DetailContentBlock = styled.div`
    .topDetail{
        position: relative;
        img{
            width: 100%;
            height: 20rem;
        }
        
    }
`

const DetailContent = () => {

    const location = useLocation();
    const category = location.state.category;
    const id = location.state.id;

    const [detail, setDetail] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/${category}/${id}?api_key=${apiKey}&language=ko-KR`
                );
                setDetail(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (
        <DetailContentBlock>
            <div className='topDetail'>
                <img src={IMAGE_URL + detail.backdrop_path}></img>
            </div>
        </DetailContentBlock>
    );
};

export default DetailContent;