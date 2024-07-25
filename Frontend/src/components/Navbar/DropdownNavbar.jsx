import { Button, Flex,  Image, Link, Popover,  PopoverBody,  PopoverContent,  PopoverTrigger, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react";


const DropDownNavbar = () => {

    const [hoverOne,setHoverOne] = useState(false);
    const [hoverTwo,setHoverTwo] = useState(false);
    const [hoverThree,setHoverThree] = useState(false);
    const [hoverFour,setHoverFour] = useState(false);
    const [hoverFive,setHoverFive] = useState(false);
    const [hoverSix,setHoverSix] = useState(false);
    const [hoverSeven,setHoverSeven] = useState(false);
    const [hoverEight,setHoverEight] = useState(false);
    const [hoverNine,setHoverNine] = useState(false);
     

    const isHoverOneTrue = ()=>{
      setHoverOne(true);
    }
   const isHoverOneFalse = ()=>{
      setHoverOne(false);
    }

    
    const isHoverTwoTrue = ()=>{
      setHoverTwo(true);
    }
   const isHoverTwoFalse = ()=>{
      setHoverTwo(false);
    }


    const isHoverThreeTrue = ()=>{
      setHoverThree(true);
    }
   const isHoverThreeFalse = ()=>{
      setHoverThree(false);
    }


    const isHoverFourTrue = ()=>{
      setHoverFour(true);
    }
   const isHoverFourFalse = ()=>{
      setHoverFour(false);
    }


    const isHoverFiveTrue = ()=>{
      setHoverFive(true);
    }
   const isHoverFiveFalse = ()=>{
      setHoverFive(false);
    }



    const isHoverSixTrue = ()=>{
      setHoverSix(true);
    }
   const isHoverSixFalse = ()=>{
      setHoverSix(false);
    }


    const isHoverSevenTrue = ()=>{
      setHoverSeven(true);
    }
   const isHoverSevenFalse = ()=>{
      setHoverSeven(false);
    }


    const isHoverEightTrue = ()=>{
        setHoverEight(true);
      }
     const isHoverEightFalse = ()=>{
        setHoverEight(false);
      }

      
    const isHoverNineTrue = ()=>{
        setHoverNine(true);
      }
     const isHoverNineFalse = ()=>{
        setHoverNine(false);
      }
  return (
   <>
    
    <Flex  
       
       justifyContent={'space-evenly'}   
      zIndex={2}
      pt={'1'}>

    <Flex gap={'4'}      >
      {/* CLOTHING */}
    <Popover  isOpen={hoverOne} onClose={() => setHoverOne(false)} onOpen={() => setHoverOne(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverOneTrue}
        onMouseLeave={isHoverOneFalse}
          pt={"5"}
          // pr={"1"}
          pb={5}
          
          fontWeight={480}
          _hover={{ borderBottom: "2px solid black" ,  background: "none"}}
          borderRadius={"none"}
          variant={'ghost'}    
    >CLOTHING</Button>
  </PopoverTrigger>
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverOneTrue}  onMouseLeave={isHoverOneFalse} >
     <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(3,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"60%"}>
      <SimpleGrid>
         <Image src="https://www.bluefly.com/cdn/shop/files/women.jpg?v=1613619704"/>
          <Text fontWeight={600}>Dresses</Text>
          <Text>Up to 80% Off</Text>           
      </SimpleGrid>

      <SimpleGrid>
      <Link to={"/womensclothing"}> <Text fontWeight={600}>Womens Clothing</Text></Link>  
             

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
                         Activewear
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
                        Jeans & Denim  
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Jumpsuits & Rompers
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
                          Loungewear & Sleepwear
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                      Shorts
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Skirts
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
                          Sweatshirts & Hoodies        
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Swimwear & Coverups
                        </Text>
                      </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}>Mens Clothing</Text>

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
                         Activewear
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
                           Casual Button-Down Shirts
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
                           Jeans & Denim
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           pants
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Polo Shirts
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                      Shorts
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Sport Coats & Blazers
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
                          Sweatshirts & Hoodies        
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Swimwear & Coverups
                        </Text>
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>

{/*SHOES            ----------------------------------------------------- */}


 
<Popover isOpen={hoverTwo} onClose={() => setHoverTwo(false)} onOpen={() => setHoverTwo(true)}>
  <PopoverTrigger>
    <Button
      onMouseEnter={isHoverTwoTrue}
      onMouseLeave={isHoverTwoFalse}
      pt={5}
      pb={5}
      fontWeight={400}
      variant='ghost'
      _hover={{ borderBottom: "2px solid black", background: "none" }}
      borderRadius="none"
    >
      SHOES
    </Button>
  </PopoverTrigger>
  <PopoverContent w='100vw' onMouseEnter={isHoverTwoTrue} onMouseLeave={isHoverTwoFalse}>
    <PopoverBody>
      <SimpleGrid gridTemplateColumns="repeat(4, 1fr)" gap={3} color="#61608B" m="auto" w="60%">
        <SimpleGrid>
          <Link to="/womensshoes">
            <Text fontWeight={600}>Womens Shoes</Text>
          </Link>
          <SimpleGrid gap={3} mt={5}>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Boots
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Espadrilles
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Flats
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Mules & Slides
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Oxfords & Loafers
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Pumps & Heels
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Sandals
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Slippers
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Sneakers
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Sweaters
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Wedges
            </Text>
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid>
          <Text fontWeight={600}>Womens Designers</Text>
          <SimpleGrid gap={3} mt={5}>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Alexander McQueen
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Balenciaga
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Bottega Veneta
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Christian Louboutin
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Dolce & Gabbana
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Fendi
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Gianvito Rossi
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Gucci
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Jimmy Choo
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Manolo Blahnik
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Saint Laurent
            </Text>
            
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid>
          <Link to="/mensshoes">
            <Text fontWeight={600}>Mens Shoes</Text>
          </Link>
          <SimpleGrid mt={'-10'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Boots
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Drivers, Loafers & Slip-Ons
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Oxford & Derby Shoes
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Sandals & Flip Flops
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Slippers
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Sneakers
            </Text>
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid>
          <Text fontWeight={600}>Mens Designers</Text>
          <SimpleGrid gap={3} mt={5}>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Alexander McQueen
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Balenciaga
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Bottega Veneta
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Christian Louboutin
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Dolce & Gabbana
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Burberry
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Common Projects
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Gucci
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Golden Goose
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Off-White
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Saint Laurent
            </Text>
          </SimpleGrid>
        </SimpleGrid>
      </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>

{/* HANDBAGS */}

<Popover  isOpen={hoverThree} onClose={() => setHoverThree(false)} onOpen={() => setHoverThree(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverThreeTrue}
        onMouseLeave={isHoverThreeFalse}
          pt={"5"}
        
          pb={5}
          
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >HANDBAGS</Button>
  </PopoverTrigger>
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverThreeTrue}  onMouseLeave={isHoverThreeFalse}>   
    <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(3,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"60%"}>
      <SimpleGrid>
         <Image src="https://www.bluefly.com/cdn/shop/files/handbag2.jpg?v=1613619716"/>
          <Text fontWeight={600}> Satchels</Text>
          <Text>Up to 80% Off</Text>           
      </SimpleGrid>

      <SimpleGrid>
      <Link to={"/allhandbags"}> <Text fontWeight={600}> All Handbags</Text></Link>  
             

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
                         Backpacks
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Bucket Bags
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Clutches
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                       Crossbody Bags 
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Hobo Bags
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Satchels
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Shoulder Bags
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Tote Bags
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Skirts
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Travel Bags & Luggage                
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Wallets & Cardholders     
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Swimwear & Coverups
                        </Text>
                      </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}> Top Designers</Text>

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
                         Balenciaga
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Bottega Veneta
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Burberry
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Celine
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        > Chloe
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Dolce & Gabbana
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Fendi
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Givenchy
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Gucci
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Mario Valentino           
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Prada    
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Saint Laurent
                        </Text>
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>


    </PopoverBody>
  </PopoverContent>
</Popover>


{/* DESIGNERS  */}


<Popover  isOpen={hoverFour} onClose={() => setHoverFour(false)} onOpen={() => setHoverFour(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverFourTrue}
        onMouseLeave={isHoverFourFalse}
          pt={"5"}
          
          pb={5}
          
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >DESIGNERS</Button>
  </PopoverTrigger>
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverFourTrue}  onMouseLeave={isHoverFourFalse}>
    
     
    <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(3,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"60%"}>
      <SimpleGrid>
         <Image src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701"/>
          <Text fontWeight={600}> Gucci</Text>
          <Text>Up to 64% Off</Text>           
      </SimpleGrid>

      <SimpleGrid>
      <Link to={"/allhandbags"}> <Text fontWeight={600}>Featured Designers</Text></Link>  
             

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
                        Alexander McQueen
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Balenciaga
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Bottega Veneta
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Burberry
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Celine
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Chloe
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Christian Louboutin
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Dior
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Dolce & Gabbana
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Travel Bags & Luggage                
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Fendi    
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Gianvito Rossi
                        </Text>
                      </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}> </Text>

        <SimpleGrid gap={3} mt={5}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Givenchy
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Gucci
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Jimmy Choo
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Manolo Blahnik
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Mario Valentino
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        > 
                        Moschino
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Off-White
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Palm Angels
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Prada
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
                        Salvatore Ferragamo       
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Stella McCartney  
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Tom Ford
                        </Text>
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>


    </PopoverBody>
  </PopoverContent>
</Popover>


{/* SUNGLASSES */}


<Popover  isOpen={hoverFive} onClose={() => setHoverFive(false)} onOpen={() => setHoverFive(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverFiveTrue}
        onMouseLeave={isHoverFiveFalse}
          pt={"5"}
          pb={5}
          
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >SUNGLASSES</Button>
  </PopoverTrigger>
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverFiveTrue}  onMouseLeave={isHoverFiveFalse}>
    
     
    <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(2,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"40%"}>
       
      <SimpleGrid>
      <Link to={"/allhandbags"}> <Text fontWeight={600}>  Womens Sunglasses</Text></Link>  
             

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
                           Balenciaga
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Dior
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Emilio Pucci
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Fendi
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Givenchy
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Gucci
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >                          
                        Jimmy Choo
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Oliver Peoples
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                       Prada
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Roberto Cavalli            
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
                        Salvatore Ferragamo
                        </Text>
                      </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}>Mens Sunglasses </Text>

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
                           Burberry
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Carrera
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Dior
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Ermenegildo Zegna
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        > 
                        Givenchy
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                             Gucci
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Jimmy Choo
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Montblanc
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Persol
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Prada       
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                        Ray Ban
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Saint Laurent
                        </Text>
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>




    </PopoverBody>
  </PopoverContent>
