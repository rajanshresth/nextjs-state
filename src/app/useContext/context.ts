import { createContext, useContext } from "react";

interface User {
    name:string,
    isSuscribed:boolean
}

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext(){
    const user = useContext(DashboardContext);
    if(user===undefined){
        throw new Error('useUserContext must be used with a DashboardContext');
    }
    return user;
}