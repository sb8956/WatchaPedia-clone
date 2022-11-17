import React from 'react';
import styled from 'styled-components';

const EvalBlock = styled.div`
    margin-top: 5rem;
    background-color: #101113;
    height: 4rem;
    text-align: center;

    .wrapStar{
        color: #d1d1d2;
        line-height: 4rem;
        font-weight: bold;
        font-size: 1.2rem;
        display:inline;

    }

    .star{
        color: #f10654;
        display:inline;
    }
`

const FooterBlock = styled.div`
    background-color: #1c1d1f;
    padding-left: 3.5rem;
    padding-top: 1.4rem;
    padding-bottom: 2rem;
    font-size: 0.85rem;

    .topText{
        color:#959597;
        margin: 0.2rem 0;
        font-weight: 600;
    }
    .bottomText{
        color: #848485;
        margin: 0.25rem 0;
        font-weight: 600;
    }
`

const Footer = () => {
    return (
        <>
            <EvalBlock>
                <div className='wrapStar'>지금까지 <div className='star'>★ 675,296,504 개의 평가가</div> 쌓였어요.</div>
            </EvalBlock>
            <FooterBlock>
                <div className='wrapFooter'>
                    <p className='topText'>서비스 이용약관 | 개인정보 처리방침 | 회사 안내</p>
                    <br />
                    <p className='topText'>고객센터 | cs@watchapedia.co.kr, 02-515-9985</p>
                    <p className='topText'>광고 문의 | ad@watcha.com</p>
                    <p className='topText'>제휴 및 대외 협력 | https://watcha.team/contact</p>
                    <br />
                    <p className='bottomText'>주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩 3층</p>
                    <p className='bottomText'>사업자 등록 번호 211-88-66013</p>
                    <p className='bottomText'>© 2022 by WATCHA, Inc. All rights reserved.</p>
                </div>
            </FooterBlock>
        </>
    );
};

export default Footer;