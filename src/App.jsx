import React from 'react'
import Header from './components/Header'
import Item from './components/Item'
import UnitedStates from "../public/teams/United States.webp"
import Argentina from "../public/teams/Argentina.jpg"
import Bolivia from "../public/teams/Bolivia.jpg"
import Brazil from "../public/teams/Brazil.jpg"
import Chile from "../public/teams/Chile.avif"
import Colombia from "../public/teams/Colombia.avif"
import Ecuador from "../public/teams/Ecuador.webp"
import Paraguay from "../public/teams/Paraguay.jpg"
import Peru from "../public/teams/Peru.jpg"
import Uruguay from "../public/teams/Uruguay.jpg"
import Venezuela from "../public/teams/Venezuela.jpg"

let teams = [
    {
      team: "United States",
      image: UnitedStates,
      description: "Host Nation",
      link: "https://www.ussoccer.com/"
    }, 
    {
      team: "Argentina",
      image: Argentina,
      description: "15 Time Winner & 2021 Champs",
      link: "https://www.afa.com.ar/en/"
    }, 
    {
      team: "Bolivia",
      image: Bolivia,
      description: "1963 Winner",
      link: "https://www.fbf.com.bo/"
    }, 
    {
      team: "Brazil",
      image: Brazil,
      description: "9 Time Winner",
      link: "https://www.cbf.com.br/"
    }, 
    {
      team: "Chile",
      image: Chile,
      description: "2 Time Winner",
      link: "https://www.anfp.cl/"
    }, 
    {
      team: "Colombia",
      image: Colombia,
      description: "2001 Winner",
      link: "https://fcf.com.co/"
    }, 
    {
      team: "Ecuador",
      image: Ecuador,
      description: "4th Place in 1959 & 1993",
      link: "https://www.fef.ec/"
    }, 
    {
      team: "Paraguay",
      image: Paraguay,
      description: "2 Time Winner & 2011 Runner Up",
      link: "https://www.apf.org.py/"
    }, 
    {
      team: "Peru",
      image: Peru,
      description: "2 Time Winner",
      link: "https://fpf.org.pe/"
    }, 
    {
      team: "Uruguay",
      image: Uruguay,
      description: "15 Time Winner",
      link: "https://www.auf.org.uy/"
    }, 
    {
      team: "Venezuela",
      image: Venezuela,
      description: "4th Place in 2011",
      link: "https://www.federacionvenezolanadefutbol.org/"
    }
]


function App() {

  return (
    <div className="bg-slate-600">
       <Header />
        <div className="flex flex-row flex-wrap gap-8 justify-evenly items-center mx-5">
          {teams.map(({team, image, description, link}, index) => (
            <div key={index}>
              <Item team={team} image={image} description={description} link={link}/>
            </div>
          ))}
          </div>
    </div>
  )
}

export default App
