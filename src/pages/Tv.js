import React from 'react';
import styled from 'styled-components';
import List from '../components/List'

const Tv = () => {
    const MoviesBlock = styled.div`
        margin: 6rem 3rem;
    `

    const categories = [
        {
            name: 'airing_today',
            text: '오늘 방영 작품'
        },
        {
            name: 'on_the_air',
            text: '현재 방영 작품'
        },
        {
            name: 'popular',
            text: 'Top 인기 작품'
        },
        {
            name: 'top_rated',
            text: '평균 별점이 높은 작품'
        },
    ]

    return (
        <>
            <MoviesBlock>
                {categories.map(c => (
                    <List
                        key={c.name}
                        select="tv"
                        list={c.name}
                        listText={c.text}
                    >
                    </List>
                ))}
            </MoviesBlock>
        </>
    );
};

export default Tv;