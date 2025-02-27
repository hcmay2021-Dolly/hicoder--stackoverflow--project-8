import React from "react";
import "./Footer.scss";
import logo from "../Images/logo3.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="footer text-lg-start bg-dark text-muted py-5">
        <section class="">
          <div class="container text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-2 col-lg-4 col-xl-3 mx-auto mb-4 ">
                <img src={logo} alt="" />
              </div>

              {/* STACK OVERFLOW stacks started */}
              {footerContent.map((content) => {
                return (
                  <>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer--content">
                      <h6 class="text-uppercase fw-bold mb-4">
                        {content.header}
                      </h6>
                      <p>
                        <Link to="/jobs" class="text-reset">
                          {content.con1}
                        </Link>
                      </p>
                      <p>
                        <Link to="/jobs" class="text-reset">
                          {content.con2}
                        </Link>
                      </p>
                      <p>
                        <Link to="/developer" class="text-reset">
                          {content.con3}
                        </Link>
                      </p>
                      <p>
                        <Link to="/salary" class="text-reset">
                          {content.con4}
                        </Link>
                      </p>
                      <p>
                        <Link to="/salary" class="text-reset">
                          {content.con5}
                        </Link>
                      </p>
                      <p>
                        <Link to="/salary" class="text-reset">
                          {content.con6}
                        </Link>
                      </p>
                      <p>
                        <Link to="/salary" class="text-reset">
                          {content.con7}
                        </Link>
                      </p>
                      <p>
                        <Link to="/salary" class="text-reset">
                          {content.con8}
                        </Link>
                      </p>
                      <p>
                        <Link to="/salary" class="text-reset">
                          {content.con9}
                        </Link>
                      </p>
                    </div>
                  </>
                );
              })}
              {/* STACK OVERFLOW stacks Ends */}

              {/* Social Links started */}
              <div class="col-md-3 col-lg-2 col-xl-2 d-flex m-auto">
                <p className="mx-4">
                  <Link to="/" class="text-reset">
                    <i class="fas fa-id-card"></i>Blog
                  </Link>
                </p>
                <p>
                  <Link to="/" class="text-reset  mx-4">
                    <i class="fab fa-facebook-square"></i>Facebook
                  </Link>
                </p>
                <p>
                  <Link to="/" class="text-reset  mx-3">
                    <i class="fab fa-instagram-square"></i>Instagram
                  </Link>
                </p>
                <p>
                  <Link to="/" class="text-reset  mx-4">
                    <i class="fab fa-twitter-square"></i>Twitter
                  </Link>
                </p>
                <p>
                  <Link to="/" class="text-reset mx-4">
                    <i class="fab fa-linkedin"></i> LinkedIn
                  </Link>
                </p>
              </div>
              {/* Social Links Ends */}
            </div>
          </div>
        </section>

        {/* Copyright Started */}
        <div class="text-right bg-dark mr-5">
          © 2021 Copyright: {""}
          <Link to="/" class="text-reset fw-bold">
            created by Dolly
          </Link>
        </div>
        {/* Copyright Ends */}
      </footer>
    </>
  );
};

export default Footer;

const footerContent = [
  {
    header: "STACK OVERFLOW",
    con1: "Questions",
    con2: "Jobs",
    con3: "Developer Jobs Directory",
    con4: "Salary Calculator",
    con5: "Help",
    con6: "Mobile",
    con7: "Disable Responsiveness",
  },
  {
    header: "PRODUCTS",
    con1: "Teams",
    con2: "Talent",
    con3: "Advertising",
    con4: "Enterprise",
  },
  {
    header: "COMPANY",
    con1: "Questions",
    con2: "Press",
    con3: "Work Here",
    con4: "Legal",
    con5: "Privacy Policy",
    con6: "Terms of Service",
    con7: "Contact Us",
    con8: "Cookie Settings",
    con9: "Cookie Policy",
  },
  {
    header: "STACK EXCHANGE NETWORK",
    con1: "Technology",
    con2: "Culture & recreation",
    con3: "Life & arts",
    con4: "Science",
    con5: "Professional",
    con6: "Business",
    con7: "API",
    con8: "Data",
  },
];
