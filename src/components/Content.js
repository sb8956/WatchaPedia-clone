import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
    padding: 0.5rem;
    .thumbnail {
        img{
            vertical-align: top;
            width: 200px;
            height: 300px;
            opacity: 1;
            object-fit: cover;
        }
    }

    .contents {

    }
`

const Content = ({ content }) => {
    const { title, year, country, rate, url, img } = content;

    return (
        <ContentBlock>
            {img && (<div className='thumbnail'>
                <a href={url}>
                    <img src={img} alt={title}></img>
                </a>
            </div>)}
            <div className='contents'>
                <h4>{title}</h4>
                <p>{year} . {country}</p>
                <p>평균★ {rate}</p>
            </div>
        </ContentBlock>
    );
};

export default Content;