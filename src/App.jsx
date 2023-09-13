import React from 'react'
import Header from './components/Header'
import Item from './components/Item'

let teams = [
    {
      team: "United States",
      extension: ".webp"
    }, 
    {
      team: "Argentina",
      extension: ".jpg"
    }, 
    {
      team: "Bolivia",
      extension: ".jpg"
    }, 
    {
      team: "Brazil",
      extension: ".jpg"
    }, 
    {
      team: "Chile",
      extension: ".avif"
    }, 
    {
      team: "Colombia",
      extension: ".avif"
    }, 
    {
      team: "Ecuador",
      extension: ".avif"
    }, 
    {
      team: "Paraguay",
      extension: ".jpg"
    }, 
    {
      team: "Peru",
      extension: ".jpg"
    }, 
    {
      team: "Uruguay",
      extension: ".jpg"
    }, 
    {
      team: "Venezuela",
      extension: ".jpg"
    }
]


function App() {

  return (
    <div className="bg-slate-600">
       <Header />
        <div className="flex flex-row flex-wrap justify-between items-center">
          {teams.map(({team, extension}, index) => (
            <div key={index}>
              <Item team={team} extension={extension}/>
            </div>
          ))}
          </div>
    </div>
  )
}

export default App
