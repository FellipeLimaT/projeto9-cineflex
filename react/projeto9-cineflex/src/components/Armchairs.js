/* import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Armchair from "./Armchair";
import styled from "styled-components";
import FormFields from "./FormFields";

export let requestData = {};

export default function Armchairs() {

  const [clickedIndex, setClickedIndex] = useState([]);
  const { idSessao } = useParams();
  const [data, setData] = useState(false);
  const [seatIDs, setSeatIDs] = useState([]);
  const [cpf, setCpf] = useState([]);
  const [client, setClient] = useState("");

  const chairStatus = {
    clickedIndex,
    setClickedIndex,
    setSeatIDs,
    seatIDs
  };

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((response) => {
      setData(response.data);
    });
  }, []);


  requestData = {
    title: data.movie.title,
    weekday: data.day.weekday,
    date: data.day.date,
    name: client,
    cpf: cpf,
    seats: Object.keys(clickedIndex)
  };

  let compradores = [];

  for (let i = 0; i < requestData.name.length; i++) {
    compradores[i] = {};
    compradores[i].idAssento = seatIDs[i];
    compradores[i].nome = requestData.name[i];
    compradores[i].cpf = requestData.cpf[i];
  }

  const getCpf = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length === 11) {
      setCpf([...cpf, value]);
    }
  };

  const getClient = (index, e) => {
    let newClient = [...client];
    newClient[index] = e.target.value;
    setClient(newClient);
  };

  function submitRequest(event) {
    event.preventDefault();

    if (seatIDs.length === 0) {
      alert("Você não reservou nenhum assento!");
      return;
    }

    axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: seatIDs,
        compradores: compradores
      }
    );

    navigate("/sucesso");
  }

  return (
    <>
      <Voltar onClick={() => navigate(-1)}>Voltar</Voltar>
      <header>
        <div className="sub-topo">Selecione o(s) assento(s)</div>
      </header>
      <content>
        <div className="seats">
          <Chair chairInfo={data} chairStatus={chairStatus} />
        </div>
        <div className="statusBar">
          <div className="subBar">
            <div className="seat selected" style={{ cursor: "default" }}></div>
            <h2>Selecionado</h2>
          </div>
          <div className="subBar">
            <div className="seat" style={{ cursor: "default" }}></div>
            <h2>Disponível</h2>
          </div>
          <div className="subBar">
            <div
              className="seat indisponivel"
              style={{ cursor: "default" }}
            ></div>
            <h2>Indisponível</h2>
          </div>
        </div>
        <form onSubmit={submitRequest}>
          <FormFields
            seatIDs={seatIDs}
            getCpf={getCpf}
            client={client}
            cpf={cpf}
            data={requestData}
            getClient={getClient}
          />
          <Button>
            <button type="submit">Reservar assento(s)</button>
          </Button>
        </form>
      </content>
      <div className="espaçofooter"></div>
      <footer>
        <div className="footerImgBox">
          <img src={data.movie.posterURL} alt="" />
        </div>
        <FooterTitle>
          <h4>{data.movie.title}</h4>
          <h4>{`${data.day.weekday} - ${data.day.date}`}</h4>
        </FooterTitle>
      </footer>
    </>
  );
}

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  margin-bottom: 30px;

  button {
    border: none;
    background-color: #e8833a;
    color: #ffffff;
    border-radius: 4px;
    width: 226px;
    height: 42px;
  }
`;

const FooterTitle = styled.div`
  flex-wrap: wrap;
  height: 40px;
  font-size: 20px;
  color: #293845;
`;
 */