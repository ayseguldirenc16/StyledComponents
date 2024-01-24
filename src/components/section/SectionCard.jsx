import React from 'react';
import styled from 'styled-components';
import Data from '../../theme/data';
import { FaMapPin } from "react-icons/fa";

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.sectionBgColor};
  border-radius: 30px;
  width: calc(33% - 10px);
  height: 500px;
  margin: 5px;
  padding: 0;
  font-size: 15px;
  transition: box-shadow 0.9s ease;
  display: inline-block; 
  vertical-align: top; 
  position: relative; 

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  
`;

const SectionH2 = styled.h2`
  font-size: 25px;
position: relative;
bottom: 215px;
left: 15px;
`;

const SectionImage = styled.img`
  width: 100%; 
  height: 50%;
  border: 1px solid grey;
  border-radius: 15px;
`;

const SectionSpan = styled.span`
  font-size: 20px;
  font-weight: 400;
  position: relative;
  bottom: 100px;
  left: 15px;
`;

const SectionText = styled.p`
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  height: 150px;
  padding: 15px;
`;

function SectionCard() {
  return (
    <>
      {Data.foodItems.map((item) => (
        <StyledCard key={item.id}>
          <SectionImage src={item.imageId} alt={item.name} />
          <SectionText>{item.text} </SectionText>
          <SectionH2> <FaMapPin style={{fontSize:"15px"}}/> {item.name} </SectionH2>
          <SectionSpan>{item.pay} </SectionSpan>
        </StyledCard>
      ))}
    </>
  );
}

export default SectionCard;
