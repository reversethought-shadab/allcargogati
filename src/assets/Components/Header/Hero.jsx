import React, { useState } from "react";
import "./Hero.css";
import "./main.css";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Countedup from "./Countedup";
import CardHover from "./CardHover";
const Hero = () => {
  // const gati = [
  //   {
  //     title: "Customer Login",
  //     projectLink: "https://www.gati.com/customer-portal/",
  //   },
  //   {
  //     title: "Vendor Login",
  //     projectLink: "https://www.gati.com/partnerlogin/index.jsp",
  //   },
  //   {
  //     title: "Business Partner Login",
  //     projectLink: "https://www.gati.com/GatiBP/index.jsp",
  //   },
  //   {
  //     title: "Enquire Now",
  //     projectLink: "https://www.gati.com/contact-us/contact-details/",
  //   },
  //   {
  //     title: "Genie",
  //     projectLink: "https://api.whatsapp.com/send?phone=917400012000&text=Hi",
  //   },
  //   {
  //     title: "Track Your Parcel",
  //     projectLink: "To be API integrated",
  //   },
  //   {
  //     title: "Calculate Rate & Transit Time",
  //     projectLink: "https://www.gati.com/shipping-cost-calculator/",
  //   },
  //   {
  //     title: "Pickup Request",
  //     projectLink: "https://www.gati.com/courier-pickup-request/",
  //   },
  //   {
  //     title: "Collaborating with key customers",
  //     projectLink: "New pages",
  //   },
  //   {
  //     title: "Geared to covert our first and last mile",
  //     projectLink: "New pages",
  //   },
  //   {
  //     title: "Group's overall objective",
  //     projectLink: "New pages",
  //   },
  // ];

  // const gatikwe = [
  //   {
  //     tile: "Express Distribution",
  //     projectLink: "https://www.gatikwe.com/our-services/express-distribution/",
  //   },
  //   {
  //     title: "Retail Services",
  //     projectLink:
  //       "https://www.gatikwe.com/our-services/special-services/bike-express/",
  //   },
  //   {
  //     title: "Supply Chain Solutions",
  //     projectLink: "https://www.gati.com/supply-chain-logistics-solutions/",
  //   },
  //   {
  //     title: "Air Freight",
  //     projectLink: "https://www.gatikwe.com/air-freight/",
  //   },
  //   {
  //     title: "Calculate Rate & Transit Time",
  //     projectLink: "https://www.gati.com/shipping-cost-calculator/",
  //   },
  //   {
  //     title: "ESS Matrix",
  //     projectLink: "https://www.gati.com/pdf/ESS_matrix.pdf",
  //   },
  //   {
  //     title: "Claim Registration",
  //     projectLink: "https://www.gati.com/claims-process/",
  //   },
  //   {
  //     title: "Convert Weight/Volume",
  //     projectLink: "https://www.gatikwe.com/tools/convert-weight-volume/",
  //   },
  //   {
  //     title: "View Fuel & Diesel Surcharge",
  //     projectLink: "https://www.gati.com/tools/view-fuel-diesel-surcharge/",
  //   },
  //   {
  //     title: "Pin Code Serviceability",
  //     projectLink: "https://www.gati.com/contact-us/locate-us/",
  //   },
  //   {
  //     title: "Prohibited Goods fro Shipping",
  //     projectLink:
  //       "https://www.gatikwe.com/tools/prohibited-goods-for-shipping/",
  //   },
  //   {
  //     title: "Dowload GST Invoice",
  //     projectLink: "https://www.gati.com/our-services/gst-solutions/",
  //   },
  //   {
  //     title: "Media",
  //     projectLink: "https://www.gati.com/media-center/press-coverages/",
  //   },
  //   {
  //     title: "Career",
  //     projectLink: "https://www.gati.com/careers/working-with-gati/",
  //   },
  //   {
  //     title: "Blogs",
  //     projectLink: "https://www.gatikwe.com/blog/",
  //   },
  //   {
  //     title: "About Us",
  //     projectLink: "https://www.gatikwe.com/about-us/gati-kwe-profile/",
  //   },
  //   {
  //     title: "Customer Login",
  //     projectLink: "https://www.gati.com/customer-portal/",
  //   },
  //   {
  //     title: "Vendor Login",
  //     projectLink: "https://www.gati.com/partnerlogin/index.jsp",
  //   },
  //   {
  //     title: "Business Partner Login",
  //     projectLink: "https://www.gati.com/GatiBP/index.jsp",
  //   },
  //   {
  //     title: "Enquire Now",
  //     projectLink: "https://www.gati.com/contact-us/contact-details/",
  //   },
  //   {
  //     title: "Genie",
  //     projectLink: "https://api.whatsapp.com/send?phone=917400012000&text=Hi",
  //   },
  //   {
  //     title: "Track Your Parcel",
  //     projectLink: "To be API integrated",
  //   },
  //   {
  //     title: "Calculate Rate & Transit Time",
  //     projectLink: "https://www.gati.com/shipping-cost-calculator/",
  //   },

  //   {
  //     title: "Pickup Request",
  //     projectLink: "https://www.gati.com/courier-pickup-request/",
  //   },
  //   {
  //     title: "Collaborating with key customers",
  //     projectLink: "New pages",
  //   },
  //   {
  //     title: "Geared to covert our first and last mile",
  //     projectLink: "New pages",
  //   },
  //   {
  //     title: "Group's overall objective",
  //     projectLink: "New pages",
  //   },
  // ];

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
    setShowChat(true);
    setShowMenu(false);
    setShowTrack(false);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleCloseTrack = () => {
    setShowTrack(false);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleRateTransit = () => {
    window.location.href = 'https://www.gati.com/shipping-cost-calculator/';
  }

  const handlePickUp = () => {
    window.location.href = 'https://www.gati.com/courier-pickup-request/';
  }

  const iconUI = () => {
    return (
      <>
        <span className="plus_icon accordion_icon">
          <span class="iconify" data-icon="mdi-light:plus"></span>
        </span>
        <span className="minus_icon accordion_icon">
          <span class="iconify" data-icon="mdi-light:minus"></span>
        </span>
      </>
    );
  };

  const serviceSubLinks = () => {
    return (
      <div className="inner_accordion_links">
        {service.map((service) => {
          return (
            <a href={service.projectLink} className="sub_links">
              {service.title}
            </a>
          );
        })}
      </div>
    );
  };

  const toolsSubLinks = () => {
    return (
      <div className="inner_accordion_links">
        {tools.map((tool) => {
          return (
            <a href={tool.projectLink} className="sub_links">
              {tool.title}
            </a>
          );
        })}
      </div>
    );
  };

  const userTypeLogin = () =>{
    return (
      <div className="btn_grp">
        {
          loginUser.map(loginUser => {
            return(
              <a href={loginUser.portalLink} className="login_typr_btn" target="_blank">{loginUser.title}</a>
            )
          })
        }
      </div>
    )
  }

  const menuUI = () => {
    return (
      <>
        {showMenu && (
          <div className="toogleMenu">
            <Accordion>
              {gatiMenu.map((subsec, item) => {
                return (
                  <Accordion.Item eventKey={item}>
                    <Accordion.Header>
                      {subsec.title === "Services" || subsec.title === "Tools"
                        ?  <span className="accordion_txt">{subsec.title}</span>
                        :  <a href={subsec.projectLink} className="accordion_txt">{subsec.title}</a>}
                     
                      {subsec.title === "Services" || subsec.title === "Tools"
                        ? iconUI()
                        : ""}
                    </Accordion.Header>
                    <Accordion.Body className={subsec.title === "Services" ? "service_body" : subsec.title === "Tools" ? "tools_body" : "others_body"}>
                      {
                        subsec.title === "Services" ? serviceSubLinks() :
                        subsec.title === "Tools" ? toolsSubLinks() : 
                        ""
                      }
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
              {/* <Accordion.Item eventKey="0">
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
                    {
                      service.map(service => {
                        return(
                          <a href={service.projectLink} className="sub_links">{service.title}</a>
                        )
                      })
                    }
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
                    {
                      tools.map(tool => {
                        return(
                          <a href={tool.projectLink} className="sub_links">{tool.title}</a>
                        )
                      })
                    }
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
                  <a href="#" title="" className="toogle_menu_links">
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
              </Accordion.Item> */}
            </Accordion>

            <div className="login_area">
              <h2 className="menu_heaing">Login</h2>
              {
                userTypeLogin()
              }
              
            </div>
            <div className="enquire_area">
              <h2 className="menu_heaing">
                <a href="https://www.gati.com/contact-us/contact-details/">Enquire Now</a>
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
        {showTrack && (
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
                <button className="track_btn">Track</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const whatsAppUI = () => {
    return (
      <>
        {showChat && (
          <div className="whatsapp_chat_area">
            <div className="close_modal" onClick={handleCloseChat}>
              <span class="iconify" data-icon="mi:close"></span>
            </div>
            <div className="genie_chat_area">
              <a href="https://api.whatsapp.com/send?phone=917400012000&text=Hi">
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
        )}
      </>
    );
  };

  const sideMenu = [
    {
      id: 1,
      imgUrlOne: 'hamburger',
      imgUrlTwo: 'close',
      altText: 'hamburger',
      title: ''
    },
    {
      id: 2,
      imgUrlOne: 'tracking-app',
      imgUrlTwo: '',
      altText: 'tracking',
      title: 'Track\nYour\nParcel'
    },
    {
      id: 3,
      imgUrlOne: 'whatsapp',
      imgUrlTwo: '',
      altText: 'whatsapp',
      title: 'Chat\nWith Us'
    },
    {
      id: 4,
      imgUrlOne: 'calculator',
      imgUrlTwo: '',
      altText: 'calculator',
      title: 'Rate &\nTransit\nTime'
    },
    {
      id: 5,
      imgUrlOne: 'package',
      imgUrlTwo: '',
      altText: 'package',
      title: 'Pick Up\nRequest\n'
    }
  ]

  const gatiMenu = [
    {
      title: "Services",
      projectLink: "",
    },
    {
      title: "Tools",
      projectLink: "",
    },
    {
      title: "Media",
      projectLink: "https://www.gati.com/media-center/press-coverages/",
    },
    {
      title: "Career",
      projectLink: "https://www.gati.com/careers/working-with-gati/",
    },
    {
      title: "Blogs",
      projectLink: "https://www.gatikwe.com/blog/",
    },
    {
      title: "About Us",
      projectLink: "https://www.gatikwe.com/about-us/gati-kwe-profile/",
    },
  ]

  const service = [
    {
      title: "Express Distribution",
      projectLink: "https://www.gatikwe.com/our-services/express-distribution/",
    },
    {
      title: "Retail Services",
      projectLink:
        "https://www.gatikwe.com/our-services/special-services/bike-express/",
    },
    {
      title: "Supply Chain Solutions",
      projectLink: "https://www.gati.com/supply-chain-logistics-solutions/",
    },
    {
      title: "Air Freight",
      projectLink: "https://www.gatikwe.com/air-freight/",
    },
  ]

  const tools = [
    {
      title: "Calculate Rate & Transit Time",
      projectLink: "https://www.gati.com/shipping-cost-calculator/",
    },
    {
      title: "ESS Matrix",
      projectLink: "https://www.gati.com/pdf/ESS_matrix.pdf",
    },
    {
      title: "Claim Registration",
      projectLink: "https://www.gati.com/claims-process/",
    },
    {
      title: "Convert Weight/Volume",
      projectLink: "https://www.gatikwe.com/tools/convert-weight-volume/",
    },
    {
      title: "View Fuel & Diesel Surcharge",
      projectLink: "https://www.gati.com/tools/view-fuel-diesel-surcharge/",
    },
    {
      title: "Pin Code Serviceability",
      projectLink: "https://www.gati.com/contact-us/locate-us/",
    },
    {
      title: "Prohibited Goods fro Shipping",
      projectLink:
        "https://www.gatikwe.com/tools/prohibited-goods-for-shipping/",
    },
    {
      title: "Dowload GST Invoice",
      projectLink: "https://www.gati.com/our-services/gst-solutions/",
    },
  ]

  const loginUser = [
    {
      title: "Customer",
      portalLink: "https://www.gati.com/customer-portal/"
    },
    {
      title: "Vendor",
      portalLink: "https://www.gati.com/partnerlogin/index.jsp"
    },
    {
      title: "Business Partner",
      portalLink: "https://www.gati.com/GatiBP/index.jsp"
    }
  ]

  const menuClickHandlers = {
    1: showMenu ? handleCloseMenu : handleShowMenu,
    2: handleShowTrack,
    3: handleShowChat,
    4: handleRateTransit,
    5: handlePickUp,
  };
  

  return (
    <>
      <section className="hero_area">
        <div className="vertical_navabar">
          <nav>
            <ul>
              {
                sideMenu.map(menu => {
                  return(
                    <li 
                      className={
                        menu.id === 1 ? "link_one" :
                        menu.id === 2 && showTrack ? "link_two active_link" :
                        menu.id === 3 && showChat ? "link_three active_link" :
                        menu.id === 4 ? "link_four" :
                        menu.id === 5 ? "link_five" :
                        ""
                      }
                    >
                      <div onClick={menuClickHandlers[menu.id] || ""}>
                        {
                          menu.id === 1 && showMenu ? <img src={"images/" + menu.imgUrlTwo + ".png"} alt={menu.altText} /> :
                          <img src={"images/" + menu.imgUrlOne + ".png"} alt={menu.altText} />
                        }
                      
                        <span className="sideMenuTitle">{menu.title}</span>
                      </div>
                      {
                        menu.id === 1 ? menuUI() :
                        menu.id === 2 ? trackUI() :
                        menu.id === 3 ? whatsAppUI() :
                        ""
                       }
                    </li>
                  )
                })
              }
              {/* <li className="link_one">
                <img
                  onClick={showMenu ? handleCloseMenu : handleShowMenu}
                  src={showMenu ? "images/close.png" : "images/hamburger.png"}
                  alt="Hamburger"
                />
                {menuUI()}
              </li>
              <li className={showTrack ? "link_two active_link" : "link_two"}>
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
              <li className={showChat ? "link_three active_link" : "link_three"}>
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
              </li> */}
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
              <a href="https://www.gati.com/courier-pickup-request/"> <span>Get Started</span></a>
              <span class="iconify" data-icon="iconoir:arrow-right"></span>
            </button>
          </div>
        </div>
        <div className="right_hero_sec">
          <div className="banner_img">
       <a href="https://youtu.be/DvUfjFaAfO4?si=zVvOyjH0ALe0GyiB">     <img src="images/main.png" alt="banner_img" /></a>
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
              <iframe
                src="https://www.youtube.com/embed/DvUfjFaAfO4?si=zVvOyjH0ALe0GyiB?modestbranding=0&autohide=0&showinfo=0&controls=0&disablekb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Countedup />
      <CardHover />
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
                <a href="">
                  {" "}
                  <img
                    className=" w-100"
                    src="/images/card1.png"
                    alt="Card image cap"
                  />
                </a>
              </div>
              <div className="card-body pt-0 border-0">
                <a href="">
                  {" "}
                  <p className="card-text">
                    Collaborating with key customers to use Electric Vehicles
                    for pick-ups and deliveries
                  </p>{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <a href="">
                  {" "}
                  <img
                    className=" w-100"
                    src="/images/card2.png"
                    alt="Card image cap"
                  />
                </a>
              </div>
              <div className="card-body pt-0 border-0">
                <a href="">
                  <p className="card-text">
                    Geared to convert our first and last mile fleet to alternate
                    fuel by 2025
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <a href="">
                  {" "}
                  <img
                    className=" w-100"
                    src="/images/card3.png"
                    alt="Card image cap"
                  />
                </a>
              </div>
              <div className="card-body pt-0 border-0">
                <a href="">
                  <p className="card-text">
                    Aligning with Allcargo Group’s overall objective of being
                    carbon neutral by 2040
                  </p>
                </a>
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
