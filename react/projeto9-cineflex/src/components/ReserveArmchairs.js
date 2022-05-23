import React from "react";
import { requestData } from "./Armchairs";

export default function ReserveArmchairs(){
    const {
        seats
    } = requestData;

    return(
        seats.map((info, index) => 
            <p key={index}>Assento {parseInt((info+1), 10)}</p>
        )
    );
}