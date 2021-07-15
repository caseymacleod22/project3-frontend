import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import MyStadiums from './components/MyStadiums/MyStadiums';
import Stadiums from './components/Stadiums/Stadiums'


export default function App() {
  const [stadiums, setStadiums] = useState([])
  
    async function getAppData() {
    const BASE_URL = 'http://localhost:3001/api/stadiums'
    const data = await fetch(BASE_URL).then(res => res.json())
    setStadiums(data)
    // console.log(data)
  }

  useEffect(() => {
    getAppData()
  }, [])


return (
<div className="App">
  <header className="App-header">
    <Header />
  </header>
  <Router>
  <Switch>
    <Router>
      <div> 
        <Route exact path='/'>
          <Stadiums data={stadiums} getAppData={getAppData}/>
        </Route>
         <Route exact path='/mystadiums'>
           <MyStadiums />
         </Route>
      </div> 
    </Router> 
  </Switch> 
  </Router>
 </div>
  );
}
  
  
  
  

