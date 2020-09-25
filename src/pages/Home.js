import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles, Button } from '@material-ui/core'
import {UserContext} from '../context/userContext'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'red',
  }
  }))


function Home(){
  const classes = useStyles()
  const { isSignedIn, signOut } = useContext(UserContext)

  return(
    <div className={classes.root}>
      Home
      {isSignedIn ?
        <div>
          <Button className={classes.item}><Link className={classes.loginLink} to="/new">ENTRAR</Link></Button>
          <Button to="" onClick={() => signOut()} className={classes.item}>LOGOUT</Button>
        </div>
            :
            <Button variant="outlined" size="small" className={classes.login}><Link className={classes.loginLink} to="/login">Login</Link></Button>
          }

    </div>
  )
}
export default Home
