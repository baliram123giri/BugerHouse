import React from 'react'
import Burger from './Burger'
import ContactForm from './ContactForm'
import Product from './Product'
import UpcomingEvents from './UpcomingEvents'




const Main = () => {

    return (
        <>
          <div className="mainarea">
          <div className="container" >
           <Burger/>
           <Product />
           <UpcomingEvents />
          
           </div>
           <div  className="contact_form1 p-5"  style={{backgroundImage:"url(../img/Plate.png)"}}>
           <ContactForm  />
           </div>
       
          </div>
        </>
    )
}

export default Main
