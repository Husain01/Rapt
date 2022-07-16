import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './pages/Home/Home';
import { Welcome } from './pages/Welcome/Welcome';

function App() {
  const [photo, setPhoto] = useState('');
  const user = localStorage.getItem("userName");
  useEffect(() => { 
    try {
      (async () => {
        const {data} = await axios.get("https://api.unsplash.com/photos/random/?client_id=HbF7nKqBNGr5fl1Rhj2xYLNxhpWqFW1URj19bDYuiZM&query=aesthetic,landscape,adventure,travel&orientation=landscape");
        setPhoto(data.urls.regular + "&w=1920&h=1080"); 
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])
  
  return (
    <div className="App">
      <div className="bg-img">
      <img src={photo} alt="" className='img' />
      {user ? <Home/> :<Welcome/> }
      </div>
    </div>
  )
}

export default App
