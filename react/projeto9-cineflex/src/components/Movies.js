import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function Movies({showImages}){
    return(
        showImages.map((info, index) => 
            <Link to={`/sessoes/${info.id}`} key={index}>
                <MovieBox>
                    <img src={info.posterURL} alt=''/>
                </MovieBox>
            </Link>
        )
    );
}

const MovieBox = styled.div`
    width: 145px;
    height: 209px;
    margin: 10px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;    

    img{
        width: 128px;
        height: 192px;
    }

    &:hover{
        cursor: pointer;
    }
`;