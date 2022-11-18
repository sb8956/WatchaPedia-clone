import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Profile from './Profile';

const apiKey = process.env.REACT_APP_API_KEY;

const ContentInfoBlock = styled.div`
    margin-top: 10rem;

    .wrapProfile{
        overflow-x: scroll;
        height: 15rem;
    }
`

const ContentInfo = ({ content, category, id }) => {
    const { overview, title, name } = content;
    const [profile, setProfile] = useState([]);

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
    }, []);

    console.log(profile.cast)

    return (
        <>
            <ContentInfoBlock>
                <h2>기본 정보</h2>
                <p>{title || name}</p>
                <p>{overview && overview}</p>
                <div style={{ width: "45rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>출연/제작</h2>
                <div className='wrapProfile'>
                    {profile.cast && profile.cast.map(c => (
                        <Profile profile={c}></Profile>))}
                </div>
                <div style={{ width: "45rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>코멘트</h2>
                <div style={{ width: "45rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>이 작품이 담긴 컬렉션</h2>
                <div style={{ width: "45rem", height: "1px", backgroundColor: "#00000020" }}></div>
                <h2>비슷한 작품</h2>

            </ContentInfoBlock>
        </>
    );
};

export default ContentInfo;