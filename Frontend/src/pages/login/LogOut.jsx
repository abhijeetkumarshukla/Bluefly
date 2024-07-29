import { Box, Button } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../Redux/Login/acrionTypes";

 

const LogOut = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch({ type: LOGOUT });
    };
  return (
    <Box>
        logout page

        <Button onClick={handleLogout}>Logout</Button>
    </Box>
  )
}

export default LogOut
