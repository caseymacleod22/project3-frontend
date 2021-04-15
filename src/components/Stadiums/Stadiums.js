import { Link } from 'react-router-dom'
import React from 'react'

const Stadiums = (props) => { 

    const deleteStadium = (stadiumId) => {
    if(window.confirm('Are you sure?'))
    {
        fetch('http://localhost:3001/api/stadiums/stadiums/'+stadiumId,{
            method:'DELETE',
            headers: {'Content-Type': 'Application/json'}
        })
    }
    props.getAppData()
}


    
    return (
        <div>
            
            <Link to='/mystadiums'>My Stadiums</Link>
                {props.data.map((stadiums) => {
                // console.log(stadiums)
                return (
            <div className='stadiums'>{stadiums.stadiumName}
                <p>{stadiums.location}</p>
                <button className='btn' onClick={() => deleteStadium(stadiums._id)}>Remove Stadium</button>
            </div>
                )
            })}
        </div>
    )}



  export default Stadiums