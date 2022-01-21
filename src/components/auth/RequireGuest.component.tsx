import {useAuth} from "./RequireAuth.component";
import {Navigate} from "react-router-dom";

const RequireGuestComponent = ({children}: {children: JSX.Element}) => {
    const auth = useAuth()

    if(auth.user) {
        return <Navigate to={'/'} replace />
    }

    return children
}

export default RequireGuestComponent