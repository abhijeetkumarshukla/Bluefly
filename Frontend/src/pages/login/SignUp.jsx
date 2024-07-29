import { Box, Button, Checkbox, Heading, Input, Text, } from '@chakra-ui/react'
import Navbar from '/src/components/Navbar/Navbar.jsx'
import BlackOneSlider from '/src/components/slider/BlackOneSlider'
import Footer from '/src/components/Footer/Footer'
 
 
const SignUp = () => {

 
  return (
    <Box  >
         <Navbar/>
         <BlackOneSlider/>
         <Heading pt={5} textAlign={'center'}>𝙲𝚛𝚎𝚊𝚝𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝</Heading>
        
               
         <Box w={'30vw'}  m={'auto'} display={["none", "none", "none", "block"]}  >
           
         <form >

     

      
           <label><Text fontSize={'lg'}>ᴜsᴇʀɴᴀᴍᴇ</Text></label>            
            <Input 
            type="text"   required 
          
            placeholder="Name Please" mt={2} borderRadius={'none'}  p={5} />
           

           
            <label><Text fontSize={'lg'}>ᴇᴍᴀɪʟ</Text></label>            
            <Input 
            type="email"  required
            placeholder="Email Likhna Jaruri h Bhai" mt={2} borderRadius={'none'}  p={5} />
              
            

             
            <label><Text fontSize={'lg'}>ᴘᴀssᴡᴏʀᴅ</Text></label>
            <Input 
            type="password" name="password"  required 
             
            placeholder="Password To Ekdam Jaruri h Bhai" mt={2} borderRadius={'none'} p={5} />
            
            <Checkbox p={5} defaultChecked> Subscribe to stay updated with new offers!</Checkbox>
            
            <Button  
              type="submit"
           
              borderRadius={'none'} fontSize={'lg'} mt={5} w={'100%'} p={5} bg={'black'} color={'white'} _hover={{bg:'gray'}}>ᴄʀᴇᴀᴛᴇ</Button>
              
           </form>
         </Box> 
{/* ------------------------------------------------------ */}

         <Box w={'70vw'} pb={5} m={'auto'} mt={5} display={["block", "Block", "block", "none"]}  >

<label><Text fontSize={'lg'}>ᴜsᴇʀɴᴀᴍᴇ</Text></label>            
<Input  placeholder="Name Please" mt={2} borderRadius={'none'}  p={5} />

<label><Text fontSize={'lg'}>ᴇᴍᴀɪʟ</Text></label>            
<Input  placeholder="Email Likhna Jaruri h Bhai" mt={2} borderRadius={'none'}  p={5} />


<label><Text fontSize={'lg'}>ᴘᴀssᴡᴏʀᴅ</Text></label>
<Input  placeholder="Password To Ekdam Jaruri h Bhai" mt={2} borderRadius={'none'} p={5} />

<Checkbox p={5} defaultChecked> Subscribe to stay updated with new offers!</Checkbox>

<Button borderRadius={'none'} fontSize={'lg'} mt={5} w={'100%'} p={5} bg={'black'} color={'white'} _hover={{bg:'gray'}}>ᴄʀᴇᴀᴛᴇ</Button>

</Box>


         

         <Footer/>
    </Box>
  )
}

export default SignUp
