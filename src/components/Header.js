import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png'

const TitleBlock = styled.div`
    height: 4rem;
    display: flex;
    img{
        padding-left: 3rem;
        margin-top: 1rem;
        width: 10rem;
    }
    .category{
        margin-top: 1.5rem;
        padding-left: 4rem;
    }
    .searchInput{
        padding: 0 1rem;
        margin-top: 0.7rem;
        width: 15rem;
        height: 2.5rem;
        ::placeholder {
            text-overflow: ellipsis;
            font-size: 0.9rem;
        };
        margin-left: auto; //display:flex일때 float:right 대신 margin-left:auto사용
        margin-right: 2rem;
        border:none;
        background-color: #00000009;
    }
    .loginBtn{
        margin-right: 2rem;
        border:none;
        background: none;
    }
    .signupBtn{
        font-weight: bold;
        margin-right: 3rem;
        margin-top: 1rem;
        padding: 0 1rem;
        border:none;
        background: none;
        border: 1px solid #00000050;
        border-radius: 0.3rem;
        height: 2rem;
    }
`

const Title = () => {
    return (
        <>
            <TitleBlock>
                <a href><img src={logo}></img></a>
                <a href><p className='category'>영화</p></a>
                <a href><p className='category'>TV</p></a>
                <input className='searchInput' placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요. '></input>
                <button className='loginBtn'>로그인</button>
                <button className='signupBtn'>회원가입</button>
            </TitleBlock>
            <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
        </>
    );
};

export default Title;