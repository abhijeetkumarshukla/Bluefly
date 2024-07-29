import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react"
import Navbar from "/src/components/Navbar/Navbar.jsx"
import Footer from "/src/components/Footer/Footer.jsx"
import BlackOneSlider from "../../components/slider/BlackOneSlider"
import { Navigate, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { loginUser } from "../../Redux/Login/actions"

 

 
 
const Login = ()=>{

    const dispatch = useDispatch();
    const { isLogin } = useSelector((state) => state.loginState);
  
    const [credentials, setCredentials] = useState({
      email: "",
      password: "",
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loginUser(credentials));
    };
  
    if (isLogin) {
      return <Navigate to="/logout" />;
    }
  


    return(
        <>
        <Box display={["none", "none", "block", "block"]}>
                <Navbar/>
                <BlackOneSlider/>
         <Heading pt={5} textAlign={'center'}>𝙻𝙾𝙶𝙸𝙽</Heading>
            
         <Box w={'30vw'}  m={'auto'}   >
         <form onSubmit={handleSubmit}>
            <label><Text fontSize={'lg'}>ᴇᴍᴀɪʟ</Text></label>            
            <Input  placeholder="Email Likh Do Bhai" mt={2} borderRadius={'none'}  p={5} 
             onChange={(e) =>
                setCredentials((prevCreden) => ({
                  ...prevCreden,
                  email: e.target.value,
                }))
              }/>

            <Flex mt={5} justifyContent={'space-between'}>
            <label><Text fontSize={'lg'}>ᴘᴀssᴡᴏʀᴅ</Text></label>
            <label><Text fontSize={'lg'}>ғᴏʀɢᴏᴛ ᴘᴀssᴡᴏʀᴅ?</Text></label>
            </Flex> 

            <Input  placeholder="Password bhi Likh Do Bhai" mt={2} borderRadius={'none'} p={5}
             onChange={(e) =>
                setCredentials((prevCreden) => ({
                  ...prevCreden,
                  password: e.target.value,
                }))
              } />
            
            <Button 
             type="submit"
            borderRadius={'none'} mt={5} w={'100%'} p={5} bg={'black'} color={'white'} _hover={{bg:'gray'}}>sɪɢɴ ɪɴ</Button>
            <NavLink to={'/signup'}>
            <Text textAlign={'center'} mt={5} fontSize={'lg'}>Create account</Text>
            </NavLink>
            </form>
         </Box>
         <Footer/>
        </Box>
{/* ------------------------------------ */}


<Box display={["block", "block","none", "none" ]}>
                <Navbar/>
                <BlackOneSlider/>
         <Heading pt={5} textAlign={'center'}>𝙻𝙾𝙶𝙸𝙽</Heading>
            
         <Box w={'70vw'}  m={'auto'}   >
          
         <form onSubmit={handleSubmit}>

            <label><Text fontSize={'lg'}>ᴇᴍᴀɪʟ</Text></label>            
            <Input  placeholder="Email Likh Do Bhai" mt={2} borderRadius={'none'}  p={5}
             onChange={(e) =>
                setCredentials((prevCreden) => ({
                  ...prevCreden,
                  email: e.target.value,
                }))
              } />

            <Flex mt={5} justifyContent={'space-between'}>
            <label><Text fontSize={'lg'}>ᴘᴀssᴡᴏʀᴅ</Text></label>
            <label><Text fontSize={'lg'}>ғᴏʀɢᴏᴛ ᴘᴀssᴡᴏʀᴅ?</Text></label>
            </Flex> 

            <Input  placeholder="Password bhi Likh Do Bhai" mt={2} borderRadius={'none'} p={5}
              onChange={(e) =>
                setCredentials((prevCreden) => ({
                  ...prevCreden,
                  password: e.target.value,
                }))
              } />
            
            <Button   type="submit"
             borderRadius={'none'} mt={5} w={'100%'} p={5} bg={'black'} color={'white'} _hover={{bg:'gray'}}>sɪɢɴ ɪɴ</Button>
            <NavLink to={'/signup'}>
            <Text textAlign={'center'} mt={5} fontSize={'lg'}>Create account</Text>
            </NavLink>
            </form>
         </Box>
         <Footer/>
        </Box>

 
        </>
 
    )
}

export default Login