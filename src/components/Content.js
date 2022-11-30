import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import no_img from '../img/no_img.png';

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
        h4{
            margin: 0.3rem 0;
        }
        p{
            margin: auto;
            font-size: 0.9rem;
        }
    }

    .average{
        color:  #555765;
    }
`

const Content = ({ content, rank }) => {
    const { title, id, release_date, original_language, vote_average, poster_path, first_air_date, name } = content;

    return (
        <ContentBlock>
            <div className='thumbnail'>
                <div className='rank'>{rank + 1}</div>
                <Link to={"/content/" + id}
                    state={{
                        category: title ? 'movie' : 'tv',
                        id: id
                    }}
                ><img src={poster_path ? IMAGE_URL + poster_path : no_img} alt={title || name}></img></Link>
            </div>
            <div className='contents'>
                {title && (<h4>{title}</h4>)}
                {name && (<h4>{name}</h4>)}
                {release_date && (<p>{release_date.substr(0, 4)} ・ {original_language}</p>)}
                {first_air_date && (<p>{first_air_date.substr(0, 4)} ・ {original_language}</p>)}
                <p className='average'>평균★ {vote_average}</p>
            </div>
        </ContentBlock>
    );
};

export default Content;
