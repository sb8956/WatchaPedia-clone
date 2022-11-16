import React from 'react';
import styled from 'styled-components';
import List from '../components/List'

const Movies = () => {
    const MoviesBlock = styled.div`
        margin: 0rem 3rem;
    `

    const categories = [
        {
            name: 'now_playing',
            text: '박스 오피스 순위'
        },
        {
            name: 'popular',
            text: 'Top 인기 작품'
        },
        {
            name: 'top_rated',
            text: '평균 평점이 가장 높은 작품'
        },
        {
            name: 'upcoming',
            text: '출시 예정작'
        },
    ]

    return (
        <>
            <MoviesBlock>
                {categories.map(c => (
                    <List
                        key={c.name}
                        list={c.name}
                        listText={c.text}
                    >
                    </List>
                ))}
            </MoviesBlock>
        </>
    );
};

export default Movies;