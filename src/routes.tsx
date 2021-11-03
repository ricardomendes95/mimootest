import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './pages/login'

export function Routes() {
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        
      </Switch>
        
      </BrowserRouter>
    );
  }