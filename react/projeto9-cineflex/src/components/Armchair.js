import React from "react";

export default function Chair({armchairInfo,armchairStatus}){   

    const {
        clickedIndex,
        setClickedIndex,
        setSeatIDs,
        seatIDs
    } = armchairStatus
    
    const actionClick = (index, a) => () => {
        setClickedIndex(state => ({
            ...state,
            [index]: !state[index]
        }));
        if(seatIDs.includes(a)){
            window.confirm('Você quer cancelar a reserva deste assento?') ? 
            onConfirm("confirm",a) : onCancel("cancel",index)
        }else{
            setSeatIDs([...seatIDs,a]);
        }
    };

    function onConfirm(check, a){
        if(check === 'confirm'){
            seatIDs.splice(seatIDs.indexOf(a),1);
            setSeatIDs([...seatIDs]);
        }
    }

    function onCancel(check, index){
        clickedIndex[index] = false;
        return;
    }

    function unavailable(){
        alert('Esse assento não está disponível!');
    }
    
    return(
        armchairInfo.seats.map((info,index)=>
            <div key={index} className={`seat ${clickedIndex[index] ? 'selected': null} ${info.isAvailable ? null : 'unavailable'}`}
            onClick={info.isAvailable ? actionClick(index, info.id) : unavailable}>
                <p>{info.name}</p>
            </div>
        )
    );
}