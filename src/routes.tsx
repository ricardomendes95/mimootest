import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './pages/Auth'
import { Recover } from './pages/Recover'

export function Routes() {
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/recover" exact component={Recover}/>
        
      </Switch>
        
      </BrowserRouter>
    );
  }