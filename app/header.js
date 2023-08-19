'use client'
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
export default function Headers() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="navbar win w-100 navbar-expand-sm navbar-dark navbar-custom w-100">
            <div className="container">
                <h1 className="navbar-brand "> Follow my socials </h1>

                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                > 
                    
                </button> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-controls="#nav"
                    aria-expanded={open}
                >
                    <span className="navbar-toggler-icon"></span>{" "}
                </button>
                <Collapse in={open}>
                    <div className="collapse navbar-collapse " id="nav">
                        <ul className=" navbar-nav ms-auto  ">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://twitter.com/kaexponent2"
                                >
                                    <span className="bi bi-twitter h3 "></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://instagram.com/kaexponent_2"
                                >
                                    <span className="bi bi-instagram h3 "></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://linkedin.com/in/caleb-ajibade-774278287"
                                >
                                    <i className="bi bi-linkedin h3"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Collapse>
            </div>
        </nav>
    );
}
