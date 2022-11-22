import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Profile from './Profile';
import Similar from './Similar';
import Review from './Review';

const apiKey = process.env.REACT_APP_API_KEY;

const ContentInfoBlock = styled.div`
    width: 35rem;
    background-color: white;
    margin: 5.5rem 15rem;
    padding: 1rem 0 1rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #00000020;

    .wrapBasicInfo{
        display: flex;
    }

    .moreOption{
        padding-right: 1.5rem;
        margin-left: auto;
        color: #FF2F6E;
    }

    .wrapOverview{
        padding-right: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .wrapProfile{
        height: 14.5rem;
        display: flex;
        flex-wrap: wrap;
        overflow-x: scroll;
        flex-direction: column;
    }

    .wrapComment{
        display:flex;
        overflow-x: scroll;
    }

    .wrapSimilar{
        padding-right: 1.5rem;
        overflow-y: scroll;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const ContentInfo = ({ content, category, id }) => {
    const { overview, title, name, release_date, first_air_date, original_language, genres, runtime } = content;
    const [profile, setProfile] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [review, setReview] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/${category}/${id}/credits?api_key=${apiKey}&language=ko-KR`
                );
                setProfile(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [category, id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/${category}/${id}/similar?api_key=${apiKey}&language=ko-KR&page=1`
                );
                setSimilar(response.data.results)
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [category, id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/${category}/${id}/reviews?api_key=${apiKey}&language=en-US`
                );
                setReview(response.data.results);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [category, id]);

    console.log(content)

    return (
        <>
            <ContentInfoBlock>
                <div className='wrapBasicInfo'>
                    <h2>기본 정보</h2>
                    <p className='moreOption'>더보기</p>
                </div>
                <p>{title || name}
                    <br />
                    {release_date && release_date.substr(0, 4)} {first_air_date && first_air_date.substr(0, 4)} ・ {original_language} ・ {genres && genres[0].name}
                    <br />
                    {runtime && Math.trunc(runtime / 60)}시간 {runtime && runtime % 60}분</p>
                <p className='wrapOverview'>{overview && overview}</p>
                <div style={{ width: "34rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>출연/제작</h2>
                <div className='wrapProfile'>
                    {profile.cast && profile.cast.map((c, index) => (
                        <Profile profile={c} key={index} count={index}></Profile>))}
                </div>
                <div style={{ width: "34rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>코멘트</h2>
                <div className='wrapComment'>
                    {review && review.map((r, index) => (
                        <Review review={r} key={index}></Review>
                    ))}
                </div>
                <div style={{ width: "34rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>비슷한 작품</h2>
                <div className='wrapSimilar'>
                    {similar && similar.map((s, index) => (
                        <Similar similar={s} key={index}></Similar>
                    ))}
                </div>

            </ContentInfoBlock>
        </>
    );
};

export default ContentInfo;