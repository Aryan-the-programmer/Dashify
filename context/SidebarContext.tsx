"use client"

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({isOpen: false, setIsOpen: () => {}, toggleSidebar: () => {}});

export function SidebarProvider ({children} : {children: React.ReactNode}){
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => setIsOpen(!isOpen)  
    return (
        <SidebarContext.Provider value={{isOpen, setIsOpen, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}
export const useSidebar = () => useContext(SidebarContext);