import {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {useLocation} from "react-router";
import {Navigate} from "react-router-dom";

export const useAuth = () => {
    return useContext(AuthContext)
}

const RequireAuthComponent = ({children}: {children: JSX.Element}) => {
    const auth = useAuth()
    const location = useLocation()

    if(!auth.user) {
        return <Navigate to={'/authenticate'} state={{ from: location}} replace />
    }

    return children
}

export default RequireAuthComponent