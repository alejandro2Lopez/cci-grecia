import React from "react";
import { Link} from "react-router-dom";
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
import img_team_1 from "../assets/img/avatars/avatar2.jpg?h=4178f5c706118a93c77520b6d0b30713";
import img_team_2 from "../assets/img/avatars/avatar1.jpg?h=4178f5c706118a93c77520b6d0b30713";
import img_team_3 from "../assets/img/avatars/avatar3.jpg?h=4c77b34bb68eaede08fdd5dfec8752b0";
const OurTeam = () => {

    return (<>
      <main className="page margin-t" >
            <section className="clean-block">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Nuestro equipo</h2>
                        <p>
                            Aquí puedes ver el equipo de trabajo que se encarga de la
                            administración del Centro Cultural de Idiomas en Grecia.
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="card text-center clean-card">
                                <img
                                        alt=""
                                    className="card-img-top w-100 d-block card-img"
                                    src={img_team_1}
                                />
                                <div className="card-body info">
                                    <h4 className="card-title">John Smith</h4>
                                    <p className="card-text">Director 2</p>
                                    <div className="icons">
                                        <Link to="/">
                                            <i className="icon-social-facebook" />
                                        </Link>
                                        <Link to="/">
                                            <i className="icon-social-instagram" />
                                        </Link>
                                        <Link to="/">
                                            <i className="icon-social-twitter" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card text-center clean-card">
                                <img
                                        alt=""
                                    className="card-img-top w-100 d-block card-img"
                                    src={img_team_2}
                                />
                                <div className="card-body info">
                                    <h4 className="card-title">Robert Downturn</h4>
                                    <p className="card-text">Director</p>
                                    <div className="icons">
                                    <Link to="/">
                                            <i className="icon-social-facebook" />
                                        </Link>
                                        <Link to="/">
                                            <i className="icon-social-instagram" />
                                        </Link>
                                        <Link to="/">
                                            <i className="icon-social-twitter" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card text-center clean-card">
                                <img
                                        alt=""
                                    className="card-img-top w-100 d-block card-img"
                                    src={img_team_3}
                                />
                                <div className="card-body info">
                                    <h4 className="card-title">Ally Sanders</h4>
                                    <p className="card-text">Directora 2</p>
                                    <div className="icons">
                                    <Link to="/">
                                            <i className="icon-social-facebook" />
                                        </Link>
                                        <Link to="/">
                                            <i className="icon-social-instagram" />
                                        </Link>
                                        <Link to="/">
                                            <i className="icon-social-twitter" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>;

    </>)

}

export default OurTeam;