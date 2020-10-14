import React from "react";
import styled from "@emotion/styled";

const Location = ({ city, country }) => {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-family: "Merriweather Sans", sans-serif;
    font-size: 1.6rem;
  `;

  const Country = styled.h3`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
  `;

  return (
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
