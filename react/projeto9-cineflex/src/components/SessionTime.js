import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageTitle } from "./HomePage";
import Loading from "./Loading";
import SessionDate from "./SessionDate";
import styled from "styled-components";

export default function SessionTime(){
    
    const { idFilme } = useParams();
    const [data, setData] = useState(false);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then((response) => {
            setData(response.data);            
        });
    },[data.length, idFilme]);

    if (!data) {
        console.log(data)
        return <Loading />;        
    }
    console.log(data)
    return(
        <div>  
            <header>
                <PageTitle>Selecione o horário</PageTitle>
            </header>
            <main>
                <SessionDate sessionInfo={data} />
            </main>

            <div className="spaceFooter"></div>
            <footer>
                <MovieImageBox>
                    <img src={data.posterURL} alt="Movie Image" />
                </MovieImageBox>
                <MovieTitle>
                    <p>{data.title}</p>
                </MovieTitle>
            </footer>
        </div>
    );
}

export const MovieImageBox = styled.div`
    width: 64px;
    height: 89px;
    margin: 0 14px 0 10px;
    border-radius: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;

    img{
        width: 48px;
        height: 72px;
    }    
`;

export const MovieTitle = styled.div`
    height: 40px;
    font-size: 26px;
    color: #293845;
    flex-wrap: wrap;    
`;