import styled from "styled-components";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowBack } from "@material-ui/icons";

function Details() {
  const [fetchedData, setFetchedData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  const { pokemonId } = params;

  useEffect(() => {
    const fetchDataHandler = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }
      const resData = await res.json();
      setFetchedData(resData);
      setLoading(false);
    };
    fetchDataHandler();
  }, [pokemonId]);
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      {!loading && fetchedData && (
        <Container>
          <BackLink to="/">
            <ArrowBack />
            <span>Back</span>
          </BackLink>
          <TextBox>
            <h1>{fetchedData.name}</h1>
            <Attribute>
              <h4>Weight : {fetchedData.weight}</h4>
              <h4>Height : {fetchedData.height}</h4>
              <h4>Base Experience : {fetchedData.base_experience}</h4>
              <h4>Order : {fetchedData.order}</h4>
              <h4>ID : {fetchedData.id}</h4>
              <h4>Species : {fetchedData.species.name}</h4>
            </Attribute>
          </TextBox>
          <CardContainer>
            <Card>
              <h3>ABILITIES : {fetchedData.abilities.length}</h3>
              <ul>
                {fetchedData.abilities.map((ability) => {
                  return <li key={Math.random()}>{ability.ability.name}</li>;
                })}
              </ul>
            </Card>
            <Card>
              <h3>FORMS : {fetchedData.forms.length}</h3>
              <ul>
                {fetchedData.forms.map((data) => {
                  return <li key={Math.random()}>{data.name}</li>;
                })}
              </ul>
            </Card>
            <Card>
              <h3>HELD ITEMS: {fetchedData.held_items.length}</h3>
              <ul>
                {fetchedData.held_items.map((data) => {
                  return <li key={Math.random()}>{data.item.name}</li>;
                })}
              </ul>
            </Card>
            <Card>
              <h3>Moves: {fetchedData.moves.length}</h3>
              <ul>
                {fetchedData.moves.map((data) => {
                  return <li key={Math.random()}>{data.move.name}</li>;
                })}
              </ul>
            </Card>
            <Card>
              <h3>Stats: </h3>
              <ul>
                {fetchedData.stats.map((data) => {
                  return (
                    <li key={Math.random()}>
                      {data.stat.name} : {data.base_stat}
                    </li>
                  );
                })}
              </ul>
            </Card>
            <Card>
              <h3>Types: {fetchedData.types.length}</h3>
              <ul>
                {fetchedData.types.map((data) => {
                  return <li key={Math.random()}>{data.type.name}</li>;
                })}
              </ul>
            </Card>
          </CardContainer>
        </Container>
      )}
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something Went Wrong :(</h2>}
    </div>
  );
}

export default Details;

const Container = styled.div`
  width: 100%;
  padding: 0 40px;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const BackLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  span {
    margin-left: 10px;
  }
`;

const Attribute = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px auto;
  h4 {
    letter-spacing: 2px;
    min-width: 250px;
    width: 33%;
    margin-bottom: 40px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  margin-top: 80px;
  text-align: center;
  h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 80px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 70px;
  h3 {
    letter-spacing: 3px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Card = styled.div`
  text-align: start;
  width: 100%;
  margin-bottom: 40px;
  ul {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
  }
  li {
    margin: 10px;
    padding: 10px 20px;
    border: solid 1px #f8f8f8;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    ul {
      font-size: 12px;
      justify-content: center;
    }
  }
`;
