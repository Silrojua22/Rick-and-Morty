import Card from "./Card";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  
`;
export default function Cards(props) {
  const { characters } = props;
  // characters --> [{}], onClose
  return (
    <Div>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => props.onClose(id)}
        />
      ))}
    </Div>
  );
}
