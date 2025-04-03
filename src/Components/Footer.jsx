import React from "react";
import { NavLink} from "react-router-dom";
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

export const Footer = () => {

    return <>
        <footer className="page-footer dark footer-color">
            <div className="container">
                <div className="row">
                    <div className="col mb-0 text-center">
                        <img height="90" src={logoCCI} width="90" alt="Logo" />
                        <div className="row pt-3">
                            <div className="col text-right">
                                <NavLink to="/ubicacion" className="icon-maps">
                                    <svg className="icon icon-tabler icon-tabler-map-pin-filled icon-maps"
                                        fill="none"height="35px" width="35px" stroke="currentColor"
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                                        <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                                            fill="currentColor" strokeWidth="0" />
                                    </svg>
                                </NavLink>
                            </div>
                            <div className="col text-left">
                                <NavLink to="/waze" className="icon-waze">
                                    <svg className="icon icon-tabler icon-tabler-brand-waze icon-waze"
                                        fill="none"  stroke="currentColor"
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        viewBox="0 0 24 24"  height="35px" width="35px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                                        <path d="M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62" />
                                        <path d="M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54" />
                                        <path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M16 9h.01" />
                                        <path d="M11 9h.01" />
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col text-right">
                                <NavLink to="/whatsapp" className="icono-whats">
                                    <i className="fa fa-whatsapp fa-2x"  style={{}}  />
                                </NavLink>
                            </div>
                            <div className="col text-center">
                                <NavLink to="/instagram" className="icono-insta">
                                    <i className="fa fa-instagram fa-2x" />
                                </NavLink>
                            </div>
                            <div className="col text-left">
                                <NavLink to="/facebook" className="icon-face">
                                    <i className="fa fa-facebook-square fa-2x" />
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <h5>Contacto</h5>
                        <ul className="contact-list">
                            <li><NavLink to="/contacto">+506 84519890</NavLink></li>
                            <li><NavLink to="/contacto">+506 6410 0164</NavLink></li>
                            <li><NavLink to="/direccion">100 metros este de Palí y 75 norte, Grecia, Costa Rica</NavLink></li>
                            <li><NavLink to="/email">info@ccigrecia.com</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-sm-3">
                        <h5>Horarios</h5>
                        <p className="p-horarios">
                            <span>Lunes a viernes: 1:00pm - 9:00pm</span><br />
                            <span>Sábados: 8:00am - 2:00pm</span><br />
                            <span>Domingos: cerrados</span>
                        </p>
                    </div>

                    <div className="col-sm-3">
                        <h5>Enlaces</h5>
                        <ul>
                            <li><NavLink to="/">Inicio</NavLink></li>
                            <li><NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
                            <li><NavLink to="/cursos">Cursos</NavLink></li>
                            <li><NavLink to="/nuestro-equipos">Nuestro Equipo</NavLink></li>
                            <li><NavLink to="/contactanos">Contáctanos</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>© 2025 Centro Cultural de Idiomas Grecia. Todos los derechos reservados.</p>
            </div>
        </footer>
    </>



}
