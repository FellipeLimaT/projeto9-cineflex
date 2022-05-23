import React from "react";
import styled from "styled-components";

export default function FormFields({ seatIDs, getCpf, user, cpf, getUser }) {

    return (
        seatIDs.map((info, index) =>
            <InputBox key={index}>

                <label>Nome do comprador:</label>
                <input type="text" value={user[info]}
                    placeholder="Digite seu nome..."
                    onChange={e => getUser(index, e)} required
                />

                <label>CPF do comprador:</label>
                <input maxLength={11}
                    minLength={11}
                    type="text"
                    value={cpf[info]}
                    onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                    placeholder="Digite seu CPF..."
                    onChange={getCpf} required
                />
            </InputBox>
        )
    );
}

const InputBox = styled.div`
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;    
`;