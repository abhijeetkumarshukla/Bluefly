import {  Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Flex, Image, Text, useDisclosure } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { TfiUser } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useRef } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
 
 

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
         <GoHeart  size={'24'}/>
         <HiOutlineShoppingBag  size={'24'}/>
         
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
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
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
        
         
         <GoHeart  size={'24'}/>
         <HiOutlineShoppingBag  size={'24'}/>
         
         </Flex>  
        </Flex> 


   </>
  )
}

export default TopNavbar
