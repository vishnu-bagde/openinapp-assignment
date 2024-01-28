import LoginProvider from "../Login"
import MyAppProvider from "../MyAppProvider"

const AppProvider = ({ children }) => {
    
    return (
        <MyAppProvider>
            <LoginProvider>
                {children}
            </LoginProvider>
        </MyAppProvider>
    )
}

export default AppProvider