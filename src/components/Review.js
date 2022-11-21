import React from 'react';
import styled from 'styled-components';

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const ReviewBlock = styled.div`
    background-color: #F2F2F2;
    height: 17rem;
    margin: 0 0.7rem 1rem 0;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    .authorProfile{
        display: flex;
    }

    .reviewImg{
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        padding: 1rem 0rem;
    }
    .reviewAuthor{
        padding: 1.3rem 0.5rem;
    }
    .reviewRate{
        margin-left: auto; //display:flex일때 float:right 대신 margin-left:auto사용
        margin-top: 1rem; 
        margin-right: 0.5rem;
        padding: 0 0.3rem;
        background-color: white;
        width: 3rem;
        height: 1.5rem;
        border: 1px solid #F0F0F0;
        border-radius: 2rem;
        text-align: center;
        line-height: 1.5rem;
        font-size: 0.9rem;
    }
    .reviewContent{
        padding: 1rem 0.5rem 1rem 0;
        margin-bottom: 1rem;
        margin-right: 0.5rem;
        width: 15.1rem;
        height: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }

    .reviewGood{
        padding: 0.5rem 0.5rem 0.5rem 0;
    }

    .reviewBtn{
        padding: 0.5rem 0.5rem 0.5rem 0;
        color: #FF4D7F;
    }
`

const Review = ({ review }) => {
    const { author, content, author_details } = review;
    console.log(review);

    return (
        <ReviewBlock>
            <div className='authorProfile'>
                <img src={IMAGE_URL + author_details.avatar_path} className='reviewImg'></img>
                <div className='reviewAuthor'>{author}</div>
                <div className='reviewRate'>★ {author_details.rating / 2}</div>
            </div>
            <div style={{ width: "15.5rem", height: "1px", backgroundColor: "#00000020" }}></div>
            <div className='reviewContent'>{content}</div>
            <div style={{ width: "15.5rem", height: "1px", backgroundColor: "#00000020" }}></div>
            <div className='reviewGood'> 👍 {author_details.rating} </div>
            <div style={{ width: "15.5rem", height: "1px", backgroundColor: "#00000020" }}></div>
            <div className='reviewBtn'>좋아요</div>
        </ReviewBlock>
    );
};

export default Review;