import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Admin from './admin';
import Login from './pages/login';
import Home from './pages/home';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';

class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() => 
            <Admin>
              <Switch>
                <Route path="/admin/home" component={Home} />
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route component={NotFound} />
              </Switch>
            </Admin>
          } />
        </App>
      </HashRouter>
    ); 
  }
}

export default IRouter;