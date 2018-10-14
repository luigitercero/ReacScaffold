import React from 'react';
import request from 'superagent';
import firebase from 'firebase';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users: [],

    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut =this.handleLogOut.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }

    componentWillMount() {
      firebase.auth().onAuthStateChanged(user=>{
        this.setState({user})
      })
    }
    componentDidMount() {
        request
        .get('//localhost:3001/api/users')
        .end((err,res)=> {
            const users = JSON.parse(res.text).users;
            this.setState({
                users:users,
                user:null
            })
        })
    }
    handleAuth() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(result =>console.log(`${result.user.email} ha iniciado sesion`) )
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleLogOut() {
      firebase.auth().signOut()
      .then(result =>console.log(`${result.user.email} ha salido`) )
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));;
    }
    renderLoginButton() {
      if (this.state.user){
        return(
        <div>
          <img src = {this.state.user.photoURL} alt = {this.state.user.displayName}/>
          <p>hola {this.state.user.displayName}</p>
          <button onClick= {this.handleLogOut}>LogOut</button>
        </div>);
      }else {
        return (
        <button onClick= {this.handleAuth}>Login con google</button>
        );
      }
    }
    render() {
        var users = this.state.users.map((user) => {
          return <li >{user.nombre}</li>
        });
        return(
          <div>
            {this.renderLoginButton()}
            <h1>Mi Aplicación Modificada</h1>
            <ul>
              {users}
            </ul>
          </div>
    
        )
    }
}

export default App;