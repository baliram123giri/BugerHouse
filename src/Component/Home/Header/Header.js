import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

const compStyle = {
    header:{
        color:"#fff",
        minHeight:"100vh"
    },
   
}

const Header = () => {
   
    return (
        <>
             <header className="container-fluid px-5 py-4 " style={compStyle.header}>
               <Navbar />
               <Banner />
             </header>
        </>
    )
}

export default Header
