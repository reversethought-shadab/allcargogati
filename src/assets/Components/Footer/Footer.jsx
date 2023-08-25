import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="ft-top">
                    <div className="container">
                        <div className="row footer-bottom-btm align-items-center">
                            <div className="col-lg-6 offset-2">
                                <div className='ft_left' >
                                    <div>
                                        <span>SUBSCRIBE NOW</span>
                                        <p>To know more about Allcargo-Gati</p>
                                    </div>
                                    <div class="search_btn">
                                        <input type="email" class="input" placeholder="Email" />
                                        <button class="go_btn">Go</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="">

                                    <ul className='list-unstyled social-icons'>
                                        <li>FOLLOW US</li>
                                        <li><img src="/images/facebook.png" alt="" /></li>
                                        <li><img src="/images/twitter.png" alt="" /></li>
                                        <li><img src="/images/instagram.png" alt="" /></li>
                                        <li><img src="/images/linkedin.png" alt="" /></li>
                                        <li><img src="/images/youtubb.png" alt="" /></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 border-end">
                                <div className="footer_box">
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
                            <div className="col-lg-4 border-end">
                                <div className="footer_row">
                                    <div className="footer_box">
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
                                    </div>
                                    <div className="footer_box">
                                        <ul>
                                            <li><a href="">Rate & Transit Time Calculator</a></li>
                                            <li><a href="">Track Your Shipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 border-end ps-4" >
                                <div className="footer_box">
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
                            <div className="col-lg-4  ">
                                <div className="footer_row">
                                    <div className="footer_box">
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
                                    <div className="footer_box">
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
                                    <div className="footer_box ">
                                        <ul>
                                            <li>
                                                <img src="/images/ftlogo.png" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_sec">
                    <div className="container">
                    <div className="copyright_box mx-5">
                            <span>Copyright ©2023 Allcargo Gati Limited | <a href="" className='text-dark'>Disclaimer</a>  | <a href="" className='text-dark' >Terms & Conditions</a> </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
