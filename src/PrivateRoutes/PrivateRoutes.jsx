import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <process className="progress w-56"></process>
    }

    if (user?.email) {
        return children
    }
    return <Navigate to="login" replace></Navigate>
};

export default PrivateRoutes;