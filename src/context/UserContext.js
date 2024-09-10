import React, {createContext, useState} from "react";

const UserContext = createContext()

export const ContextProvider = ({children}) => {
    const [users, setUsers] = useState([])

    const value = {
        users,setUsers
    }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}


export default UserContext
