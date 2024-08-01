import { Box, Image, Text,   } from "@chakra-ui/react";
import Slider from "react-slick";
 
 

export function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      borderRadius="50%"
      width="50px"
      height="50px"
      position="absolute"
      right="20px"
      top="50%"
      zIndex="1"
      cursor="pointer"
      display="flex"
      alignItems="center"
      justifyContent="center"
     
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      borderRadius="50%"
      width="50px"
      height="50px"
      position="absolute"
      left="30px"
      top="50%"
      zIndex="1"
      cursor="pointer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      
    />
  );
}

const Slider4 = () => {
  const settings = {
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
           
          breakpoint: 940, 
          settings: {
            slidesToShow: 3,
            dots:true,
          },
        },
        {
            dots:true,
          breakpoint: 480,  
          settings: {
            slidesToShow: 2,
            dots:true,
          },
        },
      ],
  };

  const arr = [
    {
      img: "https://www.bluefly.com/cdn/shop/files/oEFmgzXW0w8Oy6Ywzi0dfTIIWGCcZLc3-25_360x.jpg?v=1721431549",
      name: "WOMENS STRAPPY DRESSY PUMPS",
      price: "$402.66",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/213933-760943__20058__1_360x.jpg?v=1721953246 ",
      name: "FERRAGAMO WOMENS GEMINI CROSSBODY",
      price: "$270.99",
    },
    {
      img: " https://cdn.shopify.com/s/files/1/0248/3473/6191/files/30321S033001_1_360x.jpg?v=1721613785",
      name: "ALEXANDER WANG WOMENS BLACK MULE",
      price: "$197.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/210428-744532__40001__1_360x.jpg?v=1721997317 ",
      name: "FERRAGAMO WOMENS ROUNDED GANCINI TOT BAG",
      price: "$331.99",
    },
    {
      img: " https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1313651860_RLLZ_1_360x.jpg?v=1721810334",
      name: "FENDI MATCH LEATHER SNEAKER",
      price: "$560.99",
    },
    {
      img: " https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1313679063_RLLZ_1_360x.jpg?v=1721860375",
      name: "CHRISTIAN LOUBOUTIN CONDORA",
      price: "$499.99",
    },
    {
      img: " https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1313664390_RLLZ_1_360x.jpg?v=1721421552",
      name: "GUCCI MAXI GG CANVAS",
      price: "$460.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1313889534_RLLZ_1_360x.jpg?v=1721711554 ",
      name: "CELINE TRIOMPHE MARGARET LEATHER",
      price: "$303.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1313935298_RLLZ_1_360x.jpg?v=1721589416 ",
      name: "GUCCI MENS CHAIN PRINT JACKET",
      price: "$596.99",
    },
    {
      img: " https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1313710067_RLLZ_1_360x.jpg?v=1721837651",
      name: "GUCCI MENS DANIM BOMBER JACKET",
      price: "$720.99",
    },
    {
      img: " https://cdn.shopify.com/s/files/1/0248/3473/6191/files/1313727944_RLLZ_1_360x.jpg?v=1721883858",
      name: "GUCCI MENS MIXED MEDIA TRACK JACKET",
      price: "$440.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/575740-XJBA8-3134__90813__1_17b336c5-09a1-4701-9375-d525c4374a86_180x.jpg?v=1721105680",
      name: "GUCCI MENS EMBROIDERED LOGO PANTS",
      price: "$220.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/569748-XDAMF-4034__90037__1_180x.jpg?v=1721109314",
      name: "GUCCI MENS CHEVRON JERSEY TRACK JACKET",
      price: "$396.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/572725-XJA4Y-3129__90813__1_79f67ff0-7fb4-43b4-8f19-9e85aeb085de_180x.jpg?v=1721108900",
      name: "GUCCI MENS HORSEBIT COTTON SHORTS",
      price: "$280.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/568598-ZABWY-4265__40053__1_fb7d4145-6a75-478e-908d-9da4f73e71f0_180x.jpg?v=1721107006",
      name: "GUCCI MENS LINEN JACKET",
      price: "$820.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/575762-XJBBE-1315__00041__1_caf2f82c-1376-4436-b78f-78d9a0e41e84_180x.jpg?v=1721882681",
      name: "GUCCI MENS CHAIN PRINT SHORTS",
      price: "$280.99",
    },
  ];

  return (
  <>
    <Box width="80%"   overflow="hidden" w="99vw" m="auto" mt="2" position="relative"   >
      <Slider {...settings}>
        {arr.map((elem, i) => (
            <Box  boxShadow='md' p='6' rounded='md'   key={i} height="100%" w="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center"  >
            <Image src={elem.img} alt="slider" objectFit="cover" height="150px" width="150px" borderRadius="md" m={'auto'} />
            <Text mt="2" fontWeight="bold" textAlign="center">{elem.name}</Text>
            <Text mt="1" color="gray.500" textAlign="center">{elem.price}</Text>
          </Box>
        ))}
      </Slider>
    </Box>


 
        </>

  );
}

export default Slider4;
