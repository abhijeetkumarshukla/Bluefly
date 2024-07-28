import { Button, Flex, Popover,   PopoverBody,   PopoverContent, PopoverTrigger, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react";
import { NavLink } from "react-router-dom";

 

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
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverOneTrue}  onMouseLeave={isHoverOneFalse}>
   
     
    <PopoverBody> 

       
    <SimpleGrid   gridTemplateColumns={"repeat(2,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"40%"}>
       
      <SimpleGrid>
      <NavLink to={"/allhandbags"}> <Text fontWeight={600}> Womens </Text></NavLink>  
             

      <SimpleGrid gap={3} mt={5}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Shop All
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        > Activewear
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Accessories
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Coats & Jackets
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Dresses
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Handbags
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Jeans & Denim
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >                          
                         Jewelry
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Lingerie & Hosiery
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Pants & Leggings 
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Shoes         
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Saint Laurent
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                       Sunglasses
                        </Text>
                      </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}> Mens</Text>

        <SimpleGrid gap={3} mt={5}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Shop All
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Accessories
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Coats & Jackets
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Dress Shirts
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Pants
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >  Polo Shirts
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                             Shoes
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                             Suits & Separates
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Sunglasses
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                             Sweaters
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            T-Shirts
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Watches
                        </Text>

                         
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>

    </PopoverBody>
  </PopoverContent>
</Popover>
 
     </Flex>
  )
}

export default LowNavbar
