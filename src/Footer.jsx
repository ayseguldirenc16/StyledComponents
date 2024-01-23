import styled from "styled-components";
import { StyleFooter } from "./components/styled/Footer.styled";

const Container = styled.div`
  width: 100%;
  height: 10%;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.navbg};
`;
const FooterSpan = styled.span`
font-size: 15px;
display: flex;
justify-content: center;
font-weight: bold;
color: ${({theme})=>theme.colors.textColor};
margin-bottom: 10px;

`

function Footer() {
  return (
    <>
      <StyleFooter>
        <Container>
          <FooterSpan class="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </FooterSpan>
          <FooterSpan>
            by Ayşegül Direnç
          </FooterSpan>
        </Container>
      </StyleFooter>
    </>
  );
}

export default Footer;
