import React from 'react';
import styled from 'styled-components';
import ad_img from '../img/ad_img.png'

const ContentAdBlock = styled.div`
    background-color: white;
    /* margin: 1.5rem 15rem;
    padding: 1rem 0 1rem 1.5rem; */
    margin-left: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #00000020;
    height: 17rem;

    .adImg{
        border-radius: 0.5rem 0.5rem 0 0;
        width:100%;
	    height:auto;
    }
    .wrapPayBook{
        margin-left: 0.7rem;
        margin-top: 0.7rem;
    }
    .payBookTitle{
        color: black;
        margin: 0 0;
    }
    .payBookCont{
        margin: 0rem;
        font-size: 0.9rem;
        color: #787878;
    }
    .payBookAd{
        color: black;
        margin: 0rem;
        margin: 0.5rem 0rem;
        font-size: 0.8rem;
        font-weight: bold;
    }
    button{
        width: 5rem;
        margin-left: auto;
        height: 1.5rem;
        color: white;
        background-color: #FF2F6E;
        border: none;
        border-radius: 0.2rem;
        margin-top: 1.5rem;
        margin-right: 1rem;
    }
`

const ContentAd = () => {
    return (
        <ContentAdBlock><a style={{ textDecoration: 'none' }} href='https://ui.vpay.co.kr/s/JxQb/202?cmpid=pbmovie-watcha_App_paybooc_typeA_221111&browser_open_type=external'>
            <img src={ad_img} alt='광고성 이미지' className='adImg'></img>
            <div style={{ display: 'flex' }}>
                <div className='wrapPayBook'>
                    <p className='payBookTitle'>페이북 영화 예매 서비스</p>
                    <p className='payBookCont'>페이북 예매 시 팝콘&음료까지!</p>
                    <p className='payBookAd'>페이북 영화 ・ AD</p>
                </div>
                <button>보러가기</button>
            </div></a>
        </ContentAdBlock>
    );
};

export default ContentAd;