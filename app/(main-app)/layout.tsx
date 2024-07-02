import { AppBar } from "@mui/material"
import React , { type ReactNode}from "react"

interface props {
    children: ReactNode
}

export default function AppLayout({children}: props){
    return(
        <>
        <AppBar component="nav">
        </AppBar>
        {children}
        </>
    )
}