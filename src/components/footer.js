import React from 'react';


class Footer extends React.Component{
  render(){
    return(
         <>
                    <footer id="footer">
                        <div class="top-footer">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-4 col-sm-4 marb20">
                                <div class="ftr-tle">
                                <h4 class="white no-padding">About Us</h4>
                                </div>
                                <div class="info-sec">
                                <p>Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 marb20">
                                <div class="ftr-tle">
                                <h4 class="white no-padding">Quick Links</h4>
                                </div>
                                <div class="info-sec">
                                <ul class="quick-info">
                                    <li><a href="index.html"><i class="fa fa-circle"></i>Home</a></li>
                                    <li><a href="#service"><i class="fa fa-circle"></i>Service</a></li>
                                    <li><a href="#contact"><i class="fa fa-circle"></i>Appointment</a></li>
                                </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 marb20">
                                <div class="ftr-tle">
                                <h4 class="white no-padding">Follow us</h4>
                                </div>
                                <div class="info-sec">
                                <ul class="social-icon">
                                    <li class="bglight-blue"><i class="fa fa-facebook"></i></li>
                                    <li class="bgred"><i class="fa fa-google-plus"></i></li>
                                    <li class="bgdark-blue"><i class="fa fa-linkedin"></i></li>
                                    <li class="bglight-blue"><i class="fa fa-twitter"></i></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="footer-line">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-12 text-center">
                                © Copyright Medilab Theme. All Rights Reserved
                                <div class="credits">
                                
                                Designed by <a href="https://medilab.com/">medilab.com</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </footer>
    </>
    );
    }
    }
    export default Footer;
                
