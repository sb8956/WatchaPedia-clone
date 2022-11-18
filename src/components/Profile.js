import React from "react";
import styled from "styled-components";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const ProfileBlock = styled.div`
    padding-left: 3rem;
    display: flex;
    img{
        width: 6rem;
        height: 4rem;
        border-radius: 0.5rem;
        margin-top: 0.5rem;
    }
    .profileInfo{
        display: block;
        padding-left: 1rem;
    }
    .name{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }
    .character{
        font-size: 0.5rem;
        color: gray;
    }
`

const Profile = ({ profile }) => {
    return (
        <ProfileBlock>
            <img className="profileImg" src={profile.profile_path ? IMAGE_URL + profile.profile_path : ''}></img>
            <div className="profileInfo">
                <p className="name">{profile.name}</p>
                <p className="character">{profile.character}</p>
            </div>
        </ProfileBlock>
    );
};

export default Profile;