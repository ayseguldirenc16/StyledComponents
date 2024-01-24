import styled from "styled-components";
import { StyledSection } from "./Section.styled";
import SectionCard from "./SectionCard";

function Section() {
  const Container = styled.div`
    width: 100%;
    height: 10%;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  `;
  const SectionH1 = styled.h1`
    font-size: 35px;
    text-align: center;
    font-weight: 400;
    font-style: italic;
    font-family: monospace;
  `;

  return (
    <>
      <StyledSection>
        <Container>
          <SectionH1>Ürünlerimiz</SectionH1>
          <SectionCard/>

         
        </Container>
      </StyledSection>
    </>
  );
}

export default Section;
