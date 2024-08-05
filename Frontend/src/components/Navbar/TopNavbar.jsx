import {  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Flex, Image, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { TfiUser } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useRef } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
 
 

const TopNavbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
   <>
     <Flex pt={'7'}  display={["none", "none", "flex", "flex"]}  >
  


         <Flex w={'57%'}     
      justifyContent="end" >
           <NavLink to={'/'}>
           <Image h={'31'} w={"50"} src="https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141" alt="main_logo"/>
           </NavLink>
         </Flex>

         <Flex w={'42%'}  pt={'2'} gap={'4'}   pr={'8'} justifyContent={'end'}>
           <CiSearch  size={'26'}/> 
         <Text ml={'-3'} fontSize='md'>SEARCH</Text>
         <NavLink to={'/login'}><TfiUser size={'23'} /> </NavLink>
         
         <HiOutlineShoppingBag  size={'24'}/>
         <NavLink to={'/cart'}> <GoHeart  size={'24'}/>   </NavLink>
         
         </Flex>  
        </Flex>   



        {/* --------------------------------------------------------------------- */}
  


        <Flex pt={'3'} justifyContent={'space-between'} display={["flex", "flex", "none", "none"]} >
     <Flex  >
     <Button ref={btnRef}   bg={'white'} onClick={onOpen}>
     <HiMiniBars3CenterLeft size={30} />

      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            

          <SimpleGrid pt={10} w={'100%'}>
           
           <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
         
            
          <AccordionButton p={4} >
               <Text fontSize={'xl'}>

               CLOTHING 
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          
         
          <AccordionPanel pb={4} >

            <SimpleGrid gap={2} >

           
                 <Checkbox >Shop All</Checkbox>
                <Checkbox >ActiveWear</Checkbox>
                <Checkbox >Coats & Jackets</Checkbox>
                <Checkbox >Dressess</Checkbox>
                <Checkbox >Jeans & Denim</Checkbox>
                <Checkbox >Jumpsuits</Checkbox>
                <Checkbox >Lingerie</Checkbox>
                <Checkbox >Loungewear</Checkbox>
                <Checkbox >Pants</Checkbox>
                <Checkbox >Shorts({100})</Checkbox>
                
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      
        <AccordionItem>
        <AccordionButton p={4} >
               <Text fontSize={'xl'}>

               SHOES
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            <SimpleGrid>
               <Checkbox >Shop All</Checkbox>
                <Checkbox >Boots</Checkbox>
                <Checkbox >Drivers, Loofers</Checkbox>
                <Checkbox >Oxford</Checkbox>
                <Checkbox >Sandals</Checkbox>
                <Checkbox >Slippers</Checkbox>
                <Checkbox >Sneakers</Checkbox>
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
        
         <AccordionItem>
         <AccordionButton p={4} >
               <Text fontSize={'xl'}>

               HANDBAGS
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            <SimpleGrid>
                    
               <Checkbox>Shop All</Checkbox>
                <Checkbox>Bagpacks </Checkbox>
                <Checkbox >Bucket Bags</Checkbox>
                <Checkbox> Clutches</Checkbox>
                <Checkbox>Crossbody Bags</Checkbox>
                <Checkbox >Hobo Bags</Checkbox>
                <Checkbox>Satchels</Checkbox>
                <Checkbox>Shoulder Bags</Checkbox>
                 
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
        
         <AccordionItem>
         <AccordionButton p={4} >
               <Text fontSize={'xl'}>

               DESIGNERS
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
          <SimpleGrid>
          <Checkbox> Clutches</Checkbox>
                <Checkbox>Crossbody Bags</Checkbox>
                <Checkbox >Hobo Bags</Checkbox>
                <Checkbox>Satchels</Checkbox>
                <Checkbox>Shoulder Bags</Checkbox>   
                 </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
        
          <AccordionItem>
          <AccordionButton p={4} >
               <Text fontSize={'xl'}>

                SUNGLASSES
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
          <SimpleGrid>
                    <Checkbox >Unisex({836})</Checkbox>
                     <Checkbox  > Women({117})</Checkbox>
                     <Checkbox > Kids({4}) </Checkbox>  
                     <Checkbox > Men({1}) </Checkbox>     
                 </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem>
        <AccordionButton p={4} >
               <Text fontSize={'xl'}>

               JEWELRY & WATCHES
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
          <SimpleGrid>
                    <Checkbox  > Light({650})</Checkbox>
                     <Checkbox  >  Average(301)</Checkbox>
                     <Checkbox > Kids({4}) </Checkbox>  
                     <Checkbox  > Men({1}) </Checkbox>  
                     
                 </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      
      
      
        <AccordionItem>
        <AccordionButton p={4} >
               <Text fontSize={'xl'}>

                ACCESSORIES
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
          <SimpleGrid>
                    <Checkbox> Light({650})</Checkbox>
                     <Checkbox>  Average(301)</Checkbox>
                     <Checkbox> Kids({4}) </Checkbox>  
                     <Checkbox> Men({1}) </Checkbox>  
                     <Checkbox> Light({650})</Checkbox>
                     <Checkbox>  Average(301)</Checkbox>   
                 </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      
      
      
        <AccordionItem>
        <AccordionButton p={4} >
               <Text fontSize={'xl'}>

              HOME
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
          <SimpleGrid>
                    <Checkbox > Light({650})</Checkbox>
                     <Checkbox >  Average(301)</Checkbox>
                     <Checkbox > Kids({4}) </Checkbox>  
                     <Checkbox > Men({1}) </Checkbox>  
                     <Checkbox > Light({650})</Checkbox>
                     <Checkbox >  Average(301)</Checkbox>   
                 </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>   
      
             
        <AccordionItem>
        <AccordionButton p={4} >
               <Text fontSize={'xl'}>

               UNDER $50
               </Text>
              
              <Box flex="1" />
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
          <SimpleGrid>
                    <Checkbox > Light({650})</Checkbox>
                     <Checkbox >  Average(301)</Checkbox>
                     <Checkbox > Kids({4}) </Checkbox>  
                     <Checkbox > Men({1}) </Checkbox>  
                     <Checkbox > Light({650})</Checkbox>
                     <Checkbox >  Average(301)</Checkbox>   
                 </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      
      
      
        <AccordionItem>
           <AccordionButton p={4} >
           <Text fontSize={'xl'}>

           CLEARANCE
           </Text>
          
          <Box flex="1" />
          <AccordionIcon />
        </AccordionButton>
          <AccordionPanel pb={4}>
          <SimpleGrid>
                    <Checkbox > Light({650})</Checkbox>
                     <Checkbox >  Average(301)</Checkbox>
                     <Checkbox > Kids({4}) </Checkbox>  
                     <Checkbox > Men({1}) </Checkbox>  
                     <Checkbox > Light({650})</Checkbox>
                     <Checkbox >  Average(301)</Checkbox>   
                 </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
           </SimpleGrid>


          </DrawerBody>
          <DrawerFooter   w={'100%'}>
             <Link to={'/login'}>
             <Button mr={5} w={'250px'} border={'1px solid black'}  onClick={onClose}>
               Account 
            </Button>
             </Link>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
     </Flex>


         <Flex
              
      justifyContent="end" pl={3} pt={'1'} >
          <Image  height={'25'}    width={'160px'} src="https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141" alt="main_logo"/>
         </Flex>

         <Flex   pt={'2 '} gap={'2'}   pr={'4'} justifyContent={'end'}>
           <CiSearch  size={'26'}/> 
        
         
           <HiOutlineShoppingBag  size={'24'}/>
        <NavLink to={'/cart'}>  <GoHeart  size={'24'}/>  </NavLink>
         
         </Flex>  
        </Flex> 


   </>
  )
}

export default TopNavbar
