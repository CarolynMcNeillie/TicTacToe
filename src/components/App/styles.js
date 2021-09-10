import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
    font-family: "Urbanist", sans-serif;
  }

  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #355c7d;
    color: #ffffff;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const Header = styled.div`
  min-height: 130px;
  text-align: center;
  letter-spacing: 5px;
`;

export const Board = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
`;

export const Cell = styled.button`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  margin: 5px;
  background-color: ${(props) => (props.winner ? "#f67280" : "#fff")};
  border: none;
  padding: 0;
  font-size: 30px;
  color: ${(props) => (props.winner ? "#fff" : "#000")};
  transition: all 0.2s ease;
  box-shadow: 20px 20px 40px #00000050;

  &:active {
    background-color: #f8b195;
    box-shadow: 2px 2px 10px #000000ff;
  }
`;

export const Button = styled.button`
  padding: 20px 40px;
  color: #ffffff;
  background-color: #f8b195;
  margin: 20px;
  border: 0;
  width: 100%;
`;

export const ScoreBoard = styled.table`
  display: flex;
  position: absolute;
  background-color: #fff;
  padding: 40px 20px;
  right: 0;
  color: #000;

  thead,
  tr {
    display: flex;
    flex-direction: column;
  }

  th,
  td {
    padding: 10px;
    display: block;
    text-align: right;
  }

  th {
    font-weight: bold;
  }

  @media (max-width: 800px) {
    position: static;

    th,
    td {
      text-align: left;
    }
  }
`;
