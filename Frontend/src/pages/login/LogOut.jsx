import {   Button, Heading, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react"
import { useDispatch} from "react-redux";
import { LOGOUT } from "../../Redux/Login/actionTypes";
import Navbar from "../../components/Navbar/Navbar";
import BlackOneSlider from "../../components/slider/BlackOneSlider";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
 

 

const LogOut = () => {
  const data = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const handleLogout = () => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
      navigate("/")
    };
    

    const headingFontSize = useBreakpointValue({ base: '3xl', md: '5xl' });
    const simpleGridColumns = useBreakpointValue({ base: 1, md: 2 });
    const spacingValue = useBreakpointValue({ base: '10%', md: '35%' });

  return (
    <>
    <Navbar/>
    <BlackOneSlider/>
    <SimpleGrid fontFamily={'monospace'} pb={20}>
      <SimpleGrid w={{ base: '80%', md: '40%' }} m={'auto'} gap={7}>
        <Heading textAlign={'center'} fontSize={headingFontSize}>
          🇲‌🇾‌ 🇦‌🇨‌🇨‌🇴‌🇺‌🇳‌🇹‌
        </Heading>
        <Button
          bg={'white'}
          border={'1px solid gray'}
          borderRadius={'none'}
          m={'auto'}
          w={'130px'}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </SimpleGrid>

      <SimpleGrid w={'100%'} columns={simpleGridColumns} pl={10} spacing={spacingValue} pt={10}>
        <SimpleGrid>
          <Heading fontWeight={400}>Order History</Heading>
          <Text>You have not placed any orders yet.</Text>
        </SimpleGrid>

        <SimpleGrid>
          <Heading fontWeight={400}>Account details</Heading>
          <Text fontWeight={520} fontSize={'30px'}>
            {data?.data}
          </Text>

          <Text fontWeight={500} fontSize={'20px'}>INDIA</Text>
          <Text fontWeight={500} fontSize={'20px'}>View addresses (1)</Text>
        </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>
    <Footer/>
        </>

  )
}

export default LogOut
