import React from 'react'

const Product = () => {
    return (
        <>
            <div className="product text-center">
                <a href="#" className="btn btn-warning rounded-0 px-4 pt-2  border-0 b_testy_btn">ALWAYS TESTY BURGER</a>
                <h3 className="b_heading2 text-uppercase my-4">
                    Choose & Enjoy
                </h3>
                <p className="para fw-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>

                <div className="row  my-5">
                    <div className="col-12 col-md-4">
                        <div class="card border-0 text-center">
                            <img src="../img/Burger1.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title b_card_title text-uppercase">Lorem ipsum dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                <a href="#" class="btn btn-danger px-5 rounded-0 fw-bold">ORDER NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div class="card border-0 text-center">
                            <img src="../img/Buger2.png" class="card-img-top" width="100%" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title b_card_title text-uppercase">Lorem ipsum dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                <a href="#" class="btn btn-danger px-5 rounded-0 fw-bold">ORDER NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div class="card border-0 text-center"  width="50%">
                            <img src="../img/Burger3.png " class="card-img-top"  alt="..." />
                            <div class="card-body">
                                <h5 class="card-title b_card_title text-uppercase">Lorem ipsum dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                <a href="#" class="btn btn-danger px-5 rounded-0 fw-bold ">ORDER NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
