import React, { useState } from "react";
import "./Hero.css";
import "./main.css";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Countedup from "./Countedup";
import CardHover from "./CardHover";
const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showTrack, setShowTrack] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
    setShowTrack(false);
    setShowChat(false);
    
  };

  const handleShowTrack = () => {
    setShowTrack(true);
    setShowMenu(false);
    setShowChat(false);
  };

  const handleShowChat = () => {
    setShowChat(true)
    setShowMenu(false);
    setShowTrack(false);
  }

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleCloseTrack = () => {
    setShowTrack(false);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };


  const menuUI = () => {
    return (
      <>
        {showMenu && (
          <div className="toogleMenu">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="accordion_txt">Services</span>
                  <span className="plus_icon accordion_icon">
                    <span class="iconify" data-icon="mdi-light:plus"></span>
                  </span>
                  <span className="minus_icon accordion_icon">
                    <span class="iconify" data-icon="mdi-light:minus"></span>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="inner_accordion_links">
                    <a href="#" className="sub_links">
                      Express Distribution
                    </a>
                    <a href="#" className="sub_links">
                      Retail Services
                    </a>
                    <a href="#" className="sub_links">
                      Supply Chain Solutions
                    </a>
                    <a href="#" className="sub_links">
                      Air Frieght
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="accordion_txt">Tools</span>
                  <span className="plus_icon accordion_icon">
                    <span class="iconify" data-icon="mdi-light:plus"></span>
                  </span>
                  <span className="minus_icon accordion_icon">
                    <span class="iconify" data-icon="mdi-light:minus"></span>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="inner_accordion_links">
                    <a href="#" className="sub_links">
                      Express Distribution
                    </a>
                    <a href="#" className="sub_links">
                      Retail Services
                    </a>
                    <a href="#" className="sub_links">
                      Supply Chain Solutions
                    </a>
                    <a href="#" className="sub_links">
                      Air Frieght
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Header>
                  <a href="#" className="toogle_menu_links">
                    Media
                  </a>
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Header>
                  <a href="#" className="toogle_menu_links">
                    Careers
                  </a>
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Header>
                  <a href="#" className="toogle_menu_links">
                    Blogs
                  </a>
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Header>
                  <a href="#" className="toogle_menu_links">
                    About Us
                  </a>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
            <div className="login_area">
              <h2 className="menu_heaing">Login</h2>
              <div className="btn_grp">
                <button type="button" className="login_typr_btn">
                  Customer
                </button>
                <button type="button" className="login_typr_btn">
                  Business Partner
                </button>
                <button type="button" className="login_typr_btn">
                  Vendor
                </button>
              </div>
            </div>
            <div className="enquire_area">
              <h2 className="menu_heaing">
                <a href="#">Enquire Now</a>
              </h2>
            </div>
          </div>
        )}
      </>
    );
  };

  const trackUI = () => {
    return (
      <>
      {
        showTrack && 
        <div className="tracking_area">
          <div className="close_modal" onClick={handleCloseTrack}>
            <span class="iconify" data-icon="mi:close"></span>
          </div>
          <div className="tracking_form">
            <h3>Track Your Parcel</h3>
            <div className="tracking_seletion">
              <div className="track_radio">
                <label class="container_radio">
                  Docket No.
                  <input type="radio" checked="checked" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="container_radio">
                  Ref No.
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="enter_no_textbox">
                <input placeholder="Enter No." />
              </div>
              <button className="track_btn">
                Track
              </button>
            </div>
          </div>
        </div>
      }
        
      </>
    );
  };

  const whatsAppUI = () => {
    return(
      <>
      {
        showChat && 
        <div className="whatsapp_chat_area">
          <div className="close_modal" onClick={handleCloseChat}>
            <span class="iconify" data-icon="mi:close"></span>
          </div>
          <div className="genie_chat_area">
            <a href="#">
              <img src="images/reach.png" alt="Genie" />
              <div className="gnie">
                <span>Chat with Genie</span>
                <span>on WhatsApp</span>
              </div>
            </a>
          </div>
          <div className="genie_chat_area">
            <div className="inner_chart">
              <img src="images/comment.png" alt="Chat" />
              <div className="chat_expert_text">
                <h3>Ask an Expert</h3>
                <span>Live chat assistance</span>
              </div>
            </div>
          </div>
        </div>
      }
        
      </>
    )
  }

  return (
    <>
     
      <section className="hero_area">
        <div className="vertical_navabar">
          <nav>
            <ul>
             <li className="link_one">
                <img
                  onClick={showMenu ? handleCloseMenu : handleShowMenu}
                  src={showMenu ? "images/close.png" : "images/hamburger.png"}
                  alt="Hamburger"
                />
                {menuUI()}
              </li>
              <li className={showTrack? "link_two active_link" : "link_two"}>
                <div onClick={handleShowTrack}>
                  <img src="images/tracking-app.png" alt="Tracking-app" />
                  <span>
                    Track
                    <br />
                    Your
                    <br />
                    Parel
                  </span>
                </div>
                {trackUI()}
              </li>
              <li className={showChat? "link_three active_link" : "link_three"}>
                <div onClick={handleShowChat}>
                  <img src="images/whatsapp.png" alt="whatsapp" />
                  <span>
                    Chat
                    <br />
                    With Us
                    <br />
                  </span>
                </div>
                {whatsAppUI()}
              </li>

              <li className="link_four">
                <img src="images/calculator.png" alt="calculator" />
                <span>
                  Rate &<br />
                  Transit
                  <br />
                  Time
                </span>
              </li>

              <li className="link_five">
                <img src="images/package.png" alt="package" />
                <span>
                  Pick Up
                  <br />
                  Request
                  <br />
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="left_hero_sec">
          <div className="brand">
            <a href="#" className="logo">
              <img src="images/logo.png" alt="allcargo gati" />
            </a>
          </div>
          <div className="left_hero_content">
            <h3>Connecting India,</h3>
            <h2>Seamlessly!</h2>
            <button className="banner_btn">
              <span>Get Started</span>
              <span class="iconify" data-icon="iconoir:arrow-right"></span>
            </button>
          </div>
        </div>
        <div className="right_hero_sec">
          <div className="banner_img">
            <img src="images/main.png" alt="banner_img" />
          </div>
        </div>
      </section>
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
            <a href="">    <img
                  className=" w-100"
                  src="/images/card1.png"
                  alt="Card image cap"
                /></a>
              </div>
              <div className="card-body pt-0 border-0">
             <a href="">  <p className="card-text">
                  Collaborating with key customers to use Electric Vehicles for
                  pick-ups and deliveries
                </p> </a> 
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card profile-card-5">
              <div class="card-img-block">
               <a href=""> <img
                  className=" w-100"
                  src="/images/card2.png"
                  alt="Card image cap"
                /></a>
              </div>
              <div className="card-body pt-0 border-0">
              <a href=""><p className="card-text">
                Geared to convert our first and last mile fleet
to alternate fuel by 2025 
                </p></a>  
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card profile-card-5">
              <div class="card-img-block">
              <a href="">  <img
                  className=" w-100"
                  src="/images/card3.png"
                  alt="Card image cap"
                /></a>
              </div>
              <div className="card-body pt-0 border-0">
                <a href=""><p className="card-text">
                Aligning with Allcargo Group’s overall objective
of being carbon neutral by 2040 
                </p></a>
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
