import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
    const [token, setToken] = useState('')
    // const [role, setRole] = useState('')

    const login = useCallback((jwt) => {
        localStorage.setItem('clientData', JSON.stringify({
            token: jwt
        }))
        setToken(jwt)
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem('clientData')
        setToken('')
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('clientData'))

        if (data && data.token) {
            login(data.token)
        }
    }, [login])

    return { login, logout, token }
}