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
import img_english from "../assets/img/ga03d3501832577304df4bc58d0ff0f91ab75da1c2f6eaa869aac26ee6be5171a53357752456704452dffc3845464f8c85a42ba8511d27d27dbe672d8a391f106_640.png?h=0e751fc7ec6f655c92f5b212b7993afb"
import img_french from "../assets/img/gaba523c96ad8f7be0d7f0c13f3413214121f5651f56a033bd1c5366fc808175464482d43fa854658452479f10896292aba6225136429e3f47497123599f460a9_640.png?h=76563faaa3713ea979d6d91b773912c9"
import img_portu from "../assets/img/g03c9b941034e630d1fd9077c6ee36f9befe5be0d7c372d6c6e86ca0e3425b3fbf1ac6308824356944f453079b6933f24_640.png?h=46efbec53f80e772c1156236b8820d92"

import img_english_1 from "../assets/img/g8ff27139b5507bbc3bf884794c0d3c99345add0aad3fbc9c6fee966f2b77439a13b393dc4320bd1bcc4e70d47cc3f7847768c6d76b6d494a16fb2187044ce2a7_640.png?h=66af4de58a35f2a20152bf553e3443b3"

const Curses = () => {

    return (<><main className="page margin-t" >
        <section className="clean-block clean-pricing dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">
                        Cursos
                    </h2>
                    <p>
                        Prepárate para el éxito con los certificados que avalan tu competencia
                        lingüística a nivel internacional.
                    </p>
                </div>
                <div>
                    <ul
                        className="nav nav-pills d-flex justify-content-center"
                        role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link nav-link-curses active"
                                data-bs-toggle="pill"
                                href="#tab-3"
                                role="tab"
                                style={{
                                    background: "rgba(13,110,253,0)",
                                    color: "rgb(27,82,1)",
                                }}>
                                <strong>



                                    Portugués

                                </strong>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link nav-link-curses "
                                data-bs-toggle="pill"
                                href="#tab-1"
                                role="tab"
                                style={{
                                    background: "rgba(13,110,253,0)",
                                    borderColor: "rgba(13,110,253,0)",
                                    color: "#0d6efd",
                                }}>
                                <strong>Inglés</strong>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link nav-link-curses"
                                data-bs-toggle="pill"
                                href="#tab-2"
                                role="tab"
                                style={{
                                    background: "rgba(13,110,253,0)",
                                    color: "rgb(253,13,13)",
                                }}>
                                <strong>Francés</strong>
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content pt-5">
                        <div className="tab-pane" id="tab-1" role="tabpanel">
                            <div
                                className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3"
                                style={{
                                    alignContent: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    placeItems: "center",
                                }}>
                                <div className="col-xl-2" />
                                <div
                                    className="col-md-5 col-lg-4"
                                    style={{
                                        justifyContent: "center",
                                        placeItems: "center",
                                        textAlign: "center",
                                    }}>
                                    <div
                                        className="clean-pricing-item mt-0 pt-4 clean-pricing-item-USA"
                                        style={{
                                            display: "inline-block",
                                        }}>
                                        <div className="heading">
                                            <h5>
                                                <img
                                                    alt="flag, map, request complete"
                                                    height="70px"
                                                    src={img_english}
                                                    width="100px"
                                                />
                                                <br />
                                                <br />
                                                PROGRAMA REGULAR
                                            </h5>
                                        </div>
                                        <p />
                                        <div className="features">
                                            <h4>
                                                <span className="feature">
                                                    <strong>Frecuencia:</strong>
                                                </span>
                                                <span>  1 vez por semana.</span>
                                            </h4>
                                            <h4>
                                                <span className="feature">
                                                    <strong>Tiempo:</strong>
                                                </span>
                                                <span> 3 horas por clase.</span>
                                            </h4>
                                            <h4>
                                                <span className="feature">
                                                    <strong>Duración:</strong>
                                                </span>
                                                <span> 1 año y 6 meses aproximadamente.</span>
                                                <br />
                                                <br />
                                            </h4>
                                        </div>
                                        <div className="price" />
                                        <button
                                            className="btn d-block w-100 btn-usa"
                                            style={{
                                                marginTop: "10px",
                                            }}
                                            type="button">
                                            MÁS INFORMACIÓN
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="col-md-5 col-lg-4"
                                    style={{
                                        justifyContent: "center",
                                        placeItems: "center",
                                        textAlign: "center",
                                    }}>
                                    <div
                                        className="clean-pricing-item"
                                        style={{
                                            display: "inline-block",
                                        }}>
                                        <div className="heading">
                                            <h5>
                                                <img
                                                    alt="america, butterfly, flag"
                                                    height="70px"
                                                    src={img_english_1}
                                                    style={{
                                                        borderRadius: "10px",
                                                    }}
                                                    width="100px"
                                                />
                                                <br />
                                                <br />
                                                PROGRAMA INTENSIVO
                                            </h5>
                                        </div>
                                        <p />
                                        <div className="features">
                                            <h4>
                                                <span className="feature">
                                                    <strong>Frecuencia: </strong>
                                                </span>
                                                <span>2 veces por semana.</span>
                                            </h4>
                                            <h4>
                                                <span className="feature">
                                                    <strong>Tiempo: </strong>
                                                </span>
                                                <span>2 horas por clase.</span>
                                            </h4>
                                            <h4>
                                                <span className="feature">
                                                    <strong>Duración: </strong>
                                                </span>
                                                <span>1 año y 2 meses aproximadamente.</span>
                                            </h4>
                                        </div>
                                        <div className="price" />
                                        <button className="btn d-block w-100 btn-usa" type="button">
                                            MÁS INFORMACIÓN
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xl-2" />
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-2" role="tabpanel">
                            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                                <div className="col" />
                                <div
                                    className="col-md-5 col-lg-4"
                                    style={{
                                        justifyContent: "center",
                                        placeItems: "center",
                                        textAlign: "center",
                                    }}>
                                    <div
                                        className="clean-pricing-item clean-pricing-item-Fran"
                                        style={{
                                            display: "inline-block",
                                        }}>
                                        <div className="heading">
                                            <h5>
                                                <img
                                                    alt="france map, french flag, png"
                                                    height="90px"
                                                    src={img_french}
                                                    width="100px"
                                                />
                                                <br />
                                                <br />
                                                PROGRAMA SEMI-INTENSIVO
                                            </h5>
                                        </div>
                                        <p />
                                        <div className="features">
                                            <h4>
                                                <span className="feature">
                                                    <strong>Frecuencia:</strong>
                                                </span>
                                                <span> 2 veces por semana.</span>
                                            </h4>
                                            <h4>
                                                <span className="feature">
                                                    <strong>Tiempo: </strong>
                                                </span>
                                                <span>2 horas por clase.</span>
                                            </h4>
                                            <h4>
                                                <span className="feature">
                                                    <strong>Duración: </strong>
                                                </span>
                                                <span>1 año y 8 meses aproximadamente.</span>
                                            </h4>
                                        </div>
                                        <div className="price" />
                                        <button className="btn d-block w-100 btn-fran" type="button">
                                            MÁS INFORMACIÓN
                                        </button>
                                    </div>
                                </div>
                                <div className="col" />
                            </div>
                        </div>
                        <div className="tab-pane active" id="tab-3" role="tabpanel">
                            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                                <div className="col" />
                                <div
                                    className="col-md-5 col-lg-4"
                                    style={{
                                        justifyContent: "center",
                                        placeItems: "center",
                                        textAlign: "center",
                                    }}>
                                    <div
                                        className="clean-pricing-item clean-pricing-item-braz"
                                        style={{
                                            display: "inline-block",
                                        }}>
                                        <div className="heading">
                                            <h5>
                                                <img
                                                    alt="brazil, map, flag, geography, brazilian, country, south america, brazil flag, brazil, brazil, brazil, brazil, brazil"
                                                    height="90px"
                                                    src={img_portu}
                                                    width="100px"
                                                />
                                                <br />
                                                <br />
                                                PROGRAMA SEMI-INTENSIVO
                                            </h5>
                                        </div>
                                        <p />
                                        <div className="features">
                                            <h4>
                                                <span className="feature">
                                                    <strong>Frecuencia:</strong>
                                                </span>
                                                <span> 2 veces por semana.</span>
                                            </h4>
                                            <h4>
                                                <span className="feature">
                                                    <strong>Tiempo: </strong>
                                                </span>
                                                <span>2 horas por clase.</span>
                                            </h4>
                                            <h4>
                                                <span className="feature">
                                                    <strong>Duración: </strong>
                                                </span>
                                                <span>1 año y 3 meses aproximadamente.</span>
                                            </h4>
                                        </div>
                                        <div className="price" />
                                        <button className="btn d-block w-100 btn-braz" type="button">
                                            MÁS INFORMACIÓN
                                        </button>
                                    </div>
                                </div>
                                <div className="col" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>;</>)
}

export default Curses;