"use client"
import { createContext, useEffect, useMemo, useState } from "react"
import { getDataFromLocalStorage, isEmpty } from "../../service/commonServices"
import { usePathname, useRouter } from "next/navigation"

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
        const loginState = getDataFromLocalStorage("isLoggedIn")
        setIsLoggedIn(loginState)
        
    }, [])

    useEffect(() => {
        if(!isLoggedIn) {
            router.push("/login")
        } else {
            router.push("/")
        }

    }, [pathName, isLoggedIn])
    
    const loginHandler = (state) => {
        setIsLoggedIn(state)
        localStorage.setItem("isLoggedIn", state)

        if(state) {
            router.push("/")
        }
    }

    return (
        <LoginContext.Provider value={useMemo(() => ({isLoggedIn, loginHandler}), [isLoggedIn, loginHandler])}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider