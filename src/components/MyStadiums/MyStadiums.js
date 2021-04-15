import { Link } from 'react-router-dom'
import Stadiums from '../../components/Stadiums/Stadiums'

import {useState, useEffect} from 'react'



function handleClick(props) {
    const test = props.data.beenThere = true
    console.log(test)
          
      }


const MyStadiums = (props) => {
    return (
        <div>
            
            <Link to='/'>HOME</Link>
                {props.data.map((stadiums) => {
                // console.log(stadiums)
                if(stadiums.beenThere === true) {
                return (
            <div className='stadiums'>{stadiums.stadiumName}
                <p>{stadiums.location}</p>
            </div>
                )
            }
            })}
        </div>
    )}

export {MyStadiums, handleClick}