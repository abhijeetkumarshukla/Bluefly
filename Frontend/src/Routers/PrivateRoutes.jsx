import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { isLogin } = useSelector((state) => state.loginState);

  return isLogin ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;
