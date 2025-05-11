import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const BgManager = () => {

    const location = useLocation()

    useEffect(() => {

        const path = location.pathname

        if(path === '/') {
            document.body.className = 'bg-home'
        }
        else if (path.startsWith('/Peoples')) {
            document.body.className = 'bg-people'
        } else if (path.startsWith('/Planets')) {
            document.body.className = 'bg-planets'
        } else if (path.startsWith('/Vehicles')) {
            document.body.className = 'bg-vehicles'
        } 

    },[location])

    return null
}