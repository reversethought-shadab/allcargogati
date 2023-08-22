import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
               <div className="ft-top">
                <div className="row">
                    <div className="col-lg-6">
                       <div className='ft-left d-flex' >
                       <div>
                        <span className=''>Subscribe Now</span>
                        <p>To know more about Allcargo-Gati</p>
                        </div> 
                        <div>
                        <form class="row g-3">
  
  <div class="col-auto">
    <input type="email" class="form-control" id="inputPassword2" placeholder="name@example.com" />
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Go</button>
  </div>
</form>
                        </div>
                        </div> 
                    </div>
                    <div className="col-lg-6"></div>
                </div>
               </div>
                <div className="container">

                    <div className="row border-bottom">
                        <div className="col-lg-2  col-12">
                            <div className="footer-box footer-col-1">
                                <p>SERVICES </p>
                                <ul>
                                    <li>
                                        <a href="">Express Distribution</a>
                                    </li>
                                    <li>
                                        <a href="">End to End Logistics</a>
                                    </li>
                                    <li>
                                        <a href="">Transportation Services</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3  col-12">
                            <div className="footer-box footer-col-1  ">
                                <p>TOOLS</p>
                                <ul >
                                    <li>
                                        <a href="">ESS Matrix</a>
                                    </li>
                                    <li>
                                        <a href="">Fuel & Diesel Surcharge</a>
                                    </li>
                                    <li>
                                        <a href="">Track Your Shipment</a>
                                    </li>
                                   
                                </ul>
                                <ul>
                                    <li><a href="">Rate & Transit Time Calculator</a></li>
                                    <li><a href="">Track Your Shipment</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2  col-12">
                            <div className="footer-box footer-col-1">
                                <p>MEDIA</p>
                                <ul>
                                    <li>
                                        <a href="">Press Release</a>
                                    </li>
                                    <li>
                                        <a href="">Press Coverages</a>
                                    </li>
                                    <li>
                                        <a href="">Press Kit</a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2  col-12">
                            <div className="footer-box footer-col-1">
                                <p>SUPPORT</p>
                                <ul>
                                    <li>
                                        <a href="">Service Complaints</a>
                                    </li>
                                    <li>
                                        <a href="">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="">Quick Facts</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2  col-12">
                            <div className="footer-box footer-col-1">
                                <p>CONNECT US</p>
                                <ul>
                                    <li>
                                        <a href="">Offices in India</a>
                                    </li>
                                    <li>
                                        <a href="">Partner with us</a>
                                    </li>
                                    <li>
                                        <a href="">Media Contacts</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1  col-12">
                            <div className="footer-box footer-col-1 border-0 ">
                              
                                <ul className=''>
                                    <li>
                                        <img src="/images/ftlogo.png" alt="" />
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row footer-bottom-btm align-items-center  pt-4">
                        <span className="m-0 copyright-footer">Copyright ©2023 Allcargo Gati Limited |  Disclaimer Terms & Conditions </span>
                    </div>
                   
                </div>
            </footer>
        </>
    )
}

export default Footer
