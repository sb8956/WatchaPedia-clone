import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const SearchContBlock = styled.div`
    width: 29rem;
    display: flex;

`

const Image = styled.div`
    position: relative;
        img{
            padding: 0.5rem;
            width: 4.5rem;
            height: 6.5rem;
            opacity: 1;
            object-fit: cover;
            border-radius: 0.2rem;
        }
`

const Content = styled.div`
    h4{
        margin-top: 2.5rem;
        margin-bottom: 0.2rem;
    }
    p{
        font-weight: bold;
        font-size: 0.9rem;
        color: #8C8C8C;
        margin:0;
    }
`

const SearchCont = ({ search }) => {
    const { id, poster_path, title, name, release_date, first_air_date, original_language } = search;

    return (
        <SearchContBlock>
            <Image>
                <Link to={"/contents/" + id}
                    state={{
                        category: title ? 'movie' : 'tv',
                        id: id
                    }}
                ><img src={poster_path ? IMAGE_URL + poster_path : ''} alt={title || name}></img></Link>
            </Image>
            <Content>
                {title && (<h4>{title}</h4>)}
                {name && (<h4>{name}</h4>)}
                {release_date && (<p>{release_date.substr(0, 4)} ・ {original_language}</p>)}
                {first_air_date && (<p>{first_air_date.substr(0, 4)} ・ {original_language}</p>)}
            </Content>
        </SearchContBlock>
    );
};

export default SearchCont;