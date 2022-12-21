import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';
import logoOpa from '../img/logo-opa.png';
import iconSearch from '../img/icon_search.png';
import Modal from '../components/Modal';
import { useScroll } from '../components/ScrollY';

const TitleBlock = styled.div`
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        z-index: 1;

        .search{
            position: relative;
            margin-left: auto; //display:flex일때 float:right 대신 margin-left:auto사용
            margin-right: 2rem;
        }
        .iconSearch{
            position : absolute;
            width: 17px;
            top: 1.4rem;
            left: 12px;
            margin: 0;
        }
    .noOpa{
        height: 4rem;
        display: flex;
        background-color: white;
    
        .iconLogo{
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
            padding: 0 1rem 0 2rem;
            margin-top: 0.7rem;
            width: 15rem;
            height: 2.5rem;
            
            border:none;
            background-color: #00000009;
            ::placeholder {
                text-overflow: ellipsis;
                font-size: 0.9rem;
            };
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
        
        .iconLogo{
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
            color: #c6c7c4;
            padding: 0 1rem 0 2rem;
            margin-top: 0.7rem;
            width: 15rem;
            height: 2.5rem;
            ::placeholder {
                text-overflow: ellipsis;
                font-size: 0.9rem;
                color: #c6c7c4;
            };
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
    .loginLogo{
        width: 200px;
    }
    .loginTitle{
        font-weight: bolder;
        font-size: 17px;
        margin-bottom: 2rem;
    }
    .loginInput{
        width: 20rem;
        height: 2.5rem;
        margin: 0.3rem;
        background-color: #F5F5F5;
        border: none;
        border-radius: 0.3rem;
        ::placeholder{
            font-size: 15px;
            padding-left: 0.4rem;
        }
    }
    .loginButton{
        width: 20rem;
        height: 2.5rem;
        text-align: center;
        background-color: #FF2F6E;
        border-radius: 0.3rem;
        border: none;
        color: white;
        font-size: 15px;
        font-weight: bolder;
        margin-top: 1rem;
    }
    .findPw{
        color: #FF2F6E;
        margin-bottom: 0.5rem;
    }
    .noAccount{
        color:  #8C8C8C;
    }
    .signUp{
        color: #FF2F6E;
        margin-left: 4px;
    }
    .or{
        color:  #8C8C8C;
        font-size: 14px;
        margin: 0 1rem;
    }
    .circle{
        width: 45px;
        height: 45px;
        border: 1px solid #E5E6E8;
        border-radius: 100%;
        margin: 2rem 0.5rem;
    }
    .loginTip{
        color: #8D8E8F;
        background-color: #F7F7F7;
        height: 50px;
        padding-top: 10px;
        border-radius: 0.2rem;
        margin: 1rem;
    }
`

const Title = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scroll, setScroll] = useState(true);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signModalOpen, setSignModalOpen] = useState(false);
    const { scrollY } = useScroll();

    const [clicked, setClicked] = useState(false);

    const openModal1 = () => {
        setLoginModalOpen(true);
    };

    const closeModal1 = () => {
        setLoginModalOpen(false);
        setClicked(false);
    };

    const openModal2 = () => {
        setSignModalOpen(true);
    };

    const closeModal2 = () => {
        setSignModalOpen(false);
        setClicked(false);
    };


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

    const handleOnKeyPress = (e) => {

        if (e.key === 'Enter') {
            e.preventDefault();
            navigate(`/search/${e.target.value}`, { state: { search: e.target.value } });
        }
    }

    return (
        <>
            <TitleBlock>
                <div className={location.pathname.includes('/detail') && scroll ? 'opa' : 'noOpa'}>
                    <Link to="/"><img className='iconLogo' src={location.pathname.includes('/detail') && scroll ? logoOpa : logo} alt='로고 이미지' /></Link>
                    <Link to="/" style={{ textDecoration: "none" }}><p className='category'>영화</p></Link>
                    <Link to="/tv" style={{ textDecoration: "none" }}><p className='category'>TV</p></Link>
                    <div className='search'>
                        <input onKeyPress={handleOnKeyPress} className='searchInput' placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요. ' />
                        <img className='iconSearch' src={iconSearch} alt="검색 아이콘"></img>
                    </div>
                    <button className='loginBtn' onClick={openModal1}>로그인</button>
                    <Modal open={loginModalOpen} close={closeModal1}>
                        <img className='loginLogo' src={logo} alt='로고 이미지'></img>
                        <p className='loginTitle'>로그인</p>
                        <input className='loginInput' placeholder='이메일'></input>
                        <input className='loginInput' placeholder='비밀번호'></input>
                        <button className='loginButton'>로그인</button>
                        <p className='findPw'>비밀번호를 잃어버리셨나요?</p>
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <p className='noAccount'>계정이 없으신가요?</p>
                            <p className='signUp' onClick={openModal2}>회원가입</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <div style={{ width: "9rem", height: "1px", backgroundColor: "#00000020", marginTop: "0.5rem" }} />
                            <p className='or'>OR</p>
                            <div style={{ width: "9rem", height: "1px", backgroundColor: "#00000020", marginTop: "0.5rem" }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                        </div>
                        <div className='loginTip'>TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.</div>
                    </Modal>
                    <button className='signupBtn' onClick={openModal2}>회원가입</button>
                    <Modal open={signModalOpen} close={closeModal2}></Modal>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }} />
            </TitleBlock>
        </>
    );
};

export default Title;
