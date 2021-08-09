import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo-coral.svg";

export default function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="lg">
        <Grid container className="footer-selection">
          <Grid className="footer-selection-detail cfff">
            <div>
              <ul>
                <li>
                  <a href="#">Udemy Business</a>
                </li>
                <li>
                  <a href="#">Teach on Udemy</a>
                </li>
                <li>
                  <a href="#">Get the app</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid className="footer-selection-detail cfff">
            <div>
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Help and Support</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid className="footer-selection-detail cfff">
            <div>
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>

        <div className="footer-logo">
          <img src={logo} />
        </div>
      </Container>
    </div>
  );
}
