import { useRef, useState } from "react";
import styled from "styled-components";
import PokemonDetail from "../components/PokemonDetail";

function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState();

  const inputPokemonRef = useRef();

  const searchPokemonHandler = async () => {
    setFetchedData();
    setLoading(true);
    const enteredPokemon = inputPokemonRef.current.value;
    if (!enteredPokemon) {
      setError("Invalid Input");
      setLoading(false);
      return;
    }
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${enteredPokemon}`
    );
    if (!res.ok) {
      setError("Invalid Input");
      setLoading(false);
      return;
    }
    const resData = await res.json();
    setError(false);
    setFetchedData(resData);
    setLoading(false);
  };
  return (
    <Container>
      <h1>Enter the name or number of the pokemon</h1>
      <ContInput ref={inputPokemonRef} />
      <Button onClick={searchPokemonHandler}>Search</Button>
      {error && !loading && <h2>Invalid Input</h2>}
      {loading && <h4>Loading...</h4>}
      {!loading && fetchedData && !error && (
        <PokemonDetail data={fetchedData} />
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #f8f8f8;
  text-align: center;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContInput = styled.input`
  width: 30%;
  height: 40px;
  min-width: 300px;
  margin: 20px 0;
  padding: 0px 20px;
  border-radius: 20px;
  color: #f8f8f8;
  background: transparent;
  border: solid 2px #f8f8f8;
  outline: none;
  transition: 0.3s ease-in;
  :hover {
    background-color: #1a1c29;
  }
  :focus {
    background-color: #1a1c29;
    box-shadow: 0px 0px 5px #f4f4f4;
  }
`;

const Button = styled.button`
  padding: 5px 25px;
  background: transparent;
  border: solid 1px #f8f8f8;
  outline: none;
  color: #f8f8f8;
  transition: 0.3s ease-in;
  margin-bottom: 50px;
  :hover {
    box-shadow: 0px 0px 5px #f1f1f1;
    cursor: pointer;
  }
`;
