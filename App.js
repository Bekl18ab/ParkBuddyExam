import React, { useEffect, useState } from 'react';
import firebase from "./firebase";
import MainNavigation from './components/Navigation/Main';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsLoggedIn(user)
    });
    
  }, [])
  
  return (
    <MainNavigation auth={isLoggedIn} />
  )
}

export default App;