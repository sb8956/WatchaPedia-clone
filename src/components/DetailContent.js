import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import plus from '../img/icon_plus.png'
import eye from '../img/icon_eye.png'
import pencil from '../img/icon_pencil.png'
import more from '../img/icon_more.png'
import ContentInfo from './ContentInfo';

const apiKey = process.env.REACT_APP_API_KEY;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const DetailContentBlock = styled.div` 
        background-color: #F8F8F8;
        padding-bottom: 1.4rem;

        .topDetail{
            background-color: white;
        }
        .topImg{
            width: 100%;
            height: 20rem;
        }
        .wrapTop{
            background-color: white;
            height: 10rem;
        }
        .postImg{
            width: 10rem;
            height: 15rem;
            margin-top: 0.125rem;
        }
        .wrapImg{
            position: absolute;
            top: 18rem;
            left: 15rem;
            width: 10.25rem;
            height: 15.25rem;
            border: 0.1rem solid #00000020;
            border-radius: 0.2rem;
            background-color: white;
            text-align: center;
        }
        .wrapTitle{
            background-color: white;
            padding-left: 27rem;
        }
        .title{
            font-size: 2.2rem;
            margin-bottom: 0rem;
        }
        .subTitle{
            margin-top: 0.2rem;
            margin-bottom: 1rem;
            font-size: 1.1rem;
            color: gray;
        }
        .average{
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-size: large;
        }
        .subBottom{
            display: flex;
            align-items: center;
            img{
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 1rem;
                margin-left: 2rem;

            }
        }

        .wrapEval{
            display: inline-block;
            padding-right: 2rem;
            padding-bottom: 1rem;
        }

        .evaluate{
            text-align: center;
            color: gray;
            font-size: 0.8rem;
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
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [id]);

    return (
        <DetailContentBlock>
            <div className='topDetail'>
                <img src={detail.backdrop_path ? IMAGE_URL + detail.backdrop_path : ''} className='topImg'></img>
                <div className='wrapTop'>
                    <div className='wrapImg'>
                        <img src={IMAGE_URL + detail.poster_path} className='postImg'></img>
                    </div>
                    <div className='wrapTitle'>
                        <h1 className='title'>{detail.title || detail.name}</h1>
                        <p className='subTitle'>{detail.release_date && detail.release_date.substr(0, 4)}{detail.first_air_date && detail.first_air_date.substr(0, 4)} ・ {detail.genres && detail.genres.map(g => (g.name + ' '))} ・ {detail.original_language}</p>
                        <div style={{ width: "45rem", height: "1px", backgroundColor: "#00000020" }}></div>
                        <p className='average'>평균 ★{detail.vote_average} ({detail.vote_count > 10000 ? Math.trunc(detail.vote_count / 10000) + '만명' : detail.vote_count})</p>
                        <div style={{ width: "45rem", height: "1px", backgroundColor: "#00000020" }}></div>
                        <div className='subBottom'>
                            <div className='wrapEval'>
                                <p className='evaluate'>평가하기</p>
                                <Rating name="half-rating" precision={0.5} size="large" />
                            </div>
                            <div style={{ width: "1px", height: "3.5rem", backgroundColor: "#00000020", marginTop: "0.5rem" }}></div>
                            <img src={plus}></img><p className='addFun'>보고싶어요</p>
                            <img src={pencil}></img><p className='addFun'>코멘트</p>
                            <img src={eye}></img><p className='addFun'>보는중</p>
                            <img src={more}></img><p className='addFun'>더보기</p>
                        </div>
                    </div>
                    <div style={{ height: "1px", backgroundColor: "#00000020", }}></div>
                </div>
            </div>
            <ContentInfo content={detail} category={category} id={id} />
        </DetailContentBlock>
    );
};

export default DetailContent;