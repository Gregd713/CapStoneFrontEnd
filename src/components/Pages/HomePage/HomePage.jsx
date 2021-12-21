import React from 'react';
import Button from '@mui/material/Button';
import Army from '../Images/Army.png';
import AirForce from '../Images/sealAirForce.png';
import SpaceForce from '../Images/SpaceForce.png';
import Navy from '../Images/Navy.png';
import Marines from '../Images/Marines.png';
import CoastGuard from '../Images/CoastGuard.png'
import './HomePage.css'

function HomePage(props){
    return(
        
        <div className="background-container">
            <div>
            <img className="army" src={Army}/>
            </div>

            <div>
            <img className="airforce" src={AirForce}/>
            </div>

            <div>
            <img className="spaceforce" src={SpaceForce}/>
            </div>

            <div>
            <img className="navy" src={Navy}/>
            </div>

            <div>
            <img className="marines" src={Marines}/>
            </div>

            <div>
            <img className="coastguard" src={CoastGuard}/>
            </div>


            <div className="title-holder">
            <h1>LIFE 214</h1>
            <h3>Service Member to Civilian Transitional Guidance Group</h3>  
            </div>

            <div className='intro-paragraph'>
            <h4>Site tailored by veterans for veterans.
            </h4>
            <h4>
            Here we guide and mentor service members making the jump to life outside the 
            military. We do this by making sure we all have each other's backs into a new frontier by connecting you 
            with those who have already made the change.
            </h4>
            </div>

            <div className='route-buttons'>
            <Button variant="contained" href="/login" >Login</Button>
            <Button  variant="contained"className="middle-button" href="/register">Sign-up</Button>
            <Button variant="contained" href="/about">About</Button>
            </div>
        </div>
    )
}
export default HomePage