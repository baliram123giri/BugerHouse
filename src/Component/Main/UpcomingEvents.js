import React from 'react'

const UpcomingEvents = () => {
    return (
        <>
            <div className="events bg-white p-4 text-dark ">
                <div className="row">
                    <div className="col-12 col-md-6" >
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators ">
                                <button type="button " data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="slider p-5 ">
                                        <h3 className="b_card_title text-uppercase">Discover</h3>
                                        <h2 className="b_heading2  text-uppercase text-white ">Upcoming Events</h2>
                                        <p className="para ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                <div className="slider p-5 ">
                                        <h3 className="b_card_title text-uppercase">Discover</h3>
                                        <h2 className="b_heading2  text-uppercase text-white ">Upcoming Events</h2>
                                        <p className="para ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                <div className="slider p-5 ">
                                        <h3 className="b_card_title text-uppercase">Discover</h3>
                                        <h2 className="b_heading2  text-uppercase text-white ">Upcoming Events</h2>
                                        <p className="para ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-12 col-md-6 h-100">
                        <div className="slideimg ">
                            <img src="../img/SlideBurger.png" width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpcomingEvents
