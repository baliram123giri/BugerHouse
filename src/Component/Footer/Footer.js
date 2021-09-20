import React from 'react'
import { Room, Email } from '@material-ui/icons'
const Footer = () => {
    return (
        <>
            <footer style={{ backgroundImage: "url(../img/FooterBG.png)" }}>
                <div className="container text-white">
                    <div className="row py-5 align-items-center">
                        <div className="col-12 col-md-6 ">
                            <a href="#" ><img src="../img/FooterLogo.png"  width="100%"  alt="" /></a>
                            <p className="para my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div className="d-flex justify-content-end" >
                                <div>
                                    <h6 className=" b_heading3 d-block border-0">  <Room /> Main Road, Building Name, Country</h6>
                                    <h6 className="b_heading3 d-block border-0 text-white">  <Email /> info@companyname.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pb-4">
                        <div className="col-12 col-md-6">
                            <h6 className=" copyright fw-lighter">  © Company Name 2020. All rights reserved.</h6>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link  rounde"  href="#"><i class="fab fa-facebook-f rounded-circle bg-white text-dark d-flex justify-content-center align-items-center"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link rounde " href="#"> <i class="fab fa-instagram rounded-circle bg-white text-dark d-flex justify-content-center align-items-center"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link rounde " href="#"><i class="fab fa-twitter rounded-circle bg-white text-dark d-flex justify-content-center align-items-center"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  rounde " href="#" ><i class="fab fa-whatsapp rounded-circle bg-white text-dark d-flex justify-content-center align-items-center"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
