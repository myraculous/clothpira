import React from 'react';
import ShopPage from './pages/shop/shop.component';
import { connect } from 'react-redux';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSingUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserprofileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  
  unsubscribeFromAuth = null;
componentDidMount(){
  const {setCurrentUser } = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
   if(userAuth){
     const userRef = await createUserprofileDocument(userAuth);

     userRef.onSnapshot(snapShot => {
      setCurrentUser({
           id:snapShot.id,
           ...snapShot.data()
       });
       
     });

   }
    setCurrentUser( userAuth);
  });
}

componentWillUnmount(){
this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <Header />
         <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSingUpPage} />
  
         </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
