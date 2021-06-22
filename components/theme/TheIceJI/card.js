import styled from "@emotion/styled";
import Utilities from "./utilities";

const Container = styled.div`
  ${Utilities.Padding};
  ${Utilities.Margin};
  ${Utilities.Size};
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const Img = styled.img`
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
`;

const Body = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
`;

const Title = styled.div`
  font-weight: 800;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const Card = { Container, Body, Img, Title };

export { Container, Body, Img, Title };
export default Card;
