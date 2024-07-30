import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../Redux/Login/acrionTypes";
import Navbar from "../../components/Navbar/Navbar";
import BlackOneSlider from "../../components/slider/BlackOneSlider";
import Footer from "../../components/Footer/Footer";

 

const LogOut = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch({ type: LOGOUT });
    };
  return (
    <>
    <Navbar/>
    <BlackOneSlider/>
    <SimpleGrid >
      <SimpleGrid w={'20%'} m={'auto'} gap={7}>
     <Heading textAlign={'center'} fontSize={'5xl'} > 🇲‌🇾‌ 🇦‌🇨‌🇨‌🇴‌🇺‌🇳‌🇹‌
     </Heading>
    <Button  bg={'white'} border={'1px solid gray'} 
    borderRadius={'none'} m={'auto'} w={'130px'} onClick={handleLogout}>Log Out</Button>
      </SimpleGrid>

        <SimpleGrid   w={'100%'} columns={2} pl={10} spacing={20} pt={10}>

        <SimpleGrid>
          <Heading>
          Order History
          </Heading>
          <Text>
          You haven't placed any orders yet.
          </Text>
        </SimpleGrid>

        <SimpleGrid>
          <Heading>Account details</Heading>


        </SimpleGrid>

        </SimpleGrid>
        
    </SimpleGrid>
    <Footer/>
        </>

  )
}

export default LogOut
