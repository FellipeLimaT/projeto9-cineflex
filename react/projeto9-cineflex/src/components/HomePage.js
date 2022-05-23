import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Movies from './Movies'

export default function HomePage() {

    const [images, setImages] = useState([{}])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        promise.then((response) => {
            setImages(response.data)
        })
    }, []);

    return (
        <div>
            <header>
                <PageTitle>Selecione o filme</PageTitle>
            </header>
            <main>
                <ul>
                    <Movies showImages={images} />
                </ul>
            </main>
        </div>
    );
}

export const PageTitle = styled.div`
    width: 100%;
    height: 110px;
    font-size: 24px;
    font-weight: 400;
    background-color: #FFFFFF;
    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;
`;