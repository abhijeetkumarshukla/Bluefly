import { Box, Image, Text } from "@chakra-ui/react";
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

const Slider2 = () => {
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
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/569770-XDAS9-2273__90136__1_180x.jpg?v=1694528600",
      name: "GUCCI MEN STRIPED JOGGING PANT",
      price: "$355.66",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/546443-Z3786-2055__20443__1_180x.jpg?v=1721105509",
      name: "GUCCI MENS CHECKED LINEN CROPPED TROUSERS",
      price: "$270.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/546443-Z3786-2055__20443__1_180x.jpg?v=1721105509",
      name: "GUCCI MENS LABEL COTTON POPLIN TROUSERS",
      price: "$197.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/575776-XJBBG-6208__60145__1_522750f0-61d1-46f4-acea-f481c207d7f0_180x.jpg?v=1683894632",
      name: "GUCCI MENS JOGGER SWEATPANTS",
      price: "$331.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/568770-ZAA5R-2185__20009__1_180x.jpg?v=1720694765",
      name: "GUCCI MENS WEB STRIPED VELVET JOGGER PANTS",
      price: "$560.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/568612-ZABWZ-1000__00002__1_795d6767-7e6c-4ffd-966f-7a8f17a19936_180x.jpg?v=1721112766",
      name: "GUCCI MENS BI-MATERIAL JOGGING PANTS",
      price: "$499.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/564097-XJAX0-3521__90813__1_180x.jpg?v=1718939630",
      name: "GUCCI MENS DIAGONAL STRIPE TRACK JACKET",
      price: "$460.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/572632-XDAOT-1082__00002__1_180x.jpg?v=1694532780",
      name: "GUCCI MENS GEOMETRIC TRACK PANT",
      price: "$303.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/576547-XDAQB-9192__10231__1_180x.jpg?v=1692252361",
      name: "GUCCI MENS CHAIN PRINT JACKET",
      price: "$596.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/575775-XJBBG-6208__60145__1_ddbeb919-54f5-45e6-8a1d-883320085722_180x.jpg?v=1721107903",
      name: "GUCCI MENS DANIM BOMBER JACKET",
      price: "$720.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/573276-XJA6N-3134__90813__1_180x.jpg?v=1721107726",
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
    <Box width="80%" overflow="hidden" w="99vw" m="auto" mt="2" position="relative"   >
      <Slider {...settings}>
        {arr.map((elem, i) => (
            <Box key={i} height="100%" w="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p="4">
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

export default Slider2;
