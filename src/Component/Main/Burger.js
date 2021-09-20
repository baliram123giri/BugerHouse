import React from 'react'
const Burger = () => {
    return (
         <>
            <div className="row my-5 text-white fw-bold">
                <div className="col-12 col-md-6">
                      <div className="burger position-relative">
                          <div className="text position-absolute p-4  ">
                             <h4 className="tryheading">
                               TRY IT TODAY
                             </h4>
                             <h2 className="tryheading2">
                               MOST POPULER BURGER
                             </h2>
                          </div>
                          <div className="image_burger">
                              <img src="../img/Popular Burger.png" width="100%" alt="" />
                          </div>
                      </div>
                </div>
                <div className="col-12 col-md-6 justify-content-between d-flex flex-column">
                      <div className="burger position-relative mt-sm-3  mt-md-0">
                          <div className="text position-absolute p-4   ">
                             <h4 className="tryheading">
                               TRY IT TODAY
                             </h4>
                             <h2 className="tryheading2">
                              MORE FUN <br /> MORE TASTE
                             </h2>
                          </div>
                          <div className="image_burger">
                              <img src="../img/Popular Burger2.png" width="100%" alt="" />
                          </div>
                      </div>
                      <div className="row ">
                      <div className="burger position-relative  mt-sm-3">
                          <div className="text position-absolute p-4  ">
                             <h4 className="tryheading">
                               TRY IT TODAY
                             </h4>
                             <h2 className="tryheading2">
                              FRESH & CHILLI
                             </h2>
                          </div>
                          <div className="image_burger">
                              <img src="../img/Popular Burger3.png" width="100%" alt="" />
                          </div>
                      </div>
                      </div>
                </div>

            </div>
         </>
    )
}

export default Burger
