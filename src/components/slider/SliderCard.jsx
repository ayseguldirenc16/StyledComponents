import styled from "styled-components";
import sliderData from "./sliderData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


const SliderCard = styled.div`
  background-color: ${({theme})=>theme.colors.SlideBgColor};
  border-radius: 30px;
  width: calc(50% - 10px);
  height: 500px;
  margin: 5px;
  padding: 0;
  font-size: 15px;
  transition: box-shadow 0.9s ease;
  display: inline-block; 
  vertical-align: top; 
  position: relative; 
  margin-top: 25px;

  &:hover {
    box-shadow: 0px 0px 10px rgba(161, 8, 8, 0.5);
  }
  
`;

const SliderImage = styled.img`
  width: 40%; 
  height: 50%;
  border: 1px solid grey;
  border-radius: 15px;
  position: relative;
  top: 80px;
  left: 40px;
`;
const SliderP =styled.p `
font-size: 30px;
position: relative;
line-height: 40px;
text-align: center;
left: 590px;
bottom: 190px;
width: 20%;
height: 50px;
font-weight: bold;
color: ${({theme})=>theme.colors.SlideText};
`


function SlideCard (){

    return(
        <>

        <hr />
        <Slider {...settings}>
        {
            sliderData.PayItems.map((item,id)=>(
                <SliderCard key={item.id}>
                    <SliderImage src={item.imageId}/>
                    <SliderP>{item.text} </SliderP>
                </SliderCard>
            ))
        }
         </Slider>
        
        </>
    )
}

export default SlideCard