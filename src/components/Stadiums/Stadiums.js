import { Link } from 'react-router-dom'
import React from 'react'


function handleClick(props) {
  const test = (props.data.beenThere = true)
  console.log(test)
        
    }


const Stadiums = (props) => { 
    return (
        <div>
            
            <Link to='/mystadiums'>My Stadiums</Link>
                {props.data.map((stadiums) => {
                // console.log(stadiums)
                return (
            <div className='stadiums'>{stadiums.stadiumName}
                <p>{stadiums.location}</p>
                <Link to='/mystadiums' className='btn' onClick={() => handleClick(props)}>I've Been There!</Link>
            </div>
                )
            })}
        </div>
    )}

  export {Stadiums, handleClick}