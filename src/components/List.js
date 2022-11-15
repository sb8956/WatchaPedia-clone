import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const ListBlock = styled.div`
        display:flex;
        overflow-x: scroll;
    `
const sampleContent = {
    title: '제목',
    year: '2022',
    country: '국가',
    rate: '평점',
    url: 'https://google.com',
    img: 'https://via.placeholder.com/160'
}

const List = ({ list }) => {
    const { category } = list;

    return (
        <>
            <h2>{category}</h2>
            <ListBlock>
                <Content content={sampleContent} />
                <Content content={sampleContent} />
                <Content content={sampleContent} />
                <Content content={sampleContent} />
                <Content content={sampleContent} />
                <Content content={sampleContent} />
                <Content content={sampleContent} />
                <Content content={sampleContent} />
                <Content content={sampleContent} />
                <Content content={sampleContent} />

            </ListBlock>
        </>
    );
};

export default List;