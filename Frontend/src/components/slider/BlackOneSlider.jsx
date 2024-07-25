import { Box, Text } from "@chakra-ui/react";
import Slider from "react-slick";

 
function BlackOneSlider() {
    const settings = {
       
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 2500,
      cssEase: "linear"
    };
    return (
      <Box className="slider-container"  w={'99%'} p={2} textAlign={'center'} bg={'black'} color={'white'}>
        <Slider {...settings}>
          <Box>
           <Text fontSize='sm' fontWeight={500}><strong>WELCOME TO BLUEFLY:</strong>  Luxury brands at discounted prices</Text> 
          </Box>
          <Box>
          < Text fontSize='sm' fontWeight={500}>FREE STANDARD SHIPPING AND HANDLING FOR ORDERS OVER $99</Text>
          </Box>
          
        </Slider>
      </Box>
    );
  }
  
  export default BlackOneSlider;