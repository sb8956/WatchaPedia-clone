import React from "react";
import styled from "styled-components";
import no_img from '../img/no_img.png';

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const ProfileBlock = styled.div`
    width: 17rem;
    display: flex;

    .profileImg{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0.5rem;
    }
    .profileInfo{
        display: block;
        padding-left: 1rem;
    }
    .name{
        margin-bottom: 0.2rem;
        margin-top: 0.5rem;
    }
    .character{
        font-size: 0.9rem;
        color: gray;
        margin-top: 0.5rem;
    }
`

const Profile = ({ profile, count }) => {
    return (
        <ProfileBlock>
            <img className="profileImg" src={profile.profile_path ? IMAGE_URL + profile.profile_path : no_img} alt={profile.name}></img>
            <div className="profileInfo">
                <p className="name">{profile.name}</p>
                <p className="character">{profile.character}</p>
                {(count + 1) % 3 !== 0 && <div style={{ width: "11rem", height: "1px", backgroundColor: "#00000020" }}></div>}
            </div>
        </ProfileBlock>
    );
};

export default Profile;