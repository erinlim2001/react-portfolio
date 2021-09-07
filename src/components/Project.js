import React from 'react'
import Ticket from "../Ticket.png"
import LongRides from "../LongRides.png"
import Code from '../code.png'
import Weather from '../Weather.png'
import Eridium from '../eridium.png'
import Fitness from '../fitness.png'

const Project = () => {
    return (
        <div className="work-section">
             <h2 id="work">Projects</h2>
             <div id="ticketProject">
             <a href="https://github.com/erinlim2001/Ticket_Project_One">
                <img className="ticket" src={Ticket}></img>
             </a>
             <h3 id="horiseon-label">Flight/Hotel Ticket Project: HTML/CSS/Javascript</h3>
             </div>
             <div id="horiseon">
             <a href="https://github.com/erinlim2001/Project_2">
                <img className="longRides" src={LongRides}></img>
             </a>
             <h3 id="horiseon-label">Long Rides Project: HTML/CSS/Node/Javascript</h3>
             </div>
             <div id="horiseon">
             <a href="https://github.com/brandonnorsworthy/eridium">
                <img className="eridium" src={Eridium}></img>
             </a>
             <h3 id="horiseon-label">Eridium Project: MERN Stack</h3>
             </div>
             <div className="row">
                 <div className="column">
                    <a href="https://github.com/erinlim2001/code-quiz">
                        <img className="code" src={Code} ></img>
                    </a>
                    <h3 id="project1-label">Code Quiz: HTML/CSS/Javascript</h3>
                 </div>

                 <div class="column">
                    <a href="https://github.com/erinlim2001/weather-dashboard">
                    <img className="weather" src={Weather}></img>
                    </a>
                    <h3 id="project2-label">Weather Dashboard: HTML/CSS/Javascript</h3>
                </div>
                <div class="column">
                    <a href="https://github.com/erinlim2001/fitness-tracker">
                    <img className="fitness" src={Fitness}></img>
                    </a>
                    <h3 id="project2-label">Fitness Tracker: MongoDB/Express/Javascript</h3>
                </div>
              
             </div>
             
        </div>
    )
}

export default Project
