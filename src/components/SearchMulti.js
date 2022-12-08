import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import no_img from '../img/no_img.png';

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const SearchMultiBlock = styled.div`
    margin: 0rem 1rem 2rem 0;
        img{
            width: 12rem;
            height: 18rem;
            border-radius: 0.2rem;
        }
        .multiTitle{
            width: 8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: bold;
        }
        .multiAvg{
            font-size: 0.85rem;
            color: #787878;
            font-weight: 500;
        }
        .multiCatgegory{
            font-size: 0.8rem;
            color: #B5B5B5;
            font-weight: 500;
        }

    `

const SearchMulti = ({ multi }) => {

    return (
        <SearchMultiBlock>
            <Link to={"/contents/" + multi.id}
                state={{
                    category: multi.title ? 'movie' : 'tv',
                    id: multi.id
                }}><img src={multi.poster_path ? IMAGE_URL + multi.poster_path : no_img} alt={multi.title || multi.name} />
            </Link>
            <div className='multiTitle'>{multi.title || multi.name}</div>
            <div className='multiAvg'>{multi.release_date && (multi.release_date).substr(0, 4)}{multi.first_air_date && (multi.first_air_date).substr(0, 4)} ・ {multi.original_language}</div>
            <div className='multiCategory'>{multi.title ? '영화' : 'TV 프로그램'}</div>
        </SearchMultiBlock>
    );
};

export default SearchMulti;
