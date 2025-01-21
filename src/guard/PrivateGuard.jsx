import { Navigate, Outlet } from "react-router-dom"

export const PrivateGuard = () => {

    const token = localStorage.getItem("token")
    // const authenticated = false

    return token ? <Outlet/> : <Navigate to="/login" replace />

}
    a no
    si