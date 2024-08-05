import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, SimpleGrid } from '@chakra-ui/react'
 

const Left = () => {
  return (
   <>
     <SimpleGrid >
           
     <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span'    >
        BRAND
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      <SimpleGrid >

          <Checkbox colorScheme="green">Black ({26})</Checkbox>
          <Checkbox colorScheme="green">Blue ({28})</Checkbox>
          <Checkbox colorScheme="green">White ({85})</Checkbox>
          <Checkbox colorScheme="green">Gold ({25})</Checkbox>
          <Checkbox colorScheme="green">Silver ({54})</Checkbox>
          <Checkbox colorScheme="green">Green ({95})</Checkbox>
          <Checkbox colorScheme="green">Pink ({65})</Checkbox>
          <Checkbox colorScheme="green">Red ({55})</Checkbox>
          <Checkbox colorScheme="green">Yellow ({15})</Checkbox>
          <Checkbox colorScheme="green">voilet ({100})</Checkbox>
          <Checkbox colorScheme="green">Silver ({20})</Checkbox>
          <Checkbox colorScheme="green">Green ({44})</Checkbox>
      </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span'    >
      SUB CATEGORY 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <SimpleGrid>
         <Checkbox colorScheme="green"> Vincent Chase({443})</Checkbox>
          <Checkbox colorScheme="green">Lenskart Air({397})</Checkbox>
          <Checkbox colorScheme="green"> LENSKART HUSTLR({52})</Checkbox>
          <Checkbox colorScheme="green"> OJOS({43})</Checkbox>
          <Checkbox colorScheme="green"> Lenskart STUDIO({21})</Checkbox>
          <Checkbox colorScheme="green"> Lenskart Air LA({2})</Checkbox>
      </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>
  
   <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span'>
        COLOR
       </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <SimpleGrid>
              
         <Checkbox colorScheme="green"> Extra Narrow({60})</Checkbox>
          <Checkbox colorScheme="green">Narrow({188}) </Checkbox>
          <Checkbox colorScheme="green">Medium({453}) </Checkbox>
          <Checkbox colorScheme="green">Wide({194})</Checkbox>
          <Checkbox colorScheme="green">Extra Wide({63})  </Checkbox>
           
      </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>
  
   <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' >
        CATAGORY
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SimpleGrid>
              <Checkbox colorScheme="green">Rs. 1500 - Rs. 1999({904})</Checkbox>
               <Checkbox colorScheme="green"> Rs. 2000 - Rs. 2499({3})</Checkbox>
               <Checkbox colorScheme="green">Rs. 3000 - Rs. 3499(51) </Checkbox>     
           </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>
  
    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span'>
        SIZE WOMENS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SimpleGrid>
              <Checkbox colorScheme="green">Unisex({836})</Checkbox>
               <Checkbox colorScheme="green"> Women({117})</Checkbox>
               <Checkbox colorScheme="green"> Kids({4}) </Checkbox>  
               <Checkbox colorScheme="green"> Men({1}) </Checkbox>     
           </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span'>
       SIZE S-M-L
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SimpleGrid>
              <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>
               <Checkbox colorScheme="green"> Kids({4}) </Checkbox>  
               <Checkbox colorScheme="green"> Men({1}) </Checkbox>  
               
           </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span'>
        PERCENT OFF
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SimpleGrid>
              <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>
               <Checkbox colorScheme="green"> Kids({4}) </Checkbox>  
               <Checkbox colorScheme="green"> Men({1}) </Checkbox>  
               <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>   
           </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span'>
    PRICE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SimpleGrid>
              <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>
               <Checkbox colorScheme="green"> Kids({4}) </Checkbox>  
               <Checkbox colorScheme="green"> Men({1}) </Checkbox>  
               <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>   
           </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>   

       
  <AccordionItem>
    <h2 >
      <AccordionButton>
        <Box as='span'>
       WAIST SIZE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SimpleGrid>
              <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>
               <Checkbox colorScheme="green"> Kids({4}) </Checkbox>  
               <Checkbox colorScheme="green"> Men({1}) </Checkbox>  
               <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>   
           </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span'>
       BRA SIZE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <SimpleGrid>
              <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>
               <Checkbox colorScheme="green"> Kids({4}) </Checkbox>  
               <Checkbox colorScheme="green"> Men({1}) </Checkbox>  
               <Checkbox colorScheme="green"> Light({650})</Checkbox>
               <Checkbox colorScheme="green">  Average(301)</Checkbox>   
           </SimpleGrid>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
     </SimpleGrid>
   </>
)

}

export default Left
