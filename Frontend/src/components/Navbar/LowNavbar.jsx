import { Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger } from "@chakra-ui/react"
import { useState } from "react";

 

const LowNavbar = () => {
    const [hoverOne,setHoverOne] = useState(false);
    const isHoverOneTrue = ()=>{
        setHoverOne(true);
      }
     const isHoverOneFalse = ()=>{
        setHoverOne(false);
      }
  return (
     <Flex justifyContent={'center'}  display={["none", "none", "flex", "flex"]}>
        <Popover  isOpen={hoverOne} onClose={() => setHoverOne(false)} onOpen={() => setHoverOne(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverOneTrue}
        onMouseLeave={isHoverOneFalse}
        fontStyle= {'initial'}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'red'}
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    > 𝙲𝙻𝙴𝙰𝚁𝙰𝙽𝙲𝙴</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
 
     </Flex>
  )
}

export default LowNavbar
