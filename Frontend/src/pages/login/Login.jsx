import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react"
import Navbar from "/src/components/Navbar/Navbar.jsx"
import Footer from "/src/components/Footer/Footer.jsx"
import BlackOneSlider from "../../components/slider/BlackOneSlider"
import { NavLink } from "react-router-dom"

 

 
 
const Login = ()=>{
    return(
        <>
        <Box display={["none", "none", "block", "block"]}>
                <Navbar/>
                <BlackOneSlider/>
         <Heading pt={5} textAlign={'center'}>𝙻𝙾𝙶𝙸𝙽</Heading>
            
         <Box w={'30vw'}  m={'auto'}   >

            <label><Text fontSize={'lg'}>ᴇᴍᴀɪʟ</Text></label>            
            <Input  placeholder="Email Likh Do Bhai" mt={2} borderRadius={'none'}  p={5} />

            <Flex mt={5} justifyContent={'space-between'}>
            <label><Text fontSize={'lg'}>ᴘᴀssᴡᴏʀᴅ</Text></label>
            <label><Text fontSize={'lg'}>ғᴏʀɢᴏᴛ ᴘᴀssᴡᴏʀᴅ?</Text></label>
            </Flex> 

            <Input  placeholder="Password bhi Likh Do Bhai" mt={2} borderRadius={'none'} p={5} />
            
            <Button borderRadius={'none'} mt={5} w={'100%'} p={5} bg={'black'} color={'white'} _hover={{bg:'gray'}}>sɪɢɴ ɪɴ</Button>
            <NavLink to={'/signup'}>
            <Text textAlign={'center'} mt={5} fontSize={'lg'}>Create account</Text>
            </NavLink>
         </Box>
         <Footer/>
        </Box>
{/* ------------------------------------ */}


<Box display={["block", "block","none", "none" ]}>
                <Navbar/>
                <BlackOneSlider/>
         <Heading pt={5} textAlign={'center'}>𝙻𝙾𝙶𝙸𝙽</Heading>
            
         <Box w={'70vw'}  m={'auto'}   >

            <label><Text fontSize={'lg'}>ᴇᴍᴀɪʟ</Text></label>            
            <Input  placeholder="Email Likh Do Bhai" mt={2} borderRadius={'none'}  p={5} />

            <Flex mt={5} justifyContent={'space-between'}>
            <label><Text fontSize={'lg'}>ᴘᴀssᴡᴏʀᴅ</Text></label>
            <label><Text fontSize={'lg'}>ғᴏʀɢᴏᴛ ᴘᴀssᴡᴏʀᴅ?</Text></label>
            </Flex> 

            <Input  placeholder="Password bhi Likh Do Bhai" mt={2} borderRadius={'none'} p={5} />
            
            <Button borderRadius={'none'} mt={5} w={'100%'} p={5} bg={'black'} color={'white'} _hover={{bg:'gray'}}>sɪɢɴ ɪɴ</Button>
            <NavLink to={'/signup'}>
            <Text textAlign={'center'} mt={5} fontSize={'lg'}>Create account</Text>
            </NavLink>
         </Box>
         <Footer/>
        </Box>

 
        </>
 
    )
}

export default Login