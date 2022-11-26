import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';
import logoOpa from '../img/logo-opa.png';

const TitleBlock = styled.div`
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 1;
    .noOpa{
        height: 4rem;
        display: flex;
        background-color: white;
        
    
        img{
            padding-left: 3rem;
            margin-top: 1rem;
            width: 10rem;
        }
        .category{
            margin-top: 1.5rem;
            padding-left: 4rem;
            color: black;
            font-weight: bold;
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
    }

    .opa{
        display: flex;
        position: absolute;
        background-color: transparent;
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 1;
        
        img{
            padding-left: 3rem;
            margin-top: 1rem;
            width: 10rem;
        }
        .category{
            margin-top: 1.5rem;
            padding-left: 4rem;
            color: #c6c7c4;
            font-weight: bold;
        }
        .searchInput{
            
            padding: 0 1rem;
            margin-top: 0.7rem;
            width: 15rem;
            height: 2.5rem;
            ::placeholder {
                text-overflow: ellipsis;
                font-size: 0.9rem;
                color: #c6c7c4;
            };
            margin-left: auto; //display:flex일때 float:right 대신 margin-left:auto사용
            margin-right: 2rem;
            border: 0.5px solid #c6c7c4 ;
            background-color: #00000050;
        }
        .loginBtn{
            margin-right: 2rem;
            border:none;
            color: #c6c7c4;
            background: none;
        }
        .signupBtn{
            color: #c6c7c4;
            font-weight: bold;
            margin-right: 3rem;
            margin-top: 1rem;
            padding: 0 1rem;
            border:none;
            background: none;
            border: 0.5px solid #c6c7c4;
            border-radius: 0.3rem;
            height: 2rem;
        }
    } 
`

const Title = () => {
    const location = useLocation();
    const [scroll, setScroll] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setScroll(false);
        } else {
            setScroll(true);
        }

    };

    return (
        <>
            <TitleBlock>
                <div className={location.pathname.includes('/content') && scroll ? 'opa' : 'noOpa'}>
                    <Link to="/"><img src={location.pathname.includes('/content') && scroll ? logoOpa : logo} alt='로고 이미지'></img></Link>
                    <Link to="/" style={{ textDecoration: "none" }}><p className='category'>영화</p></Link>
                    <Link to="/tv" style={{ textDecoration: "none" }}><p className='category'>TV</p></Link>
                    <input className='searchInput' placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요. '></input>
                    <button className='loginBtn'>로그인</button>
                    <button className='signupBtn'>회원가입</button>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
            </TitleBlock>
        </>
    );
};

export default Title;