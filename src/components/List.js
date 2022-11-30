import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Content from './Content';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const ListBlock = styled.div`
    display:flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
`

const List = ({ list, listText, select }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/${select}/${list}?api_key=${apiKey}&language=ko-KR`
                );
                setMovies(response.data.results);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [select, list]);

    return (
        <>
            <h2 style={{ paddingLeft: "0.5rem", marginTop: "3rem", marginBottom: "0.1rem" }}>{listText}</h2>
            <ListBlock>
                {movies.map((m, index) => (
                    <Content key={m.id} content={m} rank={index} />

                ))}
            </ListBlock>
        </>
    );
};

export default List;
