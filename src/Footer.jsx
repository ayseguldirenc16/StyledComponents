import styled from "styled-components";
import { StyleFooter } from "./components/styled/Footer.styled";

const Container = styled.div`
  width: 100%;
  height: 200px;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.navbg};
`;
const FooterSpan = styled.span`
font-size: 15px;
display: flex;
position: relative;
top: 50px;
justify-content: center;
align-items: center;
font-weight: bold;
color: ${({theme})=>theme.colors.footerColor};



`

function Footer() {
  return (
    <>
      <StyleFooter>
        <Container>
          <FooterSpan class="mb-3 mb-md-0 text-body-secondary">
            © 2024 Company |  by Ayşegül Direnç
          </FooterSpan>
        </Container>
      </StyleFooter>
    </>
  );
}

export default Footer;
