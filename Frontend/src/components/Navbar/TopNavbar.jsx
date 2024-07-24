import {  Flex, Image, Text } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { TfiUser } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
 

const TopNavbar = () => {
  return (
   <>
     <Flex pt={'7'}  >
         <Flex w={'57%'}     
      justifyContent="end" >
          <Image h={'31'} w={"50"} src="https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141" alt="main_logo"/>
         </Flex>

         <Flex w={'42%'}  pt={'2'} gap={'4'}   pr={'8'} justifyContent={'end'}>
           <CiSearch  size={'26'}/> 
         <Text ml={'-3'} fontSize='md'>SEARCH</Text>
         <TfiUser size={'23'} />
         <GoHeart  size={'24'}/>
         <HiOutlineShoppingBag  size={'24'}/>
         
         </Flex>
         
        </Flex>   
   </>
  )
}

export default TopNavbar
