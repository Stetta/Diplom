import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
    const [token, setToken] = useState('')
    const [IdClient, setId] = useState('')
    const [role, setRole] = useState('')

    const login = useCallback((jwt, IdClient, IdRole) => {
        localStorage.setItem('clientData', JSON.stringify({
            token: jwt,
            IdClient: IdClient,
            IdRole: IdRole
        }))
        setToken(jwt)
        setId(IdClient)
        setRole(IdRole)
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem('clientData')
        setToken('')
        setId('')
        setRole('')
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('clientData'))
        
        if (data && data.token) {
            login(data.token, data.IdClient, data.IdRole)
        }
    }, [login])

    return { login, logout, token, role }
}