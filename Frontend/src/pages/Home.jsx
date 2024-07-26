  
import { Box, Image } from "@chakra-ui/react"
import BlackOneSlider from "../components/slider/BlackOneSlider"
import SliderOne from "../components/slider/Slider1"
import Navbar from "/src/components/Navbar/Navbar.jsx"

 

const Home = () => {
  return (
     <>
    
     
     <Navbar/>
     <BlackOneSlider/>
     <Box w={'99vw'} m={'auto'}   >
      <Image   w={'99vw'} src="https://www.bluefly.com/cdn/shop/files/Top_banner_asset_1200X200_ca56302f-fe77-4c56-aa8d-6f7ad2580832_1600x.jpg?v=1721945318"/>
     </Box>
      <SliderOne/>
     </>
  )
}

export default Home
