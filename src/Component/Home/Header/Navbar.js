import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="up_nav d-flex  align-items-center justify-content-between">
                <div className="logo">
                    <a href="../index.html"><img src="../img/Logo.svg" alt="" width="100%" /></a>
                </div>
                <div className="fast_delivery d-flex align-items-center" >
                    <div className="delivery_icon"> <img src="../img/Delivery.svg" width="100%" alt="" /></div> <h4 className="d-inline-block m-1 fw-bold  " >Express Delivery +1 234 567 890</h4>
                </div>
            </div>
           
           <div className="clearfix">
           <ul className="nav float-end b_nav">
                <li className="nav-item"><a href="#" className="nav-link  text-uppercase">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link  text-uppercase">Menu</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-uppercase">Our Story</a></li>
                <li className="nav-item"><a href="#" className="nav-link  text-uppercase pe-0">Contact US</a></li>
            </ul>
            <div className="div-float float-start"></div>
           </div>
        </>
    )
}

export default Navbar
