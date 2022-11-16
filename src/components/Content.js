import React from 'react';
import styled from 'styled-components';
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const ContentBlock = styled.div`
    padding: 0.5rem;

    .rank {
        position:absolute;
        background-color: #00000099;
        color: white;
        font-weight: bold;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.5rem;
        border-radius: 0.2rem;
        text-align: center;
        line-height: 1.5rem;
    }

    .thumbnail {
        position: relative;
        img{
            width: 15.8rem;
            height: 22.5rem;
            opacity: 1;
            object-fit: cover;
            border-radius: 0.2rem;
        }
    }

    .contents {
        h3{
            margin: 0.5rem 0;
        }
        p{
            margin: auto;
            font-size: 0.9rem;
        }
    }
`

const Content = ({ content, rank }) => {
    const { title, release_date, original_language, vote_average, poster_path, first_air_date, name } = content;

    return (
        <ContentBlock>
            {poster_path && (<div className='thumbnail'>
                <div className='rank'>{rank + 1}</div>
                <a href=''>
                    <img src={IMAGE_URL + poster_path} alt={title || name}></img>
                </a>
            </div>)}
            <div className='contents'>
                {title && (<h3>{title}</h3>)}
                {name && (<h3>{name}</h3>)}
                {release_date && (<p>{release_date.substr(0, 4)} ・ {original_language}</p>)}
                {first_air_date && (<p>{first_air_date.substr(0, 4)} ・ {original_language}</p>)}
                <p>평균★ {vote_average}</p>
            </div>
        </ContentBlock>
    );
};

export default Content;