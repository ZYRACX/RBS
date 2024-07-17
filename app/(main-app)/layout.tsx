"use client"
import { AppBar } from "@mui/material"
import React , { type ReactNode}from "react"
// import "@/css/main-app/backend.css"
// import "@/css/main-app/intro.css"
// import "@/css/main-app/backend-plugin.min.css"
// import "@/css/main-app/bootstrap/bootstrap.css"
import "@/css/main-app/bootstrap/bootstrap.css"
import Link from "next/link"

interface props {
    children: ReactNode,
}

export default function AppLayout({children}: props){

    return(<>
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link href={"/app"}>
                        <button  className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/app/inventory"}>
                        <button data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Inventory</span> </button>    
                            </Link>
                    </li>
                    <li>
                    <Link href={"/app/jobs"}>
                        <button data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Jobs</span> </button>    
                            </Link>
                    </li>
                    <li>
                    </li>
                    <li>
                        <Link href={"/app/market"}>
                        <button data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Market</span> </button>    
                            </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">User</span>
                    </a>
                    {/* <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul> */}
                </div>
            </div>
        </div>
        <div className="col py-3">
            {children}
        </div>
    </div>
</div>
    </>)

}