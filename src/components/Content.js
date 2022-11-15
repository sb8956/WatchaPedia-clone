import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
    padding: 0.5rem;

    .rank {
        position:absolute;
        background-color: #00000099;
        color: white;
        font-weight: bold;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.5rem;
        border-radius: 0.2rem;
        text-align: center;
        line-height: 1.5rem;
    }

    .thumbnail {
        position: relative;
        img{
            width: 15.8rem;
            height: 22.5rem;
            opacity: 1;
            object-fit: cover;
            border-radius: 0.2rem;
        }
    }

    .contents {
        h3{
            margin: 0.5rem 0;
        }
        p{
            margin: auto;
            font-size: 0.9rem;
        }
    }
`

const Content = ({ content }) => {
    const { id, title, year, country, rate, url, img } = content;

    return (
        <ContentBlock>
            {img && (<div className='thumbnail'>
                <div className='rank'>{id}</div>
                <a href={url}>
                    <img src={img} alt={title}></img>
                </a>
            </div>)}
            <div className='contents'>
                <h3>{title}</h3>
                <p>{year} · {country}</p>
                <p>평균★ {rate}</p>
            </div>
        </ContentBlock>
    );
};

export default Content;