</Popover>

{/* JEWELRY & WATCHES */}

<Popover  isOpen={hoverSix} onClose={() => setHoverSix(false)} onOpen={() => setHoverSix(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverSixTrue}
        onMouseLeave={isHoverSixFalse}
          pt={"5"}
        
          pb={5}
           
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >JEWELRY & WATCHES</Button>
  </PopoverTrigger>
  <PopoverContent  w={'100vw'}  onMouseEnter={isHoverSixTrue}  onMouseLeave={isHoverSixFalse}>
   
     
    <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(2,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"30%"}>
       
      <SimpleGrid>
      <Link to={"/allhandbags"}> <Text fontWeight={600}>  Jewelry</Text></Link>  
             

      <SimpleGrid gap={3} >
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
                           Bracelets
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Brooches & Pins
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Earrings
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Necklaces
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Rings
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Watches
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >                          
                         Mens Jewelry
                        </Text>


 
                      </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}> Featured Designer Watches </Text>

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
                           CT Scuderia
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Esprit
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Glycine
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Gucci
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        > 
                         Hamilton
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Invicta
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Jacques Lemans
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Jacy
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Juicy Couture
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Michael Kors   
                        </Text>

                         
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>



    </PopoverBody>
  </PopoverContent>
</Popover>


{/* ACCESSORIES */}


