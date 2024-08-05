// import { Box, Button, Img, SimpleGrid, Text } from "@chakra-ui/react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// const  ProductsPage = () => {
//   const [data, setData] = useState([]);
//   const params = new URLSearchParams(window.location.search);
//   const category = params.get("category");
//   const navigate = useNavigate()
//   const fetchData = async () => {
//     try {
//       const resp = await axios.get(`http://localhost:8080/product?category=${category}`);
//       console.log(resp.data)
//       setData(resp.data.data)
//     } catch (error) {
//         console.log("Error in Fetching")
//     }
//   };
//   useEffect(()=>{
// fetchData()
//   },[])

//   const handleClick = (id)=>{
//     navigate(`/products/${id}`)
//   }
//   return <Box>
//     {data?.map((elem)=>(
//       <SimpleGrid key={elem._id}>
//         <Img src={elem.images[0]}/>
//         <Text> {elem.title}</Text>
//         <Button onClick={()=>handleClick(elem._id)}>Open</Button>
//       </SimpleGrid>
//     ))}
//   </Box>;
// };
 
// export default ProductsPage



 
import {
    Box,
    Button,
    Flex,
    Image,
    Select,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BlackOneSlider from "../../components/slider/BlackOneSlider";
import Left from "./Left";
 
 
  
  const  ProductsPage = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const navigate = useNavigate();
  
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:8080/product?category=${category}`
        );
        console.log(resp.data);
        setData(resp.data.data);
        setSortedData(resp.data.data);
      } catch (error) {
        console.log("Error in Fetching");
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    useEffect(() => {
      window.scroll({
        top: 0,
        behavior: "instant",
      });
    }, []);
  
    const handleClick = (id) => {
      navigate(`/products/${id}`);
    };
  
    const handleChange = (e) => {
      const value = e.target.value;
      if (value === "ltoh") {
        const sorted = [...data].sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        setSortedData(sorted);
      } else if (value === "htol") {
        const sorted = [...data].sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        setSortedData(sorted);
      }
    };
  
    return (
      <>
          <Navbar />
          <BlackOneSlider/>
      <Flex>
        <Box w={'30%'} pt={'190px'} >
        <Left/>
          
        </Box>
        
      <Box>
        
         
         <SimpleGrid pt={10} w={'90%'} mb={5}  alignItems={'space-between'} >
         <Text fontWeight={700} fontSize={"24px"} p={[5, 5, 50, 30]}>
          Products
        </Text>
            <Select
              variant="outline"
              placeholder="Choose"
              outline={"1px solid rgba(0,0,0,0.4)"}
              borderRadius={"none"}
              cursor={"pointer"}
              onChange={handleChange}
            >
              <option value="ltoh">Price: Low To High</option>
              <option value="htol">Price: High To Low</option>
            </Select>
  
            
          </SimpleGrid>
        <SimpleGrid  >
          
  
          <SimpleGrid
              w={'100%'}
              m={'auto'}
            gridTemplateColumns={[
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
              "repeat(4,1fr)",
            ]}
            p={[5, 5, 8, 20]}
            pt={[2, 2, 2, 2]}
            gap={12}
            alignItems={"end"}
          >
            {(sortedData.length ? sortedData : data)?.map((elem) => (
              <SimpleGrid cursor={"pointer"} key={elem._id}>
                <Box>
                <Image src={elem.image[0]} alt="Image" />
                </Box>
                <Text mt={8} fontWeight={700} fontSize={'12px'}>
                  {elem.Header}
                </Text>
                <Text
                 
                  fontWeight={700} fontSize={'16px'}
                  _hover={{ textDecoration: "underline" }}
                  overflow={"hidden"} 
                  h={'40px'}
                  textDecoration="line-through"
                >
                  ${elem.CutPrice}
                </Text>
                <Text fontWeight={700} fontSize={'16px'}>${elem.price}</Text>
                <Button
                  _hover={{ color: "white" }}
                  mt={'12px'}
                  bgColor={'black'}
                  color={"white"}
                  onClick={() => handleClick(elem._id)}
                >
                  Add
                </Button>
              </SimpleGrid>
            ))}
          </SimpleGrid>
        </SimpleGrid>
        <Footer />
      </Box>



      </Flex>
      
      </>
    );
  };
  
  
  export default  ProductsPage;