import React from 'react';
import styled from 'styled-components';
import leftArrow from '../img/icon_left_arrow.png';
import { useLocation, useNavigate } from 'react-router-dom';


const OverViewBlock = styled.div`
    margin-top: 5rem;
    .wrapTitle{
        margin-left: 1rem;
        button{
            padding-left: 0;
            border: none;
            background: none;
            img{
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        h2{
            margin-top: 0rem;
        }
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
    let navigate = useNavigate();
    const location = useLocation();
    const { original_title, name, release_date, last_air_date, runtime, episode_run_time, genres, production_countries, origin_country, overview } = location.state.content;
    console.log(location.state.content);

    return (
        <OverViewBlock>
            <div className='wrapTitle'>
                <button onClick={() => { navigate(-1) }}><img src={leftArrow} alt='뒤로가기 버튼' /></button>
                <h2>기본 정보</h2>
            </div>
            <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
            <div className='wrapOverview'>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>원제</p>
                    <p className='subContent'>{original_title || name}</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>제작 연도</p>
                    <p className='subContent'>{(release_date && release_date.substr(0, 4)) || (last_air_date && last_air_date.substr(0, 4))}</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>국가</p>
                    <p className='subContent'>{(origin_country && origin_country[0]) || (production_countries && production_countries[0].name)}</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>장르</p>
                    <p className='subContent'>{genres.map(g => (g.name + ' '))}</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <div className='wrapSubTitle'>
                    <p className='subTitle'>상영 시간</p>
                    <p className='subContent'>{(runtime && Math.trunc(runtime / 60)) || (episode_run_time && Math.trunc(episode_run_time / 60))}시간 {(runtime && runtime % 60) || (episode_run_time && episode_run_time % 60)}분</p>
                </div>
                <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
                <p className='subTitle'>내용</p>
                <p>{overview}</p>
            </div>
        </OverViewBlock >
    );
};

export default Overview;