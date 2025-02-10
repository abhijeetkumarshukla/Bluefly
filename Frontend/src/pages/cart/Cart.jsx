import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  Spinner,
} from "@chakra-ui/react";

 
 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import axios from "axios";
import BlackOneSlider from "../../components/slider/BlackOneSlider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getCartItems } from "../../Redux/Cart/action";
import GetSinglePro from "../../components/GetSinglePro";

const CartPage = () => {
  const BASEURL= import.meta.env.VITE_BASEURL
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartData);
  const { loading } = useSelector((state) => state.loading);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(getCartItems);
  }, [dispatch]);

  const subtotal = allProducts.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price;
  }, 0);

  const estimatedTax = subtotal * 0.08;
  const estimatedTotal = subtotal + estimatedTax;

  const handleCheckout = async () => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    try {
      await Promise.all(
        data?.map(async (el) => {
          await axios.delete(
            `${BASEURL}cart/remove/${el.productId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
        })
      );

      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Navbar />
      <BlackOneSlider/>
    <Box>
      <Box p={[5, 5, 10, 20]} pt={[5, 5, 5, 5]}>
        <Heading fontSize="24px" fontWeight={700}>
          Shipping and Delivery Basket ({data.length})
        </Heading>

        <SimpleGrid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "2fr 1fr",
            "2fr 1fr",
          ]}
          alignItems={"start"}
        >
          <SimpleGrid gap={2}>
            {loading ? (
              <Flex justifyContent="center" alignItems="center" minH="50vh">
                <Img
                  src="data:image/svg+xml;base64,PHN2ZyBmb2N1c2FibGU9ImZhbHNlIiB3aWR0aD0iMjMiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4wMTggOC42MzljLjEwNS0uNTk1LjY1LS45OTEgMS4yMjMtLjg3N2E1My45NCA1My45NCAwIDAwMjAuNTE3IDBjLjYyNS0uMTI1IDEuMjI4LjM2NiAxLjI0MiAxLjA2LjAxLjU0NC0uNDAyIDEuMDAzLS45MTUgMS4xMDItMi4yODkuNDQtNC41ODkuNzI3LTYuODkzLjg3Ny0uOTQ4LjA2My0xLjY0Ny45NDgtMS41NCAxLjkzMmwuMjAyIDEuODRjLjMxNCAyLjg3Ljk1OCA1LjY5IDEuOTE5IDguMzk5bDEuMjYgMy41NTNjLjIwMi41NjgtLjA3NiAxLjE5Ny0uNjIgMS40MDdhLjk5NC45OTQgMCAwMS0uMzY0LjA2OGMtLjQgMC0uNzY4LS4yNDUtLjk0NC0uNjM4bC0uMDA3LjAwNy0uMzI1LS43MjRhMTEwLjUzIDExMC41MyAwIDAxLTIuODMtNi45MjYuNDYyLjQ2MiAwIDAwLS44NzggMCAxMDUuMTQ2IDEwNS4xNDYgMCAwMS0yLjgzMiA2LjkxN2wtLjMwOC42OC4wMDUtLjAyMWExLjA1IDEuMDUgMCAwMS0uOTguNzA1Ljk5NC45OTQgMCAwMS0uMzY0LS4wNjhjLS41NDQtLjIxLS44MjEtLjgzOS0uNjItMS40MDdsMS4yNi0zLjU1M2EzNy4yMzUgMzcuMjM1IDAgMDAxLjkyLTguNDAzbC4yLTEuODI0Yy4xMDctLjk4Ni0uNTktMS44ODEtMS41NC0xLjk0M0E1NS45NCA1NS45NCAwIDAxLjg2IDkuOTE0Yy0uNTctLjExLS45NDctLjY4LS44NDEtMS4yNzV6TTExLjUgMGMxLjkzNCAwIDMuNTAyIDEuNjM0IDMuNTAyIDMuNjUxIDAgMi4wMTYtMS41NjggMy42NS0zLjUwMiAzLjY1LTEuOTM0IDAtMy41MDItMS42MzQtMy41MDItMy42NUM3Ljk5OCAxLjYzNCA5LjU2NiAwIDExLjUgMHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg=="
                  alt={<Spinner />}
                />
              </Flex>
            )
             : data && data.length > 0 ? (
              data.map((elem, i) => (
                <GetSinglePro
                  singleData={elem}
                  key={i}
                  setAllProducts={setAllProducts}
                  allProducts={allProducts}
                />
              ))
            ) 
            : (
              <Box mt={5}>
                <Divider mb={10} bg={"grey"} h={0.8} />

                <Text fontSize={"18px"} fontWeight={400} mb={3}>
                  Your shopping cart is empty. Please add at least one item to
                  your cart before checking out.
                </Text>
                <Link to={"/"}>
                  <Button
                    mb={4}
                    _hover={{ color: "white" }}
                    bg={"black"}
                    color={"white"}
                  >
                    Continue Shopping
                  </Button>
                </Link>
                <Divider mb={10} bg={"grey"} h={0.8} />
              </Box>
            )}
          </SimpleGrid>

          <SimpleGrid gap={8} p={5}>
            <Box p={4} border={"1px solid rgba(0,0,0,0.3)"}>
              <Flex gap={"10px"} alignItems={"start"} mb={"12px"}>
                <Box w={"30px"}>
                  <Img
                    src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                    w={"100%"}
                  />
                </Box>
                <Text fontSize={"16px"}>
                  The Bluefly Credit Card Program
                  <Text fontWeight={400} fontSize={"11px"}>
                    Save 25% on this order when you open and use either Bluefly
                    Credit Card today
                  </Text>
                </Text>
              </Flex>
              <Button
                color={"black"}
                bgColor={"white"}
                border={"1px solid black"}
                w={"100%"}
                fontWeight={400}
              >
                See Details
              </Button>
            </Box>

            <Box p={4} fontWeight={400} border={"1px solid rgba(0,0,0,0.3)"}>
              <Flex mb={4} justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text>${subtotal}</Text>
              </Flex>
              <Flex mb={3} fontSize={"14px"} justifyContent={"space-between"}>
                <Text>Estimated Tax</Text>
                <Text>${estimatedTax}</Text>
              </Flex>
              <Divider mb={3} bg={"grey"} />
              <Flex
                mb={4}
                justifyContent={"space-between"}
                fontSize={"16px"}
                fontWeight={700}
              >
                <Text>Estimated Total</Text>
                <Text>${estimatedTotal}</Text>
              </Flex>
              <Text mb={2} fontSize={"14px"} color={"rgb(112,112,112)"}>
                Applicable taxes will be calculated at checkout.
              </Text>
              <Button
                color={"white"}
                _hover={{ color: "white" }}
                w={"100%"}
                fontWeight={400}
                bg={"black"}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </Box>
      <Footer/>
      </>
  );
};

export default CartPage;