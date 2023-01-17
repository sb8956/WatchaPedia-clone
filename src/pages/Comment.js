import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Review from '../components/Review';
import leftArrow from '../img/icon_left_arrow.png';

const CommentBlock = styled.div`
    margin-top: 5rem;
    .wrapTitle{
        margin-left: 1rem;
        button{
            padding-left: 0;
            border: none;
            background: none;
            img{
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        h2{
            margin-top: 0rem;
        }
    }
    .wrapReivew{
        width: 40rem;
        margin: 1rem auto;
    }
`

const Comment = () => {
    let navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.review);

    return (
        <CommentBlock>
            <div className='wrapTitle'>
                <button onClick={() => { navigate(-1) }}><img src={leftArrow} alt='뒤로가기 버튼' /></button>
                <h2>코멘트</h2>
            </div>
            <div style={{ height: "1px", backgroundColor: "#00000020" }}></div>
            <div className='wrapReivew'>
                {location.state.review.length !== 0 && location.state.review.map((r, index) => (
                    <Review review={r} key={index}></Review>
                ))}
            </div>
        </CommentBlock>
    );
};

export default Comment;