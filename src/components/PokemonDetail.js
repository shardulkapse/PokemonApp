import { Link } from "react-router-dom";
import styled from "styled-components";
function PokemonDetail(props) {
  return (
    <Container>
      <Name>{props.data.name}</Name>
      <Attribute>
        <h4>Weight : {props.data.weight}</h4>
        <h4>Height : {props.data.height}</h4>
        <h4>Base Experience : {props.data.base_experience}</h4>
        <h4>Order : {props.data.order}</h4>
      </Attribute>
      <Button to={`/details/${props.data.id}`}>View All Details</Button>
    </Container>
  );
}

export default PokemonDetail;

const Container = styled.div`
  width: 80%;
  padding: 30px 20px;
  border-top: #fff solid 1px;
`;

const Name = styled.h1`
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 5rem;
  font-weight: 700;
`;

const Attribute = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px auto;
  h4 {
    letter-spacing: 2px;
    width: 250px;
    margin-bottom: 40px;
  }
`;

const Button = styled(Link)`
  padding: 5px 25px;
  background: transparent;
  border: solid 1px #f8f8f8;
  outline: none;
  color: #f8f8f8;
  transition: 0.3s ease-in;
  margin-bottom: 50px;
  text-decoration: none;
  :hover {
    box-shadow: 0px 1px 8px #f1f1f1;
    cursor: pointer;
  }
`;
