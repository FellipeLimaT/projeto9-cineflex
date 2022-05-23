import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function SessionDate({ sessionInfo }) {

    return (
        sessionInfo.days.map((info, index) =>
            <div key={index}>
                <h3>{`${info.weekday} - ${info.date}`}</h3>
                <TimesBox>
                    <Link to={`/assentos/${info.showtimes[0].id}`} style={{ textDecoration: 'none' }} >
                        <HourBox>
                            <h4>{`${info.showtimes[0].name}`}</h4>
                        </HourBox>
                    </Link>
                    <Link to={`/assentos/${info.showtimes[1].id}`} style={{ textDecoration: 'none' }} >
                        <HourBox>
                            <h4>{`${info.showtimes[1].name}`}</h4>
                        </HourBox>
                    </Link>
                </TimesBox>
            </div>
        ) 
    );
}

const TimesBox = styled.div`    
    display: flex;
    margin: 22px;
`;

const HourBox = styled.div`
    width: 83px;
    height: 43px;
    margin-right: 8px;
    margin-bottom: 23px;
    background-color: #E8833A;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;    
`;