import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './components/Nav'
import Form from './components/Form'
import Cards from './components/Cards.jsx'
import About from './components/About'
import Detail from './components/Detail'
import Favorites from './components/favorites/Favorites';


function App () {
  
  const [characters, setCharacters] = React.useState([]);
  const [access, setaccess] = React.useState(false);
  const navigate = useNavigate()

  const email = 'erick.sanchezcorrea@gmail.com'
  const password = '1234'

  function login(userData){
    if (userData.username == email && userData.password == password ){
      setaccess(true)
      navigate('/home')
    } 
  }
  
  useEffect(() => {
    !access && navigate('/');
  }, [access])
  

  async function onSearch(character) {
    
    let response = await fetch(`https://rickandmortyapi.com/api/character/${character}`)
    let data = await response.json()
    
    try{

      if (characters.find(c => c.id == character)) {
        return;
      }

      if(!response.ok) {
        throw {
          status: response.status, 
          statusText:response.statusText
        }
      }

      setCharacters( [...characters, data])

    }
    catch(error){
      console.warn("Existe un error : " + error.status)
    }

  };

  function onClose(id){
    let newCharacters = characters.filter(c=>c.id !== id )
    setCharacters(newCharacters)
  }

  return (  

    <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route element={<Nav onSearch={onSearch} />} >
            <Route path="/home" element={<Cards characters={ characters.length > 0 && characters} onClose={onClose} />} />  
            <Route path="/about" element={<About />} />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
        
  )
}

export default App
