import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/css/medidas-para-pantallas-pequeñas.css";
import "../assets/css/Nav-Movil.css";
import "../assets/css/baguetteBox.min.css";
import "../assets/css/efecto-lluvia-de-corazones.css";
import "../assets/css/efecto-lluvia-halloween.css";
import "../assets/css/Features-Cards-icons.css";
import "../assets/css/medidas-para-pantallas-pequeñas.css";
import "../assets/css/Montserrat.css";
import "../assets/css/Nav-Movil.css";
import "../assets/css/Pricing-Yearly--Monthly-badges.css";
import "../assets/css/secction-ubicacion.css";
import "../assets/css/Testimonials-images.css";
import "../assets/css/vanilla-zoom.min.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import logoCCI from "../assets/img/tech/logoCCI.png?h=7c29afcb95ef3ccb5ca928fce782e8ab";
import logoCCI2 from "../assets/img/tech/logoCCI.png?h=7c29afcb95ef3ccb5ca928fce782e8ab";
export  const Navbar = () => {

    return <>
        <nav className="navbar navbar-expand-md bg-body nav-small-dev">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand pe-0 me-0"
                        to="/"
                        style={{ textAlign: "center", width: "100%" }}>
                        <img
                            className="logo-img-movil"
                            src={logoCCI}
                            alt="Logo"
                        />
                    </Link>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar mb-0 pb-4 mb-xxl-0 pb-xxl-0 pt-xxl-0">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col">
                            <button className="navbar-toggler" data-bs-target="#navcol-1" data-bs-toggle="collapse">
                                <span className="navbar-toggler-icon span-1">
                                    <i className="fa fa-navicon" style={{ color: "white", fontSize: "39px" }} />
                                </span>
                                <span className="visually-hidden">Toggle navigation</span>
                            </button>
                        </div>
                        <div className="col" style={{ textAlign: "right" }}>
                            <img
                                className="img-logo-movil pb-0 mb-0 mt-0 pt-0"
                                src={logoCCI2}
                                style={{ textAlign: "right", width: "35%" }}
                                alt="Logo"
                            />
                        </div>
                    </div>
                    <div className="collapse navbar-collapse ps-0 ms-0" id="navcol-1">
                        <img className="img-logo" src={logoCCI2} alt="Logo" />
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link a-Navbar" to="/">
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link a-Navbar" to="/sobre-nosotros">
                                    Sobre Nosotros
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link a-Navbar" to="/cursos">
                                    Cursos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link a-Navbar" to="/nuestro-equipo">
                                    Nuestro Equipo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link a-Navbar" to="/contactanos">
                                    Contáctanos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className="nav nav-tabs bottom-nav">
                <li className="nav-item">
                    <NavLink className="nav-link nav-item" to="/">
                        <i className="icon ion-ios-home" style={{ fontSize: "32px",marginBottom: "-7px" }} />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-item" to="/cursos">
                        <i className="icon ion-ios-book" style={{ fontSize: "32px" , marginBottom: "-10px", marginTop: "-5px" , paddingTop: "1px"}} />
                        <p>Cursos</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-item" to="/sobre-nosotros">
                        <i className="icon ion-ios-people" style={{ fontSize: "42px", marginBottom: "-15px", marginTop: "-19px", paddingTop:"5px" }} />
                        <p>Nosotros</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link nav-item" to="/contactanos">
                        <i className="icon ion-ios-email" style={{ fontSize: "32px" , marginBottom: "-10px", marginTop: "-5px" , paddingTop: "0px"}} />
                        <p>Contactar</p>
                    </NavLink>
                </li>
            </ul>
        </>

  

}
