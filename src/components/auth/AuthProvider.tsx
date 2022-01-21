import {createContext, ReactNode, useState} from "react";

interface AuthContextType {
    user: boolean|null;
    isAdmin: boolean;
    signin: (user: boolean, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100)
    }
}

export const AuthContext = createContext<AuthContextType>(null!)

const AuthProvider = ({children}: {children: ReactNode}) => {
    const [sUser, setUser] = useState<boolean|null>(null)
    const [sAdmin] = useState(false)

    const signin = (user: boolean, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(true)
            callback()
        })
    }

    const signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null)
            callback()
        })
    }

    let value = { user: sUser, isAdmin: sAdmin, signin, signout }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider