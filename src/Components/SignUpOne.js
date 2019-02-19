import React, { Component } from "react";
import "../main.css";
import logo from "../images/Logo.png";
import img from "../images/Winmorework@2x.png";
import Footer from "./../Footer";
import { NavLink } from "react-router-dom";

class SignUpOne extends Component {
  render() {
    return (
      <body>
        <section>
          <div className="container-fluid">
            <div className="logo-section  text-center mt-3">
              <img width="100px" src={logo} alt={""} />
              <span className="tagline">Simple, fast, finance.</span>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-4">
                <div className="container mt-5">
                  <div className="text-center">
                    <img width="130px" src={img} alt={""} />
                    <h4 className="mt-2">
                      Get your personalised loan rates in 2 minutes
                    </h4>
                    <p style={{ color: "#878787" }}>
                      This won't affect your credit score
                    </p>
                    <div className="signup-form-steps">
                      <div className="MuiPaper-root MuiPaper-elevation0 MuiStepper-root MuiStepper-horizontal MuiStepper-alternativeLabel">
                        <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                          <button
                            tabindex="0"
                            className="MuiButtonBase-root MuiStepButton-root"
                            type="button"
                          >
                            <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                              <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                                <svg
                                  className="MuiSvgIcon-root c314 MuiStepIcon-root MuiStepIcon-active"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <circle cx="12" cy="12" r="12" />
                                  <text
                                    className="c315"
                                    x="12"
                                    y="16"
                                    text-anchor="middle"
                                  >
                                    1
                                  </text>
                                </svg>
                              </span>
                              <span className="MuiStepLabel-labelContainer">
                                <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel MuiStepLabel-active">
                                  1
                                </span>
                              </span>
                            </span>
                            <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                          </button>
                          <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                            <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
                          </div>
                        </div>
                        <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                          <button
                            tabindex="0"
                            className="MuiButtonBase-root MuiStepButton-root"
                            type="button"
                          >
                            <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                              <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                                <svg
                                  className="MuiSvgIcon-root c314 MuiStepIcon-root"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <circle cx="12" cy="12" r="12" />
                                  <text
                                    className="c315"
                                    x="12"
                                    y="16"
                                    text-anchor="middle"
                                  >
                                    2
                                  </text>
                                </svg>
                              </span>
                              <span className="MuiStepLabel-labelContainer">
                                <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                                  2
                                </span>
                              </span>
                            </span>
                            <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                          </button>
                          <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                            <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
                          </div>
                        </div>
                        <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                          <button
                            tabindex="0"
                            className="MuiButtonBase-root MuiStepButton-root"
                            type="button"
                          >
                            <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                              <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                                <svg
                                  className="MuiSvgIcon-root c314 MuiStepIcon-root"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <circle cx="12" cy="12" r="12" />
                                  <text
                                    className="c315"
                                    x="12"
                                    y="16"
                                    text-anchor="middle"
                                  >
                                    3
                                  </text>
                                </svg>
                              </span>
                              <span className="MuiStepLabel-labelContainer">
                                <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                                  3
                                </span>
                              </span>
                            </span>
                            <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                          </button>
                          <div className="MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel">
                            <span className="MuiStepConnector-line MuiStepConnector-lineHorizontal" />
                          </div>
                        </div>
                        <div className="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel">
                          <button
                            tabindex="0"
                            className="MuiButtonBase-root MuiStepButton-root"
                            type="button"
                          >
                            <span className="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel">
                              <span className="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel">
                                <svg
                                  className="MuiSvgIcon-root c314 MuiStepIcon-root"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <circle cx="12" cy="12" r="12" />
                                  <text
                                    className="c315"
                                    x="12"
                                    y="16"
                                    text-anchor="middle"
                                  >
                                    4
                                  </text>
                                </svg>
                              </span>
                              <span className="MuiStepLabel-labelContainer">
                                <span className="MuiTypography-root MuiTypography-body1 MuiStepLabel-label MuiStepLabel-alternativeLabel">
                                  4
                                </span>
                              </span>
                            </span>
                            <span className="MuiTouchRipple-root MuiStepButton-touchRipple" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <h5 style={{ color: "#29262C" }}>Your loan</h5>
                  <br />
                  <h6 style={{ color: "#29262C" }}>
                    Loan amount (£1,000 - £25-000)
                  </h6>
                  <div className="text1">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="£"
                      />
                      <input
                        type="range"
                        className="custom-range"
                        id="customRange1"
                      />
                    </div>
                  </div>
                  <h6 style={{ color: "#29262C" }}>Lending Terms</h6>
                  <div className="text1">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Years"
                      />
                      <input
                        type="range"
                        className="custom-range"
                        id="customRange1"
                        min="1"
                        max="5"
                      />
                    </div>
                  </div>
                  <h6 style={{ color: "#29262C" }}>What's the loan for?</h6>
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-secondary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      This dropdown's menu is right-aligned
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <button class="dropdown-item" type="button">
                        Action
                      </button>
                      <button class="dropdown-item" type="button">
                        Another action
                      </button>
                      <button class="dropdown-item" type="button">
                        Something else here
                      </button>
                    </div>
                  </div>
                  <NavLink to="/SignUpTwo">
                    <a
                      title="Link to Find my quote"
                      className="btn find-my-quote text-center"
                      target="_blank"
                      style={{
                        color: " #212529",
                        backgroundColor: "#fff",
                        borderColor: "#fab62d",
                        marginBottom: "20px",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        fontWeight: "700",
                        borderWidth: "4px",
                        borderRadius: "2rem",
                        fontSize: " 1.4rem",
                        textAlign: "center"
                      }}
                    >
                      Next
                    </a>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-4" />
            </div>
          </div>
        </section>
        <Footer />
      </body>
    );
  }
}

export default SignUpOne;
