import React from "react";

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
import "../assets/bootstrap/css/bootstrap.min.css?h=9f3738c3b02e0983f8d5f3b19c8cdd33";


const ContactUs = () => {
    return (<><main key="0"className="page margin-t" >
        <section className="clean-block clean-form dark">
            <div
                className="container"
                style={{
                    textAlign: "center",
                }}>
                <div className="block-heading mb-0" style={{ paddingBottom: "15px" }}>
                    <h2 className="text-info">¿Tienes dudas? 🌍📚</h2>
                    <p>
                    Escríbenos y con gusto responderemos tus consultas sobre cursos, horarios y actividades. ¡Te esperamos! 😊✉️
                    </p>
                </div>
                <section className="position-relative py-5" >
                    <div className="d-md-none">
                        <iframe
                            title="Mapa de ubicación"
                            allowFullScreen
                            height="100%"
                            width="100%"
                            loading="lazy"

                            src="https://maps.google.com/maps?q=10.073357929158494%2C%20-84.30949994635995&t=m&z=14&output=embed&iwloc=near"
                            style={{
                                border: "0",
                                borderRadius: "30px",
                            }}

                        />
                    </div>

                    <div className="d-none d-md-block position-absolute top-0 start-0 w-100 h-100">
                        <iframe
                            title="Mapa de ubicación"
                            allowFullScreen
                            height="100%"
                            width="100%"
                            loading="lazy"

                            src="https://maps.google.com/maps?q=10.073357929158494%2C%20-84.30949994635995&t=m&z=14&output=embed&iwloc=near"
                            style={{
                                border: "0",
                                borderRadius: "30px",
                            }}

                        />
                    </div>

                    <div className="position-relative mx-2 my-5 m-md-5">
                        <div className="container position-relative">
                            <div className="row text-start">
                                <div className="col-md-6 col-xl-5 col-xxl-4 offset-md-6 offset-xl-7 offset-xxl-8">
                                    <div>
                                        <form
                                            className="border rounded shadow p-3 p-md-4 p-lg-5"
                                            method="post"
                                            style={{
                                                background: "var(--bs-body-bg)",
                                                borderRadius: "30px !important"
                                            }}>
                                            <h3 className="text-center mb-3">Contáctanos</h3>
                                            <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="Nombre"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Correo"
                                                    type="email"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    placeholder="Consulta ..."
                                                    rows="6"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-primary" type="submit">
                                                    Enviar{" "}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>;</>)
}

export default ContactUs;