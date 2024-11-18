import React from 'react'
import Header from './components/Header'
import Features from './components/Features'
import Footer from './components/Footer'
import data from '../data/data.json'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header title = {data.header.title} subtitle={data.header.subtitle} 
        description={data.header.description} 
        cta={data.header.cta} />
      <Features features={data.features} />
      <Footer contact={data.footer.contact} links={data.footer.links} />
    </div>
  )
}

export default App