<Popover isOpen={hoverSeven} onClose={() => setHoverSeven(false)} onOpen={() => setHoverSeven(true)}>
  <PopoverTrigger>
    <Button
      onMouseEnter={isHoverSevenTrue}
      onMouseLeave={isHoverSevenFalse}
      pt={5}
      pb={5}
      variant="ghost"
      fontWeight={400}
      _hover={{ borderBottom: "2px solid black", background: "none" }}
      borderRadius="none"
    >
      ACCESSORIES
    </Button>
  </PopoverTrigger>
  <PopoverContent w="100vw" onMouseEnter={isHoverSevenTrue} onMouseLeave={isHoverSevenFalse}>
    <PopoverBody>
      <SimpleGrid gridTemplateColumns="repeat(2, 1fr)" gap={3} color="61608B" m="auto" w="30%">
        <SimpleGrid>
          <Link to="/allhandbags">
            <Text fontWeight={600}>Womens Accessories</Text>
          </Link>
          <SimpleGrid gap={3}>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Bag Charms, Straps, & Accessories
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Belts
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Cosmetic Bags
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Gloves
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Scarves & Wraps
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Optical & Reading Glasses
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Travel Bags & Luggage
            </Text>
          </SimpleGrid>
        </SimpleGrid>

        <SimpleGrid>
          <Text fontWeight={600}>Mens Accessories</Text>
          
        </SimpleGrid>

        <SimpleGrid>
          <Text fontWeight={600}>Shop All</Text>
        </SimpleGrid>
      </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>

 


