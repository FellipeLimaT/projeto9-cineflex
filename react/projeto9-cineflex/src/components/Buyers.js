import React from "react";
import { requestData } from "./Armchairs";
import styled from "styled-components";

export default function Buyers(){

    const {
        name,
        cpf,
    } = requestData;
    
    let arr = [];

    for(let i = 0; i < name.length;i++){
        arr[i] = {}
        arr[i].name = name[i]
        arr[i].cpf = cpf[i]
    }

    return(
        arr.map((info, index)=> 
            <ConfirmText key={index}>
                <p>{info.name}</p>
                <p>CPF: {formatCPF(info.cpf)}</p>  
            </ConfirmText>     
            )    
    );
}

function formatCPF(cpf){
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

const ConfirmText = styled.div`
    margin-bottom: 10px;
`