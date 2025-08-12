import Cookies from "js-cookie";

import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
const jwt = Cookies.get("jwt-token");
console.log(jwt);
return jwt ? <Outlet/> : <Navigate to="/login"/>
};
export default Protected;
