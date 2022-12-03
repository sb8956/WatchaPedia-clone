import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Similar from '../components/Content';

const apiKey = process.env.REACT_APP_API_KEY;

const SearchBlock = styled.div`

`

const SearchResult = styled.div`
    margin-top: 4rem;
    padding-top: 1rem;
    padding-left: 3.5rem;
    padding-bottom: 1rem;
    font-weight: bold;
    color: #74747A;
    background-color: #F7F7F7;
`

const SearchCategory = styled.div`
    margin-left: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const WrapContent = styled.div`
    display: flex;
`

const Search = () => {
    const [similar, setSimilar] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/1230/similar?api_key=${apiKey}&language=ko-KR&page=1`
                );
                setSimilar(response.data.results)
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    console.log(similar);

    return (
        <SearchBlock>
            <SearchResult>""의 검색결과</SearchResult>
            <SearchCategory>콘텐츠 인물</SearchCategory>
            <WrapContent>
                <div className='wrapSimilar'>
                    {similar && similar.map((s, index) => (
                        <Similar similar={s} key={index} />
                    ))}
                </div>
            </WrapContent>
        </SearchBlock>
    );
};

export default Search;
