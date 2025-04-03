import React from "react";
import { Link } from "react-router-dom";
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
import img_header_1 from "../assets/img/teaching-1.webp?h=dc1ec64fe0e15630cb10565e38a5b1a2";
import img_spanish from "../assets/img/Spain.png?h=5be3ebc8a2ef4611e0197387c756350a";
import img_french from "../assets/img/flagFrench.png?h=eb531d5a29af8667e11b7dca0fb68b9b";
import img_english from "../assets/img/flagUsa.png?h=e23543792ec426c017e92a5f6f88704b";
import img_portu from "../assets/img/avatars/flagPortugues.png?h=6967c051d6f1b9f84b6ba7b3cc2f1c52";
import img_mision from "../assets/img/CCI-Grecia.jpg?h=a7dd00cfa68394b9c59819838c4fa240";
const AboutUs = () => {
  return (<main className="page margin-t" >
    <section>
      <section className="py-4 py-xl-5">
        <div
          className="container container-2"
          style={{
            borderRadius: "30px",
            overflow: "hidden",
            padding: "0",
          }}>
          <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6 div-AboutUs">
                <div className="text-white p-4 p-md-5">
                  <h2 className="fw-bold text-white mb-3">Sobre Nosotros</h2>
                  <p className="mb-4">
                    El centro Cultural de Idiomas Grecia nace como uno de los
                    primeros Centros de Idiomas en el cantón de Grecia en el año
                    2013.
                    <br />
                    <br />
                    Nuestro compromiso está en el éxito personal y profesional de
                    cada estudiante que decide integrarse a nuestra academia.
                    <br />
                    <br />
                    En la actualidad se está en constante innovación brindado
                    excelencia en la enseñanza de los diferentes idiomas,
                    manteniendo el compromiso y calidad que nos caracterizan como
                    institución.
                  </p>
                  <div className="my-3">
                    <Link className="btn btn-light btn-lg" href="#" role="button">
                      Cursos
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 order-first order-md-last"
                style={{
                  minHeight: "250px",
                }}>
                <img
                  alt=""
                  className="w-100 h-100 fit-cover"
                  src={img_header_1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section className="clean-block features section-2-AboutUs">
      <div className="container container-1">
        <div className="block-heading">
          <h2 className="text-info">Features</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
            urna, dignissim nec auctor in, mattis vitae leo.
          </p>
        </div>
        <div className="row justify-content-center ms-0 me-0">
          <div className="col-md-5 feature-box">
            <i className="icon-star icon" />
            <h4>Bootstrap 5</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-pencil icon" />
            <h4>Customizable</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-screen-smartphone icon" />
            <h4>Responsive</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="col-md-5 feature-box">
            <i className="icon-refresh icon" />
            <h4>All Browser Compatibility</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>
              <br />
              <strong>
                <span
                  style={{
                    color: "var( --e-global-color-primary )",
                  }}>
                  ¿Qué hacemos?
                </span>
              </strong>
            </h2>
            <p className="w-lg-50">
              <br />
              <span
                style={{
                  color: "rgb(32, 31, 31)",
                }}>
                Nos dedicamos a la enseñanza especializada de diversos idiomas,
                incluyendo:
              </span>
            </p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col-xxl-2" />
          <div className="col">
            <div className="card card-b">
              <div className="card-body">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                  <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                    <img
                      alt=""
                      className="img-AboutUS"
                      src={img_english}
                    />
                  </div>
                  <div className="px-3">
                    <h4>Inglés</h4>
                    <p>
                      <span
                        style={{
                          color: "rgb(73, 75, 81)",
                        }}>
                        Contamos con profesores excepcionales, nativos del idioma
                      </span>
                    </p>
                    <Link className="a-AboutUS" href="#">
                      Matricular Curso
                      <svg
                        className="bi bi-arrow-right"
                        fill="currentColor"
                        height="1em"
                        viewBox="0 0 16 16"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-b">
              <div className="card-body">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                  <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                    <img
                      alt=""
                      className="img-AboutUS"
                      src={img_french}
                    />
                  </div>
                  <div className="px-3">
                    <h4>Francés</h4>
                    <p>
                      <span
                        style={{
                          color: "rgb(73, 75, 81)",
                        }}>
                        Sesiones privadas y con grupos pequeños.
                      </span>
                      <br />
                      <br />
                    </p>
                    <Link className="a-AboutUS" to="#">
                      Matricular Curso
                      <svg
                        className="bi bi-arrow-right"
                        fill="currentColor"
                        height="1em"
                        viewBox="0 0 16 16"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2" />
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 pt-4">
          <div className="col-xxl-2" />
          <div className="col">
            <div className="card card-b">
              <div className="card-body">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                  <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                    <img
                      alt=""
                      className="img-AboutUS"
                      src={img_portu}
                    />
                  </div>
                  <div className="px-3">
                    <h4>Portugués</h4>
                    <p>
                      <span
                        style={{
                          color: "rgb(73, 75, 81)",
                        }}>
                        Profesores nativos y costarricenses de alto nivel.
                      </span>
                      <br />
                      <br />
                    </p>
                    <Link className="a-AboutUS" to="#">
                      Matricular Curso
                      <svg
                        className="bi bi-arrow-right"
                        fill="currentColor"
                        height="1em"
                        viewBox="0 0 16 16"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-b">
              <div className="card-body">
                <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                  <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                    <img
                      alt=""
                      className="img-AboutUS"
                      src={img_spanish}
                    />
                  </div>
                  <div className="px-3">
                    <h4>Español</h4>
                    <p>
                      <span
                        style={{
                          color: "rgb(73, 75, 81)",
                        }}>
                        A nuestros estudiantes del extranjero les enseñamos
                        también.
                      </span>
                      <br />
                      <br />
                    </p>
                    <Link className="a-AboutUS" to="#">
                      Matricular Curso
                      <svg
                        className="bi bi-arrow-right"
                        fill="currentColor"
                        height="1em"
                        viewBox="0 0 16 16"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2" />
        </div>
      </div>
    </section>
    <section className="w-100" style={{ height: "100%" }}>
      <div className="container py-4 py-xl-5" style={{ height: "100%" }}>
        <div className="row gy-4 gy-md-0 w-100">
          <div className="col">
            <div className="card " style={{ height: "100%", borderColor: "white" }}>
              <div className="card-body" style={{ height: "100%" }}>
                <div className="row">
                  <div className="col align-self-center">
                    <div className="row">
                      <div className="col">
                        <h2 className="text-uppercase fw-bold text-center">
                          MISIÓN
                        </h2>
                      </div>
                      <div className="col-xxl-12">
                        <p className="text-center my-3">
                          Contribuir con el éxito personal y profesional de actuales
                          y potenciales estudiantes en idiomas y su cultura, por
                          medio de programas integrados con metodologías innovadoras
                          y eficientes, brindando un servicio de calidad, atención
                          personalizada y compromiso.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6">
                    <img
                      className=" img-misi w-100 fit-cover"
                      style={{
                        minHeight: 300,

                        maxHeight: 300
                      }}
                      src={img_mision}
                      width={322}
                      height={500} alt=""

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-2-AboutUs section-v">
      <div className="container py-4 py-xl-5">
        <div className="blur-box">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>VISIÓN</h2>
              <p className="w-lg-50">
                Nuestra visión es nuestro marco de desarrollo y guía en aspectos
                como:
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="">
                    <div className="">
                      <p
                        style={{
                          textAlign: "center",
                        }}>
                        <svg
                          className="bi bi-lightbulb"
                          fill="currentColor"
                          height="1em"
                          style={{
                            color: "rgb(252, 180, 0)",
                            fontSize: "39px",
                          }}
                          viewBox="0 0 16 16"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                        </svg>
                        <br />
                        <br />
                        <strong>INNOVACIÓN</strong>
                        <br />
                        <br />
                        La ejecución de programas innovadores e impulso de
                        capacitación avanzada para nuestro personal educador.
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <p
                    style={{
                      textAlign: "center",
                    }}>
                    <i
                      className="fa fa-globe"
                      style={{
                        color: "rgb(42, 87, 6)",
                        fontSize: "39px",
                        padding: "20px"
                      }}
                    />
                    <br />
                    <strong>EXPANSIÓN</strong>
                    <br />
                    <br />
                    Incursionar en otras comunidades, así como la ejecución de
                    programas que genere experiencias laborales y culturales de
                    nuestros estudiantes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <p
                    style={{
                      textAlign: "center",
                    }}>
                    <svg
                      className="bi bi-pin-angle"
                      fill="currentColor"
                      height="1em"
                      style={{
                        color: "rgb(130,210,255)",
                        fontSize: "39px",
                      }}
                      viewBox="0 0 16 16"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
                    </svg>
                    <br />
                    <br />
                    <strong>POSICIONAMIENTO</strong>
                    <br />
                    <br />
                    Ser la institución con la mejor metodología y atención
                    personalizada en occidente, para un crecimiento personal y
                    profesional de éxito de nuestra comunidad estudiantil.
                    <br />
                    <strong></strong>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container py-4 py-xl-5">
        <div className="row">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Valores corporativos</h2>
            <p className="w-lg-50">Lo que nos define como centro de educación.</p>
          </div>
        </div>
        <div
          className="row"
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "35px",
            textAlign: "center",
          }}>
          <div
            className="col"
            style={{
              textAlign: "center",
            }}>
            <div className="row">
              <div
                className="col-12 col-xxl-12"
                style={{
                  textAlign: "center",
                }}>
                <p
                  style={{
                    fontSize: "21px",
                  }}>
                  <svg
                    className="bi bi-lightbulb"
                    fill="currentColor"
                    height="1em"
                    style={{
                      color: "rgb(251,210,107)",
                      fontSize: "39px",
                    }}
                    viewBox="0 0 16 16"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                  </svg>
                  <br />
                  <strong>Innovación</strong>
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              textAlign: "center",
            }}>
            <div className="row">
              <div className="col">
                <p
                  style={{
                    fontSize: "21px",
                  }}>
                  <i
                    className="fa fa-handshake-o"
                    style={{
                      color: "rgb(181,112,82)",
                      fontSize: "33px",
                    }}
                  />
                  <br />
                  <strong>Respeto</strong>
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              textAlign: "center",
            }}>
            <div className="row">
              <div className="col">
                <p
                  style={{
                    fontSize: "21px",
                  }}>
                  <svg
                    fill="currentColor"
                    height="1em"
                    style={{
                      color: "rgb(57,104,150)",
                      fontSize: "32px",
                    }}
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z" />
                  </svg>
                  <br />
                  <strong>Atención</strong>
                  <br />
                  <strong>personalizada</strong>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              textAlign: "center",
            }}>
            <div className="row">
              <div className="col">
                <p
                  style={{
                    fontSize: "21px",
                  }}>
                  <i
                    className="fa fa-check-circle-o"
                    style={{
                      color: "rgb(76,35,77)",
                      fontSize: "40px",
                    }}>

                  </i>
                  <br />
                  <strong>Calidad</strong>
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              textAlign: "center",
            }}>
            <div className="row">
              <div className="col">
                <p
                  style={{
                    fontSize: "21px",
                  }}>
                  <i
                    className="fa fa-pencil"
                    style={{
                      color: "rgb(113,90,179)",
                      fontSize: "31px",
                    }}
                  />
                  <br />
                  <strong>Compromiso</strong>
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>)
}

export default AboutUs;