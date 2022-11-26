import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const OverViewBlock = styled.div`
    margin-top: 8rem;
    .wrapTitle{
        margin-left: 1rem;
    }
    .wrapSubTitle{
        display: flex;
    }
    .subTitle{
        width: 5rem;
    }
    .subContent{
        margin-left: 7rem;
    }
    .wrapOverview{
        width: 45rem;
        margin: 0 auto;
    }
    .subTitle{
        color: #909090;
        font-weight: bold;
    }
`

const Overview = () => {
    const location = useLocation();
    const { original_title, release_date, runtime, genres, production_countries, overview } = location.state.content;
    console.log(location.state.content);

    return (
        <OverViewBlock>
            <div className='wrapTitle'>
                <h2>기본 정보</h2>
            </div>
            <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
            <div className='wrapOverview'>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>원제</p>
                    <p className='subContent'>{original_title}</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>제작 연도</p>
                    <p className='subContent'>{release_date.substr(0, 4)}</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>국가</p>
                    <p className='subContent'>{production_countries[0].name}</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>장르</p>
                    <p className='subContent'>{genres.map(g => (g.name + ' '))}</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>상영 시간</p>
                    <p className='subContent'>{runtime && Math.trunc(runtime / 60)}시간 {runtime && runtime % 60}분</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <p className='subTitle'>내용</p>
                <p>{overview}</p>
            </div>
        </OverViewBlock >
    );
};

export default Overview;