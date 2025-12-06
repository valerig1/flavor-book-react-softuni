import { createContext, useState } from "react";
import useRequest from "../hooks/useRequest";

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        password: '',
        _createdOn: 0,
        _id: '',
        accessToken: ''
    },
    registerHandler() { },
    loginHandler() { },
    logoutHandler() { },
});

export function UserProvider({
    children,
}) {
    const [user, setUser] = useState(() => {
        const storageData = localStorage.getItem('auth');

        if (!storageData) {
            return null;
        }

        const data = JSON.parse(storageData);
        return data;
    });

    const { request } = useRequest();
    
    const registerHandler = async (email, password) => {
        const newUser = { email, password };

        const result = await request('/users/register', 'POST', newUser);

        localStorage.setItem('auth', JSON.stringify(result));
        setUser(result);
    }

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', { email, password });
        
        localStorage.setItem('auth', JSON.stringify(result));
        setUser(result);
    }

     const logoutHandler = () => { 
        return request('/users/logout', 'GET', null, user.accessToken)
            .finally(() => {
                localStorage.clear();
                setUser(null)
            });
     };

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler,
        logoutHandler,
    }

    return (
        <UserContext.Provider value={userContextValues}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;