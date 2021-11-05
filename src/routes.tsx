import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './pages/Auth'
import { Recover } from './pages/Recover'
import { Dashboard } from './pages/Dashboard' 
import { Sponsors } from './pages/Sponsors' 
import { SponsorsCreate } from './pages/SponsorsCreate' 


export function Routes() {
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/recover" exact component={Recover}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/sponsors" exact component={Sponsors}/>
        <Route path="/sponsors-create" exact component={SponsorsCreate}/>
        
      </Switch>
        
      </BrowserRouter>
    );
  }