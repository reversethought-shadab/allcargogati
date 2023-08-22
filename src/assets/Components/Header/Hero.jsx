import React from "react";
import "./Hero.css";
import Button from 'react-bootstrap/Button';
import FontAwesomeIcon from "react-fontawesome";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 bg-dark ">
            <div className="sidenav">
              <nav className="sidebar-nav-list">
                <div className="mb-3">
                  <img
                    src="/images/hamburger.png"
                    className="sidebar-nav-item"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <img
                    src="/images/tracking-app.png"
                    className="sidebar-nav-item"
                    alt=""
                  />
                  <p>TRACK YOUR PARCEL</p>
                </div>
                <div className="mt-4">
                  <img
                    src="/images/whatsap.png"
                    className="sidebar-nav-item"
                    alt=""
                  />
                  <p>CHAT  WITH US</p>
                </div>
                <div className="mt-4">
                  <img
                    src="/images/calculator.png"
                    className="sidebar-nav-item"
                    alt=""
                  />
                  <p>RATE & TRANSIT TIME</p>
                </div>
                <div className="mt-4">
                  <img
                    src="/images/package.png"
                    className="sidebar-nav-item"
                    alt=""
                  />
                  <p>PICK UP REQUEST</p>
                </div>
              </nav>
            </div>
            <div className="left"> <div className="logo"><img src="/images/logo.png" alt="" /></div>
              <div className="content ">
                <h1 className="text-white">Connecting India,</h1>
                <h2 className="display-2 text-white fw-bold">Seamlessly!</h2>
                <Button variant=" btn btn-secondary rounded-5 mt-3">Get Started <span> <img src="/images/right.png" className="w-25" alt="" /> </span> </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img src="/images/main.png" className="main-img" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5 content-left">
            <p>Welcome to Gati Logistics, a pioneering name in seamless
              cargo movement. Backed by Allcargo's strength, we provide
              unmatched logistics solutions globally. Our commitment to
              innovation, reliability, and sustainability drives us forward,
              ensuring efficient supply chains while preserving the
              environment.</p>
            <p>Join us on this transformative journey towards a greener
              and more prosperous future.</p>
          </div>
          <div className="col-lg-7">
            <div className="icon-container">
              <div className=" image-container">
                <img src="/images/box-img.jpg" className="video-thumbnail image " />
                <a href="https://youtu.be/7P_Bg-XKCGc"> <div className="play-button">
                </div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>
            Empowering Businesses, Accelerating Growth:
Our Express Commitment 
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
