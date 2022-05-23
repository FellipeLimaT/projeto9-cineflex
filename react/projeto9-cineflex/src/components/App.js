import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './HomePage';
import SessionTime from './SessionTime';
import Armchairs from './Armchairs';
import FinishPage from './FinishPage';

export default function App(){
 return(
     <BrowserRouter>
        <header>
            <Top>CINEFLEX</Top>
        </header>
        
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sessoes/:idFilme' element={<SessionTime />} />
            <Route path="/assentos/:idSessao" element={<Armchairs />} />
            <Route path="/sucesso" element={<FinishPage />} />
        </Routes>
     </BrowserRouter>
 );
}

const Top = styled.div`
    width: 100%;
    height: 66px;
    font-size: 34px;
    font-weight: 400;
    background-color: #C3CFD9;
    color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
`;