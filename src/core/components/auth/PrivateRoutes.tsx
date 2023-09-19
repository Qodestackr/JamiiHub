import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = { accessToken: "" }; // replace

  return auth?.accessToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
