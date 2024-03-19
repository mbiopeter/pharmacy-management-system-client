/* import axios from "axios"; */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const data = [{
        id: 1,
        name: 'mbio peter',
        username: 'peter',

    }]
    const [currentUser, SetCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (inputs) => {
        /* const res = await axios.post("http://localhost:8800/api/auth/login", inputs, { withCredentials: true }); */
        /* SetCurrentUser(res.data); */
        SetCurrentUser(data);
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
} 