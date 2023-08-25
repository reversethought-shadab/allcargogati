import React, { useState } from "react";
import "./Hero.css";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Countedup from "./Countedup";
import CardHover from "./CardHover";
const Hero = () => {

  const [showServices, setShowServices] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
    setShowTools(false); // Close other dropdown
  };

  const toggleTools = () => {
    setShowTools(!showTools);
    setShowServices(false); // Close other dropdown
  };

  const closeDropdowns = () => {
    setShowServices(false);
    setShowTools(false);
  };
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);

  };
  const sidebarItems = [
    { id: 1, imageSrc: '/images/tracking-app.png', text: 'TRACK YOUR PARCEL' },
    { id: 2, imageSrc: '/images/whatsap.png', text: 'CHAT WITH US' },
    { id: 3, imageSrc: '/images/calculator.png', text: 'RATE & TRANSIT TIME' },
    { id: 4, imageSrc: '/images/package.png', text: 'PICK UP REQUEST' },
  ];
  const [showMenu, setShowMenu] = useState(false);

  const menuHandle = () => {
    setShowMenu(true);
  }

  const closeHandle = () => {
    setShowMenu(false);
  }
  const [showChat, setShowChat] = useState(false);
  const chatHandle = () => {
    setShowChat(true);
  }
  const closeChatHandle = () => {
    setShowChat(false);
  }

  const [showTrack, setShowTrack] = useState(false);
  const trackHandle = () => {
    setShowTrack(true);
  }
  const closeTrack = () => {
    setShowTrack(false);
  }
  const [selectedValue, setSelectedValue] = useState('docket');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      {showChat && <div className="chatmenu">
        <div className="chat-items">
          <img src="/images/close.svg" className="close-butn" onClick={closeChatHandle} />
         
        </div>
      </div>}
      {/* menu section start here  */}
      {showTrack && <div className="track">


        <img src="/images/close.svg" className="close-butn" onClick={closeTrack} />
        <h3 className="text-white fs-5 mx-5 my-5 py-5 track-font">TRACK YOUR PARCEL</h3>

        <ul className="check-form">
          <li className="check-items">
            <input type="radio" name="name" id="one" value="docket"
              checked={selectedValue === 'docket'}
              onChange={handleRadioChange} />
            <label htmlFor="one">Docket No.</label>

            <div className="check"></div>
          </li>

          <li className="check-items">
            <input type="radio" name="name" id="two" value="ref"
              checked={selectedValue === 'ref'}
              onChange={handleRadioChange} />
            <label htmlFor="two">Ref No.</label>

            <div className="check"></div>
          </li>
        </ul>
        <form className="rounded-form mx-5">
          <input
            type="text"
            placeholder={
              selectedValue === 'docket' ? 'Enter Docket No.' : 'Enter Ref No.'
            }
          />
          <button className="rounded-track-button">Track</button>
        </form>

      </div>}
      {showMenu && <div className="menu">
        <nav class="sidenavbar">
          <ul class="navbar-nav ">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" onClick={toggleServices} href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              {showServices && (<div class="dropdown-menu" aria-labelledby="servicesDropdown">
                <a class="dropdown-item" href="#">Express Distribution</a>
                <a class="dropdown-item" href="#">Retail Services</a>
                <a class="dropdown-item" href="#">Supply Chain Solutions</a>
                <a class="dropdown-item" href="#">Air Freight</a>
              </div>
              )}
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" onClick={toggleTools} href="#" id="toolsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tools
              </a>
              {showTools && (
                <div class="dropdown-menu" aria-labelledby="toolsDropdown">
                  <a class="dropdown-item" href="#">Tool 1</a>
                  <a class="dropdown-item" href="#">Tool 2</a>
                  <a class="dropdown-item" href="#">Tool 3</a>
                  <a class="dropdown-item" href="#">Tool 4</a>
                </div>)}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Media</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Careers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
          </ul>
          <div className="brde">
            <li class="nav-item text-white list-unstyled">
              <a class="login  nav-link" href="#">Login</a>
            </li>
            <div class="btn-group">
              <button class="btn btn-rounded btn-secondary">Button 1</button>
              <button class="btn btn-rounded btn-secondary">Button 2</button>
              <button class="btn btn-rounded btn-secondary">Button 3</button>
            </div>
          </div>
          <div className="explore">
            <li className="nav-item text-white list-unstyled"><a href="" className="explore nav-links">Explore Now</a></li>
          </div>
        </nav>
      </div>}

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 bg-dark d-flex">
            <div className="sidenav">
              <nav className="sidebar-nav-list">
                <div className="mb-3 text-center">

                  {showMenu ? <img src="/images/close.png" onClick={closeHandle} alt="" className="close-btn" /> : <img src="/images/hamburger.png" className="sidebar-nav-item" onClick={menuHandle} />}

                </div>
                <div className={`mt-4 sidebar-nav-item ${activeItem === 'TRACK YOUR PARCEL' ? 'active' : ''}`} onClick={() => { handleItemClick('TRACK YOUR PARCEL'); trackHandle(); }}>
                  <img src="/images/tracking-app.png" alt="" />
                  <p>TRACK YOUR PARCEL</p>
                </div>
                <div className={`mt-4 sidebar-nav-item border-right ${activeItem === 'CHAT WITH US' ? 'active' : ''}`} onClick={() => { handleItemClick('CHAT WITH US'); chatHandle(); }}>
                  <img src="/images/whatsap.png" alt="" />
                  <p>CHAT WITH US</p>
                </div>
                <div className={`mt-4 sidebar-nav-item ${activeItem === 'RATE & TRANSIT TIME' ? 'active' : ''}`} onClick={() => handleItemClick('RATE & TRANSIT TIME')}>
                  <img src="/images/calculator.png" alt="" />
                  <p>RATE & TRANSIT TIME</p>
                </div>
                <div className={`mt-4 sidebar-nav-item ${activeItem === 'PICK UP REQUEST' ? 'active' : ''}`} onClick={() => handleItemClick('PICK UP REQUEST')}>
                  <img src="/images/package.png" alt="" />
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
                <h2 className="display-2 text-white fw-bold"> Seamlessly!</h2>
                <Button variant="btn-hero btn-secondary rounded-5 mt-3">
                  Get Started
                  <span>
                    <img src="/images/right.png" className="arrow" alt="" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6  ">
           <div className="img-after">

            <img src="/images/main.png" className="main-img" alt="" />
           </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="row align-items-center second">
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
          <div className="col-lg-7 frame-right">
          <div class="video-container">
    <iframe src="https://www.youtube.com/embed/SjivVFxgAjI?si=0FORHunhgxW9QhPr?modestbranding=0&autohide=0&showinfo=0&controls=0&disablekb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
     </div>
        </div>
      </div>
      <Countedup />
      <CardHover/>
      <div className="container py-5">
        <h2 className="text-center title">
          Our Pledge to a Sustainable Planet
        </h2>
        <p className="text-center  justify-content-center py-3 pledge">
          Driving positive change through sustainable practices, community
          empowerment, and
          <br />
          ethical standards. Committed to a better world.
        </p>
        <div className="row py-3 gy-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <img
                  className=" w-100"
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <img
                  className=" w-100"
                  src="/images/card2.png"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body pt-0 border-0">
                <p className="card-text">
                Geared to convert our first and last mile fleet
to alternate fuel by 2025 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <img
                  className=" w-100"
                  src="/images/card3.png"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body pt-0 border-0">
                <p className="card-text">
                Aligning with Allcargo Group’s overall objective
of being carbon neutral by 2040 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="work-porcess-area section">
        <div className="container-timeline container">
          <div className="section-header">
            <h2 className="text-white">Accolades that inspire us!</h2>
            <p className="text-white text-center">
              Our journey is enriched by the accolades received, motivating us
              to keep pushing  
              <br />
              the boundaries of success.
            </p>
          </div>
          <div className="timeline">
        <div className="round-box">
            <p>Image Placeholder</p>
        </div>
        <div className="round-box">
           <p>Image Placeholder</p>
        </div>
        <div className="date-box">
           <p>2023</p>
        </div>
        <div className="round-box">
           <p>Image Placeholder</p>
        </div>
        <div className="date-box">
            <p>2022</p>
        </div>
        <div className="round-box">
           <p>Image Placeholder</p>
        </div>

    </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
