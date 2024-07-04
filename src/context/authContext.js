import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = () => {
        //to do
        setCurrentUser({ id: 1, name: "Mayank Gupta", profilePic: "https://images.pexels.com/photos/26572466/pexels-photo-26572466/free-photo-of-a-woman-standing-in-front-of-a-boat-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
    )

}