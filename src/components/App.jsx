import React from 'react';
import request from 'superagent'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }


    componentDidMount() {
        request
        .get('//localhost:3001/api/users')
        .end((err,res)=> {
            const users = JSON.parse(res.text).users;
            this.setState({
                users:users
            })
        })
    }

    render() {
     
        var users = this.state.users.map((user) => {
          return <li >{user.nombre}</li>
        });
        return(
          <div>
            <h1>Mi Aplicación Modificada</h1>
            <ul>
              {users}
            </ul>
          </div>
    
        )
    }
}

export default App;