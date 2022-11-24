import React from 'react';
import styled from 'styled-components';
import iconPlay from '../img/icon_play.png'

const VideoBlock = styled.div`
    position: relative;
    margin-right: 0.8rem;
    
        img{
            width: 8rem;
            height: 5rem;
            opacity: 1;
            object-fit: cover;
        }

    .videoBtn{
        position:absolute;
        width: 3rem;
        height: 3rem;
        top: 1rem;
        left: 2.5rem;
    }
    .videoDiv{
        position:absolute;
        width: 8rem;
        height: 5rem;
        background-color: #00000040;
    }
`

const Video = ({ video }) => {
    return (
        <VideoBlock>
            <div className='videoDiv'></div>
            <img className='videoBtn' src={iconPlay} alt='유튜브 플레이 버튼'></img>
            <img className='videoImg' src={`https://img.youtube.com/vi/${video.key}/0.jpg`} alt='유튜브 썸네일' />
        </VideoBlock>
    );
};

export default Video;