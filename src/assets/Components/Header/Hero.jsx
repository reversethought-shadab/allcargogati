import React, { useState } from "react";
import "./Hero.css";
import Button from "react-bootstrap/Button";
import FontAwesomeIcon from "react-fontawesome";

const Hero = () => {

  const [showMenu, setShowMenu] = useState(false);

  const menuHandle = () => {
    setShowMenu(true);
  }

  const closeHandle = () => {
    setShowMenu(false);
  }


  return (
    <>
      {/* menu section start here  */}

      {showMenu && <div className="menu"></div>}

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 bg-dark d-flex">
            <div className="sidenav">
              <nav className="sidebar-nav-list">
                <div className="mb-3">

                  {showMenu ? <h1 onClick={closeHandle}>X</h1> : <img src="/images/hamburger.png" className="sidebar-nav-item" onClick={menuHandle} />}

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
                  <p>CHAT WITH US</p>
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
            <div className="left">
              <div className="logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <div className="content ">
                <h1 className="text-white">Connecting India,</h1>
                <h2 className="display-2 text-white fw-bold">Seamlessly!</h2>
                <Button variant="btn-hero btn-secondary rounded-5 mt-3">
                  Get Started
                  <span>
                    <img src="/images/right.png" className="arrow" alt="" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img src="/images/main.png" className="main-img" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 content-left">
            <p>
              Welcome to Gati Logistics, a pioneering name in seamless cargo
              movement. Backed by Allcargo's strength, we provide unmatched
              logistics solutions globally. Our commitment to innovation,
              reliability, and sustainability drives us forward, ensuring
              efficient supply chains while preserving the environment.
            </p>
            <p>
              Join us on this transformative journey towards a greener and more
              prosperous future.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="icon-container">
              <div className="image-container">
                <img
                  src="/images/box-img.jpg"
                  className="video-thumbnail image "
                />
                <a href="https://youtu.be/7P_Bg-XKCGc">
                  <div className="play-button"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container overview py-5 ">
        <div className="row">
          <div className="col-12">
            <h3 className="title">
              Empowering Businesses, Accelerating Growth:
              <br />
              Our Express Commitment
            </h3>
          </div>
          <div className="row counter">
            <div className="col-lg-3 col-md-6 border-top border-end border-bottom px-3 py-2 text-center ">
              <p>Reach over</p>
              <span className="number">19800</span>
              <p>Pincodes</p>
            </div>
            <div className="col-lg-3 col-md-6 border-top border-end border-bottom px-3 py-2 text-center">
              <p>over</p>
              <span>600</span>
              <p>Offices</p>
            </div>
            <div className="col-lg-3 col-md-6  border-top border-end border-bottom px-3 py-2 text-center">
              <p>Direct Delivery to</p>
              <span>5100+</span>
              <p>Pincodes</p>
            </div>
            <div className="col-lg-3 col-md-6  border-top border-bottom px-3 py-2 text-center">
              <p>Fleet Size of</p>
              <span>5000+</span>
              <p>Trucks</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 gy-3">
            <div class="card-container overlay position-relative">
              <img
                class="image"
                src="/images/young-delivery.avif"
                alt="Card image cap"
              />
              <p className="image-title">EXPRESS DISTRIBUTION</p>
              <div class="middle">
                <div className="inner-text">
                  <h3>EXPRESS DISTRIBUTION</h3>
                  Express Distribution offers direct route connectivity to all
                  major locations in India, thereby helping you save on time
                  <button type="button" class="btn-card">
                    Get Started
                    <span>
                      <img
                        src="/images/right.png"
                        class="btn-image"
                        alt=""
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 gy-3">
            <div class="card-container overlay position-relative">
              <img
                class="image"
                src="/images/young-delivery.avif"
                alt="Card image cap"
              />
              <p className="image-title">hello</p>
              <div class="middle">
                <div className="inner-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  vitae sit labore explicabo quibusdam enim odio illo
                  repudiandae necessitatibus ducimus!
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 gy-3">
            <div class="card-container overlay position-relative">
              <img
                class="image"
                src="/images/young-delivery.avif"
                alt="Card image cap"
              />
              <p className="image-title">hello</p>
              <div class="middle">
                <div className="inner-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  vitae sit labore explicabo quibusdam enim odio illo
                  repudiandae necessitatibus ducimus!
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 gy-3">
            <div class="card-container overlay position-relative">
              <img
                class="image"
                src="/images/young-delivery.avif"
                alt="Card image cap"
              />
              <p className="image-title">hello</p>
              <div class="middle">
                <div className="inner-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  vitae sit labore explicabo quibusdam enim odio illo
                  repudiandae necessitatibus ducimus!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center title">
          Our Pledge to a Sustainable Planet
        </h2>
        <p className="text-center  justify-content-center py-3">
          Driving positive change through sustainable practices, community
          empowerment, and
          <br />
          ethical standards. Committed to a better world.
        </p>
        <div className="row py-3 ">
          <div className="col-lg-4">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <img
                  className="card-img-top w-100"
                  src="/images/card1.png"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body pt-0 border-0">
                <p className="card-text">
                  Collaborating with key customers to use Electric Vehicles for
                  pick-ups and deliveries
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <img
                  className="card-img-top w-100"
                  src="/images/card1.png"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body pt-0 border-0">
                <p className="card-text">
                  Collaborating with key customers to use Electric Vehicles for
                  pick-ups and deliveries
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <img
                  className="card-img-top w-100"
                  src="/images/card1.png"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body pt-0 border-0">
                <p className="card-text">
                  Collaborating with key customers to use Electric Vehicles for
                  pick-ups and deliveries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="work-porcess-area section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-white">Accolades that inspire us!</h2>
            <p className="text-white">
              Our journey is enriched by the accolades received, motivating us
              to keep pushing the boundaries of success.
            </p>
          </div>
          <div className="process-info">
            <div className="row">
              <div className="col-md-3">
                <div className="single-process single-process-2 first text-center">
                
                    <img src="/images/package.png" alt="" />
                  
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-process single-process-3 secend text-center">
                
                    <img src="/images/package.png" alt="" />
                  
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-process thard text-center">
                
                    <img src="/images/package.png" alt="" />
                  
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-process  last text-center">
                
                    <img src="/images/package.png" alt="" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
