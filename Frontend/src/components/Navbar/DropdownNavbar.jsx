import { Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent,  PopoverTrigger } from "@chakra-ui/react"
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

    <Flex gap={'7'}    >
      {/* CLOTHING */}
    <Popover  isOpen={hoverOne} onClose={() => setHoverOne(false)} onOpen={() => setHoverOne(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverOneTrue}
        onMouseLeave={isHoverOneFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          
          _hover={{ borderBottom: "2px solid black" ,  background: "none"}}
          borderRadius={"none"}
          variant={'ghost'}    
    >CLOTHING</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>

{/*SHOES  */}


<Popover  isOpen={hoverTwo} onClose={() => setHoverTwo(false)} onOpen={() => setHoverTwo(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverTwoTrue}
        onMouseLeave={isHoverTwoFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          variant={'ghost'}
          _hover={{ borderBottom: "2px solid blue",  background: "none" }}
          borderRadius={"none"}    
    >SHOES</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>

{/* HANDBAGS */}

<Popover  isOpen={hoverThree} onClose={() => setHoverThree(false)} onOpen={() => setHoverThree(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverThreeTrue}
        onMouseLeave={isHoverThreeFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          variant={'ghost'}
          _hover={{ borderBottom: "2px solid blue",  background: "none" }}
          borderRadius={"none"}    
    >HANDBAGS</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>


{/* DESIGNERS  */}


<Popover  isOpen={hoverFour} onClose={() => setHoverFour(false)} onOpen={() => setHoverFour(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverFourTrue}
        onMouseLeave={isHoverFourFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          variant={'ghost'}
          _hover={{ borderBottom: "2px solid blue",  background: "none" }}
          borderRadius={"none"}    
    >DESIGNERS</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>


{/* SUNGLASSES */}


<Popover  isOpen={hoverFive} onClose={() => setHoverFive(false)} onOpen={() => setHoverFive(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverFiveTrue}
        onMouseLeave={isHoverFiveFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          variant={'ghost'}
          _hover={{ borderBottom: "2px solid blue",  background: "none" }}
          borderRadius={"none"}    
    >SUNGLASSES</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>

{/* JEWELRY & WATCHES */}

<Popover  isOpen={hoverSix} onClose={() => setHoverSix(false)} onOpen={() => setHoverSix(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverSixTrue}
        onMouseLeave={isHoverSixFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          variant={'ghost'}
          _hover={{ borderBottom: "2px solid blue",  background: "none" }}
          borderRadius={"none"}    
    >JEWELRY & WATCHES</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>


{/* ACCESSORIES */}


<Popover  isOpen={hoverSeven} onClose={() => setHoverSeven(false)} onOpen={() => setHoverSeven(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverSevenTrue}
        onMouseLeave={isHoverSevenFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          variant={'ghost'}
          _hover={{ borderBottom: "2px solid blue" ,  background: "none"}}
          borderRadius={"none"}    
    >ACCESSORIES</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
 


{/* HOME*/}

    
<Popover  isOpen={hoverEight} onClose={() => setHoverEight(false)} onOpen={() => setHoverEight(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverEightTrue}
        onMouseLeave={isHoverEightFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          variant={'ghost'}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >HOME</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
 
 {/* UNDER $50 */}

<Popover  isOpen={hoverNine} onClose={() => setHoverNine(false)} onOpen={() => setHoverNine(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverNineTrue}
        onMouseLeave={isHoverNineFalse}
          pt={"5"}
          pr={"1"}
          pb={5}
          color={'gray'}
          variant={'ghost'}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >UNDER $50</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
     
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>

    </Flex>  
    </Flex>
    
   </>
  )
}

export default DropDownNavbar
