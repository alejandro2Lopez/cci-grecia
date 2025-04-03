import React from "react";
import { NavLink } from "react-router-dom";
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
import img_banner_1 from "../assets/img/tech/languages.webp?h=49b59de2326d9ab96545171faee80f70"
import img_banner_2 from "../assets/img/brazil-img.jpg"
import img_banner_3 from "../assets/img/frances-img.jpg"
import img_english from "../assets/img/scenery/english.webp?h=ac8c9086f749dbeb8e004334ff680351"
import img_french from "../assets/img/scenery/french.webp?h=a63adca2568f9237287ab2ca455df93a"
import img_portu from "../assets/img/scenery/brazil.webp"
import img_examp_1 from "../assets/img/scenery/image4.jpg?h=ae7b4d25adfdfa1581297908235a949d"
import img_examp_2 from "../assets/img/scenery/image6.jpg?h=26f762ae21fd9cce95e86763ac6154ca"
import img_examp_3 from "../assets/img/avatars/avatar1.jpg?h=2bf47f2c2deaed837d2490a2db0a7175"

const Index = () => {

    return (<>
        <main key="0" className="page">
            <section
                className="clean-block clean-hero"
                id="background-section"
                style={{
                    color: "rgba(255, 255, 255, 0)",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                }}>
                <div
                    className="carousel slide"
                    data-bs-ride="carousel"
                    id="carousel-1"
                    style={{
                        borderRadius: "30px",
                        overflow: "hidden",
                        color: "rgba(2, 2, 2, 0.69)",
                    }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active carousel-img">
                            <img
                                alt="Slide "
                                className="w-100 d-block carousel-img"
                                src={img_banner_1}
                                style={{ backgroundColor: "rgb(0, 0, 0)" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.64)", // Negro semi-transparente
                                }}
                            />
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="text-start">
                                            <strong>Clases de inglés</strong>
                                            <br />
                                            <strong>Para Principiantes</strong>
                                        </h2>
                                        <p
                                            className="text-start"
                                            style={{
                                                color: "white!important",
                                                zIndex: "10",
                                            }}>
                                            <br />
                                            <svg
                                                className="me-3"
                                                fill="currentColor"
                                                height="1em"
                                                style={{
                                                    fontSize: "33px",
                                                }}
                                                viewBox="-32 0 512 512"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                                            </svg>
                                            <strong>Fecha de inicio</strong>
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 de marzo, 2025&nbsp;  -  &nbsp;24 de marzo, 2025
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Martes y Jueves&nbsp;   -   &nbsp;Martes y Jueves
                                            <br />
                                            <br />
                                            <strong></strong>
                                            <i
                                                className="fa fa-clock-o"
                                                style={{
                                                    fontSize: "34px",
                                                }}
                                            />
                                            <strong>&nbsp;&nbsp;&nbsp;Hora de clase</strong>
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6:00pm a 8:00pm
                                            <br />
                                            <strong>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Presencial, Grecia.</strong>
                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                    <div className="col align-self-center">
                                        <p className="fs-3">
                                            <strong>No te quedes </strong>
                                            <br />
                                            <strong>sin tu espacio!</strong>
                                        </p>
                                        <button className="btn btn-outline-light btn-lg" type="button">
                                            <strong>Matricula ya</strong>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                alt="Slide "
                                className="w-100 d-block"
                                src={img_banner_2}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.64)", // Negro semi-transparente
                                }}
                            />
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="text-start">
                                            <strong>Inscripción abierta para clases de portugués</strong>
                                        </h2>
                                        <p
                                            className="text-start"
                                            style={{
                                                color: "white!important",
                                                zIndex: "10",
                                            }}>
                                            <br />
                                            <svg
                                                className="me-3"
                                                fill="currentColor"
                                                height="1em"
                                                style={{
                                                    fontSize: "33px",
                                                }}
                                                viewBox="-32 0 512 512"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                                            </svg>
                                            <strong>Fecha de inicio</strong>
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25 de febrero, 2025
                                            <br />
                                            <br />
                                            <strong></strong>
                                            <i
                                                className="fa fa-clock-o"
                                                style={{
                                                    fontSize: "34px",
                                                }}
                                            />
                                            <strong> &nbsp;&nbsp;&nbsp;Hora de clase</strong>
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-outline-light btn-lg mt-2" type="button">
                                                <strong>Más información</strong>
                                            </button>
                                            <br />
                                            <br />

                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                    <div className="col align-self-center">
                                        <p className="fs-3">
                                            <strong>No te quedes </strong>
                                            <br />
                                            <strong>sin tu espacio!</strong>
                                        </p>
                                        <button className="btn btn-outline-light btn-lg" type="button">
                                            <strong>Más información</strong>
                                        </button>
                                    </div>
                                </div>
                            </div>;
                        </div>
                        <div className="carousel-item">
                            <img
                                alt="Slide "
                                className="w-100 d-block"
                                src={img_banner_3}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.64)", // Negro semi-transparente
                                }}
                            />
                            <div className="carousel-caption">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="text-start">
                                            <strong>Inscripción abierta para clases de francés</strong>
                                        </h2>
                                        <p
                                            className="text-start"
                                            style={{
                                                color: "rgb(232, 232, 232)!important",
                                                zIndex: "10",
                                            }}>
                                            <br />
                                            <svg
                                                className="me-3"
                                                fill="currentColor"
                                                height="1em"
                                                style={{
                                                    fontSize: "33px",
                                                }}
                                                viewBox="-32 0 512 512"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                                            </svg>
                                            <strong>Fecha de inicio</strong>
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25 de febrero, 2025
                                            <br />
                                            <br />
                                            <strong></strong>
                                            <i
                                                className="fa fa-clock-o"
                                                style={{
                                                    fontSize: "34px",
                                                }}
                                            />
                                            <strong> &nbsp;&nbsp;&nbsp;Hora de clase</strong>
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-outline-light btn-lg mt-2" type="button">
                                                <strong>Más información</strong>
                                            </button>
                                            <br />
                                            <br />

                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                    <div className="col align-self-center">
                                        <p className="fs-3">
                                            <strong>Aprende Francés </strong>
                                            <br />
                                            <strong>de una manera sencilla!</strong>
                                        </p>
                                        <button className="btn btn-outline-light btn-lg" type="button">
                                            <strong>Más información</strong>
                                        </button>
                                    </div>
                                </div>
                            </div>;
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="carousel-indicators">
                        <button
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel-1"
                            type="button"
                        />{" "}
                        <button
                            data-bs-slide-to="1"
                            data-bs-target="#carousel-1"
                            type="button"
                        />{" "}
                        <button
                            data-bs-slide-to="2"
                            data-bs-target="#carousel-1"
                            type="button"
                        />
                    </div>
                </div>

            </section>
            <section className="clean-block clean-info dark prueba">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Cursos</h2>
                        <p>
                            Aprende un nuevo idioma con nuestros cursos y desarrolla las
                            habilidades necesarias para comunicarte con confianza en cualquier
                            entorno.
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="row text-center ms-0 row-img-t">
                        <div className="col-xxl-12">
                            <div className="image-container">
                                <img
                                    alt=""
                                    className="img-thumbnail"
                                    src={img_english}
                                />
                                <div className="overlay">
                                    <p>Inglés</p>
                                </div>
                            </div>
                            <div className="image-container">
                                <img
                                    alt=""
                                    className="img-thumbnail"
                                    src={img_french}
                                />
                                <div className="overlay">
                                    <p>Francés</p>
                                </div>
                            </div>
                            <div className="image-container">
                                <img
                                    alt=""
                                    className="img-thumbnail"
                                    src={img_portu}
                                />
                                <div className="overlay">
                                    <p>Portugués</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col" />
                        <div className="col-auto col-xxl-7">
                            <div className="card card-b">
                                <div className="card-body">
                                    <h4 className="card-title">¿Por qué somos tu mejor opción?</h4>

                                    <p className="card-text">
                                        <br />
                                        Nuestros cursos están diseñados para enseñar un nuevo idioma de
                                        forma efectiva y eficiente, ayudando a los estudiantes a
                                        desarrollar las habilidades necesarias para comunicarse con
                                        fluidez en contextos cotidianos, académicos y profesionales.
                                    </p>
                                    <button className="btn btn-outline-primary btn-lg" type="button">
                                        Matricular
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col" />
                    </div>
                </div>
            </section>
            <section className="clean-block features">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Características </h2>
                        <p>
                            <span
                                style={{
                                    color: "rgb(32, 31, 31)",
                                }}>
                                ¡Aprende con nosotros! Ofrecemos todas las herramientas de estudio
                                que necesitas para dominar un nuevo idioma.
                            </span>
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5 feature-box">
                            <i className="icon-location-pin icon" style={{ color:"rgb(203,0,0)" }}/>
                            <h4>
                                <strong>Profesores en vivo</strong>
                            </h4>
                            <p>
                                Capacitados y apasionados por la enseñanza, comprometidos en brindar
                                una experiencia educativa de calidad en cada clase de idiomas.
                            </p>
                        </div>
                        <div className="col-md-5 feature-box">
                            <i className="la la-certificate icon" />
                            <h4>
                                <strong>Certificaciones de Oxford</strong>
                            </h4>
                            <p>
                                Reconocidas internacionalmente, que avalan tus habilidades y
                                conocimientos en inglés y potencian tu perfil profesional.
                            </p>
                        </div>
                        <div className="col-md-5 feature-box">
                            <i className="la la-search icon" />
                            <h4>
                                <strong>Seguimiento personalizado</strong>
                            </h4>
                            <p>
                                Adaptándonos a tus necesidades y objetivos para garantizar un
                                aprendizaje efectivo y satisfactorio.
                            </p>
                        </div>
                        <div className="col-md-5 feature-box">
                            <i className="icon-earphones-alt icon" style={{ color: "rgb(203,0,0)" }} />
                            <h4>Clases virtuales</h4>
                            <p>
                                Apasionados por la enseñanza, nuestros instructores están
                                capacitados y comprometidos en ofrecer una experiencia educativa de
                                calidad en cada clase virtual de idiomas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clean-block slider dark">
                <div className="container py-4 py-xl-5">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2>Comentarios</h2>
                        </div>
                    </div>
                    <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        <div className="col">
                            <div>
                                <p className="comments border rounded border-0 p-4">
                                    Profesionales dedicados que hacen que aprender un idioma en línea
                                    sea fácil y agradable.
                                </p>
                                <div className="d-flex">
                                    <img
                                        alt=""
                                        className="rounded-circle flex-shrink-0 me-3 fit-cover img-Comen-Index"
                                        height="48"
                                        src={img_examp_1}
                                        width="21"
                                    />
                                    <div>
                                        <p className="fw-bold text-primary mb-0">John Smith</p>
                                        <p className="text-muted mb-0">Erat netus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <p className="comments border rounded border-0 p-4">
                                    Su pasión por enseñar se nota en cada clase, incluso a través de
                                    la pantalla.
                                </p>
                                <div className="d-flex">
                                    <img
                                        alt=""
                                        className="rounded-circle flex-shrink-0 me-3 fit-cover img-Comen-Index"
                                        height="50"
                                        src={img_examp_2}
                                        width="50"
                                    />
                                    <div>
                                        <p className="fw-bold text-primary mb-0">John Smith</p>
                                        <p className="text-muted mb-0">Erat netus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="">
                                <div className>
                                    <p className=" rounded border-0 p-4 comments" >
                                        Siempre atentos y dispuestos a resolver dudas, creando un ambiente
                                        virtual dinámico y motivador.
                                    </p>
                                </div >
                                <div className="d-flex">
                                    <img
                                        alt=""
                                        className="rounded-circle flex-shrink-0 me-3 fit-cover img-Comen-Index"
                                        height="50"
                                        src={img_examp_3}
                                        width="50"
                                    />
                                    <div>
                                        <p className="fw-bold text-primary mb-0">John Smith</p>
                                        <p className="text-muted mb-0">Erat netus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="clean-block"
                id="ubicacion"
                style={{
                    textAlign: "center",
                }}>
                <h1
                    className="mt-3"
                    style={{
                        height: "34px",
                    }}>
                    ¿Dónde estamos?
                </h1>
                <p>
                    <br />
                    Nos encontramos en:
                    <br />
                    100 metros este de palí y 75 norte Grecia Centro, Grecia, Costa Rica
                </p>
                <div className="container">
                    <div
                        className="row"
                        style={{
                            textAlign: "center",
                        }}>
                        <div className="col-xxl-2" />
                        <div className="col-md-6 col-xxl-8">
                            <div className="map-container">
                                <iframe
                                    title="Mapa de ubicación"
                                    allowFullScreen
                                    height="600px"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://maps.google.com/maps?q=10.073357929158494%2C%20-84.30949994635995&t=m&z=14&output=embed&iwloc=near"
                                    style={{
                                        border: "0",
                                        borderRadius: "30px",
                                    }}
                                    width="100%"
                                />
                            </div>
                        </div>
                        <div className="col-xxl-2" />
                    </div>
                    <hr />
                    <div
                        className="row"
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <div className="col-md-6 col-xxl-6">
                            <p>¿Cómo llegar?</p>
                            <div className="row">
                                <div
                                    className="col"
                                    style={{
                                        textAlign: "right",
                                    }}>
                                    <p
                                        style={{
                                            textAlign: "right",
                                        }}>
                                        <NavLink onClick={() => window.open("https://maps.google.com", "_blank")}>
                                            <svg
                                                className="icon icon-tabler icon-tabler-map-pin-filled"
                                                fill="none"
                                                height="1em"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                style={{
                                                    borderColor: "rgb(37,43,197)",
                                                    color: "rgb(197,37,37)",
                                                    fontSize: "38px",
                                                }}
                                                viewBox="0 0 24 24"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                                                <path
                                                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                />
                                            </svg>
                                        </NavLink>
                                    </p>
                                </div>
                                <div className="col">
                                    <div>
                                        <p
                                            style={{
                                                textAlign: "left",
                                            }}>
                                            <NavLink onClick={() => window.open("https://maps.google.com", "_blank")}>
                                                <svg
                                                    className="icon icon-tabler icon-tabler-brand-waze"
                                                    fill="none"
                                                    height="1em"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    style={{
                                                        color: "rgb(77,105,139)",
                                                        fontSize: "38px",
                                                    }}
                                                    viewBox="0 0 24 24"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                                                    <path d="M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62" />
                                                    <path d="M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54" />
                                                    <path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                    <path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                    <path d="M16 9h.01" />
                                                    <path d="M11 9h.01" />
                                                </svg>
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div />
                        </div>
                        <div className="col-xxl-4">
                            <p>Síguenos en nuestras redes sociales</p>
                            <div className="row">
                                <div className="col">
                                    <p
                                        style={{
                                            textAlign: "right",
                                        }}>
                                        <NavLink onClick={() => window.open("https://maps.google.com", "_blank")}>
                                            <i
                                                className="fa fa-instagram"
                                                style={{
                                                    color: "rgb(197,37,181)",
                                                    fontSize: "38px",
                                                }}
                                            />
                                        </NavLink>
                                    </p>
                                </div>
                                <div className="col">
                                    <p
                                        style={{
                                            textAlign: "left",
                                        }}>
                                        <NavLink onClick={() => window.open("https://maps.google.com", "_blank")}>
                                            <i
                                                className="fa fa-facebook-square"
                                                style={{
                                                    borderColor: "rgb(37,43,197)",
                                                    color: "rgb(37,63,197)",
                                                    fontSize: "38px",
                                                }}
                                            />
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>;
    </>
    );
};

export default Index;