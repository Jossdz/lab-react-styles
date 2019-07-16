import styled from "styled-components";

export const Navbar = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: peru;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    margin: 1rem;
  }
`;

export const MainC = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .gokuButtons {
  }
`;

export const Button = styled.button`
  border: none;
  margin: 20px;
  padding: 20px 60px;
  background-color: crimson;
  font-size: 2rem;
  border-radius: 15px;
  transition: 1s ease all;
  outline: none;

  &:hover {
    transform: scale(1.3);

    background-color: ${props =>
      props.name === "goku"
        ? "#F4DC0C"
        : props.name === "vegeta"
        ? "#014293"
        : props.name === "freezer"
        ? "#AA4DFD"
        : "Crimson"};
  }
`;

export const Card = styled.div`
  width: 40vw;
  height: 40vh;
  background-image: url(${props => props.type});
  background-repeat: no-repeat;
`;
