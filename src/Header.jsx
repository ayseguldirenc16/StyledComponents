import styled from "styled-components";
import { StyleHeader } from "./components/styled/Header.styled";
import { GiFairyWand } from "react-icons/gi";

const Container = styled.div`
  width: 100%;
  height: 10%;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.navbg};
`;
const Logo = styled.h1`
  font-size: 12px;
  margin-left: 70px;
  color: ${({ theme }) => theme.colors.navH};
  font-family: monospace;
  cursor: pointer;
`;
const Menu = styled.ul`
display: flex;
list-style: none;
`
const MenuItem = styled.li`
font-size: 20px;
font-weight: bold;
margin-right: 30px;
color: ${({theme})=>theme.colors.navText};
cursor: pointer;
&:hover{
    color: #fd0b70;
}
`


function Header() {
  return (
    <>
      <StyleHeader>
        <Container>
          <Logo>
            <h1>
              <GiFairyWand />
              Alışveriş Perisi
              <GiFairyWand />
            </h1>
          </Logo>
          <Menu>
            <MenuItem>Anasayfa</MenuItem>
            <MenuItem>Hakkımızda</MenuItem>
            <MenuItem>İletişim</MenuItem>
            <MenuItem>SSS</MenuItem>
          </Menu>
          

        </Container>
      </StyleHeader>
    </>
  );
}

export default Header;
