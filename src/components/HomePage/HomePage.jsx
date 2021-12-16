import React from 'react';
import './HomePage.css'

function HomePage(props){
    return(
        <div className="background-container">
            <div className="title-holder">
            <h1>AFTER SERVICE</h1>
            <h3>Service Member to Civilian Transitional Guidance Group</h3>  
            </div>

            <div className='intro-paragraph'>
            <h4>Site tailored by former service members, for service members
            making the transition from the military and gradually 
            into civilian life.
            </h4>
            </div>

            <div className='route-buttons'>
            <button  href="/login">Login</button>
            <button  className="middle-button" href="/signup">Sign-up</button>
            <button  href="/about">About</button>
            </div>
        </div>
    )
}
export default HomePage