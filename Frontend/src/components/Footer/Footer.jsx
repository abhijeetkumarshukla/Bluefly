import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button,  Divider,  Flex,  Image,  Input, SimpleGrid, Text } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
 

const Footer = () => {
  return (
    <>
    <SimpleGrid mt={12} h={'500px'} bg={'#E6E6E6'} display={["none", "none", "block", "block"]} >
        <SimpleGrid columns={3} 
         w={'70%'} h={'150px'} ml={20} pt={'30px'}>
        <SimpleGrid   >
            <Text fontSize={'lg'}>ABOUT US</Text>
        <Text>Contact Us</Text>
        <Text>Frequently Asked Questions</Text>
        <Text>Shipping & Returns</Text>
        <Text>Pre-Owned Guide</Text>
        <Text>Sell on Bluefly</Text>
        </SimpleGrid>

        <SimpleGrid fontSize={'md'}>
        <Text>Sell on Bluefly </Text>
        <Text>Privacy Policy</Text>
        <Text>Terms & Conditions</Text>
        <Text>Do not sell my personal information</Text>
        <Text>Shop Pay Installments</Text>
        </SimpleGrid>

        <SimpleGrid gap={2}>
        <Text fontSize={'lg'}>Sign up and save</Text>
            <Text fontSize={'sm'}>Subscribe to get exclusive offers on designer brands</Text>
            <Input  bg={'white'} color={"black"} borderRadius={'none'} placeholder="Enter Email Here"/>
            <Button borderRadius={'none'} bg={"black"} color={'white'}>Subscribe</Button>
           
            <Box>
    <Flex gap={3}>
      <Box as={BsInstagram} size="26px" />
      <Box as={FaFacebookF} size="26px" />
    </Flex>
  </Box>
                
        
        </SimpleGrid>
        </SimpleGrid>


        {/* ========== */}

        <SimpleGrid pt={'150px'}  justifyContent="center" alignItems="center" m="auto" textAlign="center">
            <Image w="250px" m={'auto'}  src="https://www.bluefly.com/cdn/shop/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" />
            <Text mt={5} fontSize="sm">© 2024 Bluefly BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</Text>
        </SimpleGrid>
    </SimpleGrid>

     {/* ---------------------------------------------------------------------- */}

     <Box bg={'#E6E6E6'} display={[ "block", "block","none", "none" ]}>
     <Accordion allowToggle>
            <AccordionItem border="none">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                     ABOUT US
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
               

              <SimpleGrid columns={2} 
         pl={2} h={'160px'}  pt={'20px'}>
        <SimpleGrid   > 
        <Text>Contact Us</Text>
        <Text>Frequently Asked Questions</Text>
        <Text>Shipping & Returns</Text>
        <Text>Pre-Owned Guide</Text>
        <Text>Sell on Bluefly</Text>
        </SimpleGrid>

        <SimpleGrid fontSize={'md'}>
  
        <Text>Privacy Policy</Text>
        <Text>Terms & Conditions</Text>
        <Text>Do not sell my personal information</Text>
        <Text>Shop Pay Installments</Text>
        </SimpleGrid></SimpleGrid>

              </AccordionPanel>
            </AccordionItem>
  
            <Divider orientation="horizontal" w={"100%"} m={"auto"} />
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                  SIGN UP AND SAVE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                
              <SimpleGrid gap={2}>
      
            <Text fontSize={'sm'}>Subscribe to get exclusive offers on designer brands</Text>
            <Input  bg={'white'} color={"black"} borderRadius={'none'} placeholder="Enter Email Here"/>
            <Button borderRadius={'none'} bg={"black"} color={'white'}>Subscribe</Button>
           
            <Box>
    <Flex gap={3}>
      <Box as={BsInstagram} size="26px" />
      <Box as={FaFacebookF} size="26px" />
    </Flex>
  </Box>
                
        
        </SimpleGrid>

              </AccordionPanel>
            </AccordionItem>
  
            <Divider orientation="horizontal" w={"100%"} m={"auto"} />   
          </Accordion>

          <SimpleGrid  pt={2} justifyContent="center" alignItems="center" m="auto" textAlign="center">
            <Image w="250px" m={'auto'}  src="https://www.bluefly.com/cdn/shop/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" />
            <Text mt={5} fontSize="sm">© 2024 Bluefly BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</Text>
        </SimpleGrid>
  
     </Box>
    </>
  )
}

export default Footer
