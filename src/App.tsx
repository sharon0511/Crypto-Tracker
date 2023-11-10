import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 100vh;
  width: 100vw;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Hello</H1>
    </Container>
  );
}

export default App;
