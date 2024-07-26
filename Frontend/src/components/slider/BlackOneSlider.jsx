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
    <Box
      className="slider-container"
      w={'99vw'}
      p={2}
      textAlign={'center'}
      bg={'black'}
      color={'white'}
      overflow={'hidden'}  
      m={"auto"}   
    >
      <Slider {...settings}>
        <Box>
          <Box  display={["none", "none", "flex", "flex"]}>
          <Text fontSize='sm' fontWeight={500} m={'auto'} >
            <strong>WELCOME TO BLUEFLY:</strong> Luxury brands at discounted prices
          </Text>
          </Box>
            
            <Box display={["flex", "flex", "none", "none"]}   >
            <Text fontSize='sm' fontWeight={500}  m={'auto'}   >
            <strong>WELCOME TO BLUEFLY:</strong> <br /> Luxury brands at discounted prices
          </Text>
            </Box>
         
        </Box>
        <Box>
          <Text fontSize='sm' fontWeight={500}>
            FREE STANDARD SHIPPING AND HANDLING FOR ORDERS OVER $99
          </Text>
        </Box>
      </Slider>
    </Box>
  );
}

export default BlackOneSlider;
