import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className="contact_form text-center my-5 position-relative  " >
                <div className="bottle">
                    <img src="../img/Bottle.png" alt="" width="100%" />
                </div>
                <div className="smallburger">
                    <img src="../img/Small Burger1.png"  width="100%" alt="" />
                </div>
                {/* <div className="plate">
                    <img src="../img/Plate.png"  width="100%" alt="" />
                </div> */}
                <h3 className="b_heading3 p-2 mb-2 border-0 " >Reservation</h3>
                <h2 className="b_heading2  text-uppercase text-white ">Book your table</h2>
                <form action="">
                    <div className="row ">
                        <div className="col-12 my-3  col-md-4 offset-md-2">
                            <input type="text" placeholder="NAME" className="form-control" />
                        </div>
                        <div className="col-12 my-3  col-md-4">
                            <input type="email" placeholder="EMAIL" className="form-control" />
                        </div>
                        <div className="col-12 my-3  col-md-4 offset-md-2">
                            <input type="date" placeholder="EMAIL" className="form-control" />
                        </div>
                        <div className="col-12 my-3  col-md-4 ">
                            <input type="time" placeholder="EMAIL" className="form-control" />
                        </div>
                        <div className="col-12 my-3  col-md-4 offset-md-2">
                            <input type="text" placeholder="PEOPLE" className="form-control" />
                        </div>
                        <div className="col-12 my-3  col-md-4 ">
                            <button className="btn btn-danger w-100">FIND TABLE</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm
