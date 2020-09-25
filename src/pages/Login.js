import React, {useContext} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase/config';
import uiConfig from '../firebase/uiConfig';
import { UserContext } from '../context/userContext'

const styles = {
  root:{
    width: '95%',
    maxWidth: '800px',
    margin: '0 auto',
    paddingTop: 50,
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  buttonsContainer:{
    margin: '0 auto',
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const {isSignedIn, currentUser, signOut} = useContext(UserContext)

  const displayName = currentUser ? currentUser.displayName : ""

  const subtitle = !isSignedIn ? "Escolha a forma de Login" : `Você está logado, ${ displayName}`

  const loginButtons =   !isSignedIn ?
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            :
                <Button color="danger" onClick={() => signOut()}>
                  SAIR
                </Button>

  return (
    <div  className={classes.root}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Login</h4>
              <p className={classes.cardCategoryWhite}>{subtitle}</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <div className={classes.buttonsContainer}>
                    {loginButtons}
                </div>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
