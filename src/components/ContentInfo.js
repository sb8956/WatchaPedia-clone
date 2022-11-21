import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Profile from './Profile';
import Similar from './Similar';

const apiKey = process.env.REACT_APP_API_KEY;

const ContentInfoBlock = styled.div`
    width: 35rem;
    background-color: white;
    margin: 5.5rem 15rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: 1px solid #00000020;

    .wrapBasicInfo{
        display: flex;
    }

    .moreOption{
        margin-left: auto;
        color: #FF2F6E;
    }

    .wrapOverview{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .wrapProfile{
        overflow-x: scroll;
        height: 15rem;
        display: grid;
    }

    .wrapSimilar{
        overflow-y: scroll;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const ContentInfo = ({ content, category, id }) => {
    const { overview, title, name } = content;
    console.log()
    const [profile, setProfile] = useState([]);
    const [similar, setSimilar] = useState([]);

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
    }, [id]);

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
    }, [id]);

    return (
        <>
            <ContentInfoBlock>
                <div className='wrapBasicInfo'>
                    <h2>기본 정보</h2>
                    <p className='moreOption'>더보기</p>
                </div>
                <p>{title || name}</p>
                <p className='wrapOverview'>{overview && overview}</p>
                <div style={{ width: "35rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>출연/제작</h2>
                <div className='wrapProfile'>
                    {profile.cast && profile.cast.map((c, index) => (
                        <Profile profile={c} key={index}></Profile>))}
                </div>
                <div style={{ width: "35rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>코멘트</h2>

                <div style={{ width: "35rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>이 작품이 담긴 컬렉션</h2>
                <div style={{ width: "35rem", height: "1px", backgroundColor: "#00000020" }}></div>
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