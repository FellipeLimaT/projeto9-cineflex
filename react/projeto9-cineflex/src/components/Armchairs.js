import React from 'react'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { PageTitle } from "./HomePage";
import { MovieImageBox } from "./SessionTime";
import { MovieTitle } from "./SessionTime";
import styled from "styled-components";
import Armchair from "./Armchair";
import FormFields from "./FormFields";

export let requestData = {};

export default function Armchairs() {

  const [clickedIndex, setClickedIndex] = useState([]);
  const { idSessao } = useParams();
  const [data, setData] = useState(false);
  const [seatIDs, setSeatIDs] = useState([]);
  const [cpf, setCpf] = useState([]);
  const [user, setUser] = useState("");

  const armchairStatus = {
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

  if (!data) {
    return <Loading />;
  }

  requestData = {
    title: data.movie.title,
    weekday: data.day.weekday,
    date: data.day.date,
    name: user,
    cpf: cpf,
    seats: Object.keys(clickedIndex)
  };

  let buyers = [];

  for (let i = 0; i < requestData.name.length; i++) {
    buyers[i] = {};
    buyers[i].idAssento = seatIDs[i];
    buyers[i].nome = requestData.name[i];
    buyers[i].cpf = requestData.cpf[i];
  }

  const getCpf = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length === 11) {
      setCpf([...cpf, value]);
    }
  };

  const getUser = (index, e) => {
    let newUser = [...user];
    newUser[index] = e.target.value;
    setUser(newUser);
  };

  function submitRequest(event) {
    event.preventDefault();

    if (seatIDs.length === 0) {
      alert("Reserve um assento primeiro!");
      return;
    }

    axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: seatIDs,
        buyers: buyers
      }
    );

  }

  return (
    <div>      
      <header>
        <PageTitle>Selecione o(s) assento(s)</PageTitle>
      </header>
      <main>
        <div className="seats">
          <Armchair armchairInfo={data} armchairStatus={armchairStatus} />
        </div>
        <div className="legendBar">
          <div className="legendBarBox">
            <div className="seat selected" style={{ cursor: "default" }}></div>
            <p>Selecionado</p>
          </div>
          <div className="legendBarBox">
            <div className="seat" style={{ cursor: "default" }}></div>
            <p>Disponível</p>
          </div>
          <div className="legendBarBox">
            <div className="seat unavailable" style={{ cursor: "default" }}></div>
            <p>Indisponível</p>
          </div>
        </div>
        <form onSubmit={submitRequest}>
          <FormFields
            seatIDs={seatIDs}
            getCpf={getCpf}
            user={user}
            cpf={cpf}
            data={requestData}
            getUser={getUser}
          />
          <Link to={`/sucesso`} style={{ textDecoration: 'none' }}>
            <Button>
                <button type="submit">Reservar assento(s)</button>
            </Button>
          </Link>
        </form>
      </main>
      <div className="spaceFooter"></div>
      <footer>
        <MovieImageBox>
          <img src={data.movie.posterURL} alt="Movie Image" />
        </MovieImageBox>
        <MovieTitle>
          <p>{data.movie.title}</p>
          <p>{`${data.day.weekday} - ${data.day.date}`}</p>
        </MovieTitle>
      </footer>
    </div>
  );
}

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 57px;
  margin-bottom: 30px;

  button {
    border: none;
    background-color: #E8833A;
    color: #FFFFFF;
    border-radius: 3px;
    width: 225px;
    height: 42px;
  }
`;

