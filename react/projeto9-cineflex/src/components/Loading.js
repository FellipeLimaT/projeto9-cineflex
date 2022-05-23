import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadBox>
      <ReactLoading type="spin" color="#EE9D08" height={200} width={100} />
    </LoadBox>
  );
}

const LoadBox = styled.div`
  margin: 250px auto;
  display: flex;
  justify-content: center;
  align-items: center;  
`;