
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Armchairs";
import { requestData } from "./Armchairs";
import ReserveArmchairs from "./ReserveArmchairs";
import Buyers from "./Buyers";
import styled from "styled-components";

export default function LastPage() {

    const {
        title,
        weekday,
        date
    } = requestData;

    return (
        <div>
            <header>
                <ResultTitle>Pedido feito com sucesso!</ResultTitle>
            </header>
            <main>
                <ResultBox>
                    <h2>Filme e sessão</h2>
                    <p>{title}</p>
                    <p>{weekday} {date}</p>
                </ResultBox>
                <ResultBox>
                    <h2>Ingressos</h2>
                    <ReserveArmchairs />
                </ResultBox>
                <ResultBox>
                    <h2>Comprador</h2>
                    <Buyers />
                </ResultBox>
                <Link to={'/'} style={{ textDecoration: 'none' }} >
                    <Button>
                        <button>Voltar pra home</button>
                    </Button>
                </Link>
            </main>
        </div>
    );
}

const ResultTitle = styled.div`
width: 100%;
height: 110px;
font-size: 24px;
background-color: #ffffff;
color: #247A6B;
display: flex;
justify-content: center;
align-items: center;
`;

const ResultBox = styled.div`
margin-left: 24px;
margin-bottom: 40px;

    h2{
        font-size: 24px;
        font-weight: 700;  
        color: #293845;              
        margin-bottom:8px;
    }

    p{
        font-size:22px;
        color:#293845;
        margin-bottom:4px;
    }
`;