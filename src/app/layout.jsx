"use client"
import { montserrat, lato, nunito, figtree, oiaFonts } from "./Fonts"
import AppProvider from "../../context/AppProvider"
import Header from "../../component/layout/Header/Header"
import '../../styles/style.scss'
import { usePathname } from "next/navigation"
import LoginHeader from "../../component/layout/Login/LoginHeader"
import Landscape from "../../component/layout/Landscape"

export default function RootLayout({ children }) {
    const pathName = usePathname()

    return (
        <AppProvider>
            <html lang="en">
                <body className={`${pathName == "/login" ? '' : 'dashboard'} ${nunito.variable} ${figtree.variable} ${montserrat.variable} ${lato.variable} ${oiaFonts.variable}`}>
                    {
                        pathName == "/login" ?
                            <LoginHeader />
                            :
                            <Header />
                    }
                    {children}
                    <Landscape />
                </body>
            </html>
        </AppProvider>
    )
}