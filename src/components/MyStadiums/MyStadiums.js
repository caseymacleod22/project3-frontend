import { Link } from 'react-router-dom'
import {handleClick} from '../../components/Stadiums/Stadiums'
import {useState, useEffect} from 'react'


const MyStadiums = (props) => {
    return (
    <div>
        <div className="mystadiumslink">
            <h1>My Stadiums</h1>
            <Link to='/'>HOME</Link>
        </div>
    </div>
    )
}

export default MyStadiums