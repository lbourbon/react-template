import React, { useState, useEffect } from 'react'
import history from '../history'
import firebase from '../firebase/config';
import "firebase/auth";

const UserContext = React.createContext()

function UserContextProvider(props){

  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (user) => {
        setIsSignedIn(!!user)
        setCurrentUser(user)
      }
    )
  }, [])

  function signOut() {
    console.log("sign out")
    firebase.auth().signOut().then(function() {
      history.push("/")
      }).catch(function(error) {
        console.log("Erro ao fazer logout")
    })

  }


  return <UserContext.Provider value={{isSignedIn, signOut, currentUser}}>
            {props.children}
         </UserContext.Provider>
}

export  {UserContextProvider, UserContext}
