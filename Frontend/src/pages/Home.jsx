  
import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import BlackOneSlider from "../components/slider/BlackOneSlider"
import SliderOne from "../components/slider/Slider1"
import Navbar from "/src/components/Navbar/Navbar.jsx"
import Slider2 from "../components/slider/Slider2"
import Slider3 from "../components/slider/Slider3"
import Slider4 from "../components/slider/Slider4"
import Footer from "../components/Footer/Footer"

 

const Home = () => {
  return (
     <>
    
     
     <Navbar/>
     <BlackOneSlider/>
     <Box w={'99vw'} m={'auto'}   >
      <Image   w={'99vw'} src="https://www.bluefly.com/cdn/shop/files/Top_banner_asset_1200X200_ca56302f-fe77-4c56-aa8d-6f7ad2580832_1600x.jpg?v=1721945318"/>
     </Box>
      <SliderOne/>
      {/* ------------------------------------ */}
      <Box textAlign={'center'} p={'5'}><Heading>𝚁𝚎𝚌𝚘𝚖𝚖𝚎𝚗𝚍𝚎𝚍 𝙿𝚛𝚘𝚍𝚞𝚌𝚝𝚜</Heading></Box>
      <Slider2/>

      {/* ------------------------------------------------------------------- */}


      <Box textAlign={'center'} p={10}   ><Heading>𝚂𝚑𝚘𝚙 𝚋𝚢 𝙲𝚊𝚝𝚎𝚐𝚘𝚛𝚢</Heading></Box>

 
<SimpleGrid w={'90%'}   m={'auto'}   columns={[2, 3, 5]} rowGap={'10'} spacing='40px'>
  <Box   height='200px'>
       <Image src="https://www.bluefly.com/cdn/shop/files/1160798253_RLLZ_1_360x.jpg?v=1721878921"
      h={'170px'}  w={'170px'}/>
       <Text pl={12}>HANDBAGS</Text>
  </Box>
  <Box   height='200px'>
  <Image src="https://www.bluefly.com/cdn/shop/files/oEFmgzXW0w8Oy6Ywzi0dfTIIWGCcZLc3-25_360x.jpg?v=1721431549 "
     h={'170px'}  w={'170px'}/>
  <Text pl={10}>PUMPS & HEELS </Text>

  </Box>

  <Box  height='200px'>
  <Image src="https://www.bluefly.com/cdn/shop/files/1311460934_RLLZ_1_360x.jpg?v=1721623703 "
    h={'170px'}   w={'170px'}/>
  <Text>WOMENS SNEAKERS </Text>
  </Box>

  <Box  height='200px'>
  <Image  w={'170px'}  h={'170px'}  src="https://www.bluefly.com/cdn/shop/files/573974-XJBK7-4904__40001__1_360x.jpg?v=1721105027 "/>
  <Text pl={9}>DRESSES </Text>
  </Box>

  <Box   height='200px'>
  <Image  w={'190px'}  mt={'20'}  src="https://www.bluefly.com/cdn/shop/products/SL-276-001-1_180x.jpg?v=1603928680%20180w%2055h,%20//www.bluefly.com/cdn/shop/products/SL-276-001-1_360x.jpg?v=1603928680%20360w%20110h,%20//www.bluefly.com/cdn/shop/products/SL-276-001-1_540x.jpg?v=1603928680%20540w%20165h,%20//www.bluefly.com/cdn/shop/products/SL-276-001-1_720x.jpg?v=1603928680%20720w%20220h,%20//www.bluefly.com/cdn/shop/products/SL-276-001-1_900x.jpg?v=1603928680%20900w%20275h,%20//www.bluefly.com/cdn/shop/products/SL-276-001-1_1080x.jpg?v=1603928680%201080w%20330h,%20//www.bluefly.com/cdn/shop/products/SL-276-001-1_1296x.jpg?v=1603928680%201296w%20397h,%20//www.bluefly.com/cdn/shop/products/SL-276-001-1_1512x.jpg?v=1603928680%201512w%20463h,%20//www.bluefly.com/cdn/shop/products/SL-276-001-1_1728x.jpg?v=1603928680%201728w%20529h "/>
  <Text pl={2} pt={7}>SUNGLASSESS </Text>
  </Box>

    <Box  height='200px'>
    <Image  w={'170px'}  h={'170px'}  src="https://www.bluefly.com/cdn/shop/products/1923401_180x.jpg?v=1654372826%20180w%20180h,%20//www.bluefly.com/cdn/shop/products/1923401_360x.jpg?v=1654372826%20360w%20360h,%20//www.bluefly.com/cdn/shop/products/1923401_540x.jpg?v=1654372826%20540w%20540h,%20//www.bluefly.com/cdn/shop/products/1923401_720x.jpg?v=1654372826%20720w%20720h,%20//www.bluefly.com/cdn/shop/products/1923401_900x.jpg?v=1654372826%20900w%20900h,%20//www.bluefly.com/cdn/shop/products/1923401_1080x.jpg?v=1654372826%201080w%201080h,%20//www.bluefly.com/cdn/shop/products/1923401_1296x.jpg?v=1654372826%201296w%201296h,%20//www.bluefly.com/cdn/shop/products/1923401_1512x.jpg?v=1654372826%201512w%201512h,%20//www.bluefly.com/cdn/shop/products/1923401_1728x.jpg?v=1654372826%201728w%201728h "/>
    <Text pl={8}>MENS SNEAKERS </Text>
    </Box>
  <Box   height='200px'>
  <Image  w={'170px'}  h={'170px'}  src="https://www.bluefly.com/cdn/shop/files/AA038S22-JER00-51020__80003__1_360x.jpg?v=1721126792 "/>
  <Text pl={7}>MENS T-SHIRTS </Text>
  </Box>

  <Box  height='200px'>
  <Image  w={'170px'}  h={'170px'}  src="https://www.bluefly.com/cdn/shop/products/4292664_360x.jpg?v=1658442683 "/>
  <Text pl={9}>WOMENS TOPS </Text>
  </Box>

  <Box   height='200px'>
  <Image  w={'170px'}  h={'170px'}  src="https://www.bluefly.com/cdn/shop/files/1411621570_RLLZ_1_360x.jpg?v=1717946912 "/>
  <Text pl={7}>WOMENS DENIM </Text>
  </Box>
  <Box   height='200px'>
  <Image  w={'170px'}  h={'170px'}  src="https://www.bluefly.com/cdn/shop/products/55408_1_360x.jpg?v=1613986092 "/>
  <Text pl={12}>JEWELRY </Text>
  </Box>
</SimpleGrid>
     
     {/* ------------------------------------------------ */}


     <Slider3/>

{/* --------------------------- */}

<Box textAlign={'center'} p={'5'}><Heading>  𝙽𝚎𝚠 𝙰𝚛𝚛𝚒𝚟𝚊𝚕𝚜</Heading></Box>
    
  <Slider4/>
  {/* =-------------------------------------------*/}


  <Flex gap={6} justifyContent={'center'}   flexDirection={['column', 'column', 'row']} color={'white'} pt={10} w={'100%'} m={'auto'} fontWeight={500}>
    <Flex flexDirection={'column'}   pt={'80px'}  backgroundImage="url('https://www.bluefly.com/cdn/shop/files/Bluefly_Tile_Refresh_2_540x.png?v=1712086012')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="450px"
      width={'400px'}
      alignItems="center"
      justifyContent="center">
       <Text fontSize={'md'} >
          TRENDING LUXURY SYTLES
       </Text>
       <Text fontSize={'5xl'}>
        UP TO 80% OFF
       </Text>
       <Text>
        Featured Designer: <br /> Burberry, Saint, Laurent,   Gucci, <br /> Bottage,Veneta, Ferragamo, & More
       </Text> <br />
       <Button borderRadius={'none'}>SHOP LUXURY STYLES</Button>
    </Flex>

    <Flex flexDirection={'column'}  pt={'80px'} backgroundImage="url(' https://www.bluefly.com/cdn/shop/files/Banner_2_540x.png?v=1712086003')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="450px"
      width={'400px'}
      alignItems="center"
      justifyContent="center" >

<Text fontSize={'md'} >
         ON TREND DRESSES
       </Text>
       <Text fontSize={'5xl'}>
        UP TO 65% OFF
       </Text>
       <Text>
        Featuring Adrianna Papell <br /> Lauren Ralph lauren & <br /> More 
               </Text> <br />
       <Button borderRadius={'none'}>SHOP DRESSES</Button>

    </Flex>

    <Flex  flexDirection={'column'}   pt={'80px'}
     backgroundImage="url(' https://www.bluefly.com/cdn/shop/files/WEB_ASSET_2_540x.jpg?v=1650894933')"
     backgroundSize="cover"
     backgroundPosition="center"
     height="450px"
     width={'400px'}
     alignItems="center"
     justifyContent="center"
    >

<Text fontSize={'md'} >
        DESIGNER BOUTIQUE 
       </Text>
       <Text fontSize={'5xl'}>
        UP TO 84% OFF
       </Text>
       <Text>
         Best-Selling from: Gucci <br /> Valentine,Balenciage,Stuart <br /> Weitzman & More
               </Text> <br />
       <Button borderRadius={'none'}>SHOP DESIGNER BOUTIQUE</Button>
    </Flex>
  </Flex>
 

 {/* ----------------------- */}


<Flex
  gap={6}
  justifyContent="center"
  pt={10}
  w="100vw"
  m="auto"
  fontWeight={500}
  flexWrap={{ base: 'wrap', md: 'wrap' }}
>
  <Box w={{ base: "100%", md: "400px" }} textAlign="center" mb={{ base: 4, md: 0 }}>
    <Image w={{ base: "90%", md: "350px",lg:"400px"  }} m="auto" src="https://www.bluefly.com/cdn/shop/files/denim_540x.jpg?v=1615204984" />
    <Text w={{ base: "90%", md: "350px" }} fontSize={{ base: "xl", md: "2xl" }}>
      Up to 85% Off the denim shop for him & her
    </Text>
    <Text w={{ base: "90%", md: "350px" }}>
      From Hudson Jeans, Joes Jeans, J Brand & More
    </Text>
    <Button borderRadius="none" border="0.5px solid #E6E6E6" bg="white" mt={4}>
      SHOP DENIM
    </Button>
  </Box>

  <Box w={{ base: "100%", md: "400px" }} textAlign="center" mb={{ base: 4, md: 0 }}>
    <Image w={{ base: "90%", md: "350px",lg:"300px" }} m="auto" src="https://www.bluefly.com/cdn/shop/files/shutterstock_1112754335-REV_360x.jpg?v=1656342184" />
    <Text w={{ base: "90%", md: "350px" }} fontSize={{ base: "xl", md: "2xl" }}>
      Up to 90% OFF TRENDING JUMPSUITS & ROMPERS
    </Text>
    <Text w={{ base: "90%", md: "350px" }}>
      Must-Haves From Halston, BCBGMAXAZRIA, iro & More
    </Text>
    <Button borderRadius="none" border="0.5px solid #E6E6E6" bg="white" mt={4}>
      SHOP JUMPSUITS
    </Button>
  </Box>

  <Box w={{ base: "100%", md: "400px" }} textAlign="center">
    <Image w={{ base: "90%", md: "350px" }} m="auto" src="https://www.bluefly.com/cdn/shop/files/Tops_360x.jpg?v=1615206654" />
    <Text w={{ base: "90%", md: "350px" }} fontSize={{ base: "xl", md: "2xl" }}>
      Up to 90% Off WOMENS MUST-HAVE ACCESSORIES
    </Text>
    <Text w={{ base: "90%", md: "350px" }}>
      Shop Wallets, Belts, Hats, Sunglasses & More
    </Text>
    <Button borderRadius="none" border="0.5px solid #E6E6E6" bg="white" mt={4}>
      SHOP WOMENS ACCESSORIES
    </Button>
  </Box>
</Flex> 

{/* ------------------------------- */}

<Footer/>
     </>

  )
}

export default Home
