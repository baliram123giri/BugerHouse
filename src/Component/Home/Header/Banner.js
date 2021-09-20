import React from 'react'

const Banner = () => {
    return (
        <>
         
          <div className="row my-2  align-items-center">
              <div className="col-12 col-md-6">
                  <h3 className="b_heading3 p-2 mb-2" >It is a good time for the great taste of burgers</h3>
                  <h1 className="b_heading1   text-uppercase">Burger</h1>
                  <h2 className="b_heading2  text-uppercase ">Week</h2>
              </div>
              <div className=" col-12 col-md-6">
                  <div className="image position-relative ">
                      <img src="../img/BannerImg.png" width="100%" alt="" />
                      <div className="d-inline-block bg-danger rounded-circle p-2  ms-5 position-absolute bottom-0 start-0">
                          <span className="price fw-bold">$5.49  <span className="only fw-light ms-1">  only</span></span>
                      </div>
                  </div>
              </div>
          </div>
       
        </>
    )
}

export default Banner
