import React, { useState } from "react";
import "./Hero.css";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Countedup from "./Countedup";
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
const trackHandle =() =>{
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
     <div className="whatsapp relative ">
       <img src="/images/reach.png" className="reach" alt="" />
       <div className="genie">
        <h5 className="text-white chat">Chat With Genie</h5>
        <span className="text-white chat">on Whatsapp</span>
        </div>
     </div>
     <div className="assistent">
       <div className="expert">
        <img src="/images/comment.png" alt="" />
       </div>
     </div>
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
            onChange={handleRadioChange}  />
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
    {/* <ul class="main-buttons">
      <li className="fs-5">
        Services
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 2L13.8 10.2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 6.17004V11H17.83" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <ul className="hidden  ">
          <li className="fs-5"><a href="" className="text-white">Express Distribution</a></li>
          <li className="fs-5"><a href="" className="text-white">Retail Services</a> </li>
          <li className="fs-5"><a href="" className="text-white">Supply Chain Solutions</a> </li>
          <li className="fs-5"><a href="" className="text-white">Air Freight</a></li>
        </ul>
      </li>
      <li className="fs-5">
        Tools
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 2L13.8 10.2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 6.17004V11H17.83" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <ul class="hidden">
          <li className="fs-5"><a href="" className="text-white">Tool1</a></li>
          <li className="fs-5"><a href="" className="text-white">Tool2</a></li>
          <li className="fs-5"><a href="" className="text-white">Tool3</a></li>
        </ul>
      </li>
      <li className="fs-5"><a href="" className="text-white">Media</a>  </li>
      <li className="fs-5"><a href="" className="text-white">Careers</a>  </li>
      <li className="fs-5"><a href="" className="text-white">Blogs</a>  </li>
      <li className="fs-5"><a href="" className="text-white">About Us</a>  </li>
    <h4  className="border-top py-3 fs-5 mx-5"><a href="" className="text-white">Login</a></h4>
      <div className="btn-group mx-5 pb-3">
         <button type="button" className="btn btn-primary rounded-5">Costomer</button>
    <button type="button" className="btn mx-3 btn-primary rounded-5 second-btn">Business Partner</button>
    <button type="button" className="btn btn-primary rounded-5">Vendor</button>
        </div>
    </ul>
    <h4 className="text-white mx-5 mb-5 fs-5 "><a href="" className="text-white">Enquire Now</a> </h4> */}
  <ul class="navbar-nav ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" onClick={toggleServices} href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          {showServices && (  <div class="dropdown-menu" aria-labelledby="servicesDropdown">
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
          </div>  )}
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
      <Countedup/>
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
