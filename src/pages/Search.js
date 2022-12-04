import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Similar from '../components/Similar';
import SearchCont from '../components/SearchCont';

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
    height: 14.5rem;
    display: flex;
    flex-wrap: wrap;
    overflow-x: scroll;
    flex-direction: column;
    ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */}
`

const WrapTitle = styled.div`
    display: flex;
    margin-left: 3rem;
`

const MoreOption = styled.div`
    padding-right: 1.5rem;
    margin-left: auto;
`

const Search = () => {
    const [similar, setSimilar] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/436270/similar?api_key=${apiKey}&language=ko-KR&page=1`
                );
                setSimilar(response.data.results);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`
                );
                setSearch(response.data.results);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (
        <SearchBlock>
            <SearchResult>""의 검색결과</SearchResult>
            <SearchCategory>콘텐츠 인물</SearchCategory>
            <div style={{ height: "1px", backgroundColor: "#00000020" }} />
            <WrapContent>
                {similar && similar.map((s, index) => (
                    <Similar similar={s} key={index} />
                ))}
            </WrapContent>
            <div style={{ width: "34rem", height: "1px", backgroundColor: "#00000020" }} />
            <WrapTitle>
                <h3>영화</h3>
                <MoreOption style={{ textDecoration: 'none', color: "#FF2F6E", marginTop: "1rem" }}>더보기</MoreOption>
            </WrapTitle>
            <WrapContent>
                {search && search.map((se, index) => (
                    <SearchCont search={se} key={index}></SearchCont>
                ))}
            </WrapContent>
            <div style={{ width: "34rem", height: "1px", backgroundColor: "#00000020" }} />
            <WrapTitle>
                <h3>TV 프로그램</h3>
                <MoreOption style={{ textDecoration: 'none', color: "#FF2F6E", marginTop: "1rem" }}>더보기</MoreOption>
            </WrapTitle>
            <WrapContent>
                {search && search.map((se, index) => (
                    <SearchCont search={se} key={index}></SearchCont>
                ))}
            </WrapContent>
        </SearchBlock>
    );
};

export default Search;
