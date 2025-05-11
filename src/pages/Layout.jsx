import { Outlet } from "react-router-dom/dist"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import { BgManager } from "../components/BgManager"



export const Layout = () => {
    return (
        <>
            <BgManager />
            <Navbar />
            <Outlet />
        </>
    )
}