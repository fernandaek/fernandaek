import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact";

function LandingPage() {
  return (
    <div id="videobackground">
      <MDBView>
        <MDBMask className="gradient">
          <video
            className="video-intro"
            poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
            muted
            loop
            autoPlay
          >
            <source
              src="https://mdbootstrap.com/img/video/animation.mp4"
              type="video/mp4"
            />
          </video>
        </MDBMask>{" "}
        <MDBContainer
          className="d-flex justify-content-center align-items-center px-md-3 px-sm-0"
          style={{ height: "100vh", width: "100%" }}
        >
          <MDBRow>
            <MDBCol md="12" className="mb-4 white-text text-center">
              <MDBAnimation type="fadeInDown" delay=".5s">
                <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                  Fernanda Ek{" "}
                </h3>
                <hr className="hr-light my-4 w-75" />
                <h4 className="subtext-header mt-2 mb-4">
                  How to improve the efficiency of your business making your
                  website and intranet user friendly?
                </h4>
              </MDBAnimation>
              <MDBAnimation type="fadeInUp" delay=".9s">
                <MDBBtn outline rounded color="white" href="#contact">
                  <MDBIcon icon="home" /> Contact me
                </MDBBtn>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
}

export default LandingPage;
