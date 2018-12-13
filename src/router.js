import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Admin from './admin';
import Login from './pages/login';
import Home from './pages/home';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousels';
import FormLogin from './pages/form/login';
import FormReg from './pages/form/register';
import BasicTable from './pages/table/basic';
import HighTable from './pages/table/high';
import City from './pages/city';
import Order from './pages/order';
import Common from './common';
import Detail from './pages/order/detail';
import User from './pages/user';
import Map from './pages/map/map';
import Bar from './pages/charts/bar';
import Pie from './pages/charts/pie';
import Line from './pages/charts/line';
import Rich from './pages/rich';
import Privile from './pages/privilege';

class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/common"
              render={() => (
                <Common>
                  <Switch>
                    <Route path="/common/order/detail/:id" component={Detail} />
                  </Switch>
                </Common>
              )}
            />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route path="/ui/modals" component={Modals} />
                    <Route path="/ui/loadings" component={Loadings} />
                    <Route path="/ui/notification" component={Notice} />
                    <Route path="/ui/messages" component={Messages} />
                    <Route path="/ui/tabs" component={Tabs} />
                    <Route path="/ui/gallery" component={Gallery} />
                    <Route path="/ui/carousel" component={Carousels} />
                    <Route path="/form/login" component={FormLogin} />
                    <Route path="/form/reg" component={FormReg} />
                    <Route path="/table/basic" component={BasicTable} />
                    <Route path="/table/high" component={HighTable} />
                    <Route path="/city" component={City} />
                    <Route path="/order" component={Order} />
                    <Route path="/user" component={User} />
                    <Route path="/user" component={User} />
                    <Route path="/bikeMap" component={Map} />
                    <Route path="/charts/bar" component={Bar} />
                    <Route path="/charts/pie" component={Pie} />
                    <Route path="/charts/line" component={Line} />
                    <Route path="/rich" component={Rich} />
                    <Route path="/permission" component={Privile} />
                    <Route component={NotFound} />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default IRouter;
