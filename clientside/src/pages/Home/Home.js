import React from 'react'
import Navbar from './Navbar/Navbar'
import PreviewCards from './PreviewCards/PreviewCards'
import Map from './Map/Map'
import './Home.css'

function Home( {logout} ) {
  return (
   <>
   <Navbar logout={() => logout()}/>
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