{/* HOME*/}

    
<Popover  isOpen={hoverEight} onClose={() => setHoverEight(false)} onOpen={() => setHoverEight(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverEightTrue}
        onMouseLeave={isHoverEightFalse}
          pt={"5"}
        
          pb={5}
          
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >HOME</Button>
  </PopoverTrigger>
  <PopoverContent  w="100vw" onMouseEnter={isHoverEightTrue} onMouseLeave={isHoverEightFalse}>
    
     
    <PopoverBody  >
      <SimpleGrid gridTemplateColumns="repeat(2, 1fr)" gap={3} color="61608B" m="auto" w="30%">
    <SimpleGrid>
        <Text fontWeight={600}> Home </Text>
          
        <SimpleGrid gap={3}  mt={'5'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Travel Bags & Luggage
            </Text>
          </SimpleGrid>
        
      </SimpleGrid>

      
      <SimpleGrid>
        <Text fontWeight={600}> Beauty  </Text>
          
        <SimpleGrid gap={3}  mt={'5'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Perfume
            </Text>
          </SimpleGrid>
        </SimpleGrid> 
        
      </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>
 
 {/* UNDER $50 */}

<Popover  isOpen={hoverNine} onClose={() => setHoverNine(false)} onOpen={() => setHoverNine(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverNineTrue}
        onMouseLeave={isHoverNineFalse}
          pt={"5"}
       
          pb={5}
          
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >UNDER $50</Button>
  </PopoverTrigger>
  <PopoverContent  w="100vw" onMouseEnter={isHoverNineTrue} onMouseLeave={isHoverNineFalse}>
    
     
    <PopoverBody> 

    <SimpleGrid gridTemplateColumns="repeat(2, 1fr)" gap={3} color="61608B" m="auto" w="30%">
    <SimpleGrid>
        <Text fontWeight={600}>  Shop By Pricepoint </Text>
          
        <SimpleGrid gap={3}  mt={'5'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Shop All Under $50
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Under $25
            </Text>

            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            $25-$49.99
            </Text>
          </SimpleGrid>
        
      </SimpleGrid>

      
      <SimpleGrid>
        <Text fontWeight={600} >Shop By Category </Text>
          
        <SimpleGrid gap={3}  mt={'5'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Women
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Men
            </Text>

            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Shoes
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Handbags & Accessories
            </Text>

            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Jewelry
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Kids
            </Text>
          </SimpleGrid>
        </SimpleGrid> 
        
      </SimpleGrid>

    </PopoverBody>
  </PopoverContent>
</Popover>

    </Flex>  
    </Flex>
    
   </>
  )
}

export default DropDownNavbar
