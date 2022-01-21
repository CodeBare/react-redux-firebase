import {useAuth} from "./RequireAuth.component";
import {Navigate} from "react-router-dom";

const RequireAdminComponent = ({children}: {children: JSX.Element}) => {
    const auth = useAuth()

    if(!auth.isAdmin) {
        return <Navigate to={'/'} replace />
    }

    return children
}

export default RequireAdminComponent