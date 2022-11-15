import React from 'react';
import styled from 'styled-components';
import List from '../components/List'

const Movies = () => {
    const MoviesBlock = styled.div`
        margin: 0rem 3rem;
    `

    const sampleList = {
        category: '현재 상영작'
    }

    return (
        <>
            <MoviesBlock>
                <List list={sampleList} />
                <List list={sampleList} />
                <List list={sampleList} />
            </MoviesBlock>
        </>
    );
};

export default Movies;