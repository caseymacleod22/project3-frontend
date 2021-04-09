import { Link } from 'react-router-dom'


function AddStadium() {
    
    console.log("I've been there!")
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
                <Link to='/mystadiums' className='btn' onClick={AddStadium}>I've Been There!</Link>
            </div>
                )
            })}
        </div>
    )}

  export default Stadiums