import React from 'react'
import Navbar from './Navbar/Navbar'
import PreviewCards from './PreviewCards/PreviewCards'
import Map from './Map/Map'
import './Home.css'

function Home() {
  return (
   <>
   <Navbar/>
    <section className='mainpage'>
      <section className='leftside'>
        <PreviewCards/>
      </section>
      <section className='rightside'>
        <Map/>
      </section>
    </section>
   </>
  )
}

export default Home