import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps, Redirect } from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';
import * as Auth from './config/auth';

const Application: React.FunctionComponent<{}> = props => {

  useEffect(() => {
    logging.info('Loading app...');
  }, []);



  const PrivateRoute = ({component, ...rest}: any) => {
    const routeComponent = (props: any) => (
      Auth.isValidToken()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};


  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return route.private ? (
              <PrivateRoute 
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />                                      
                )}
              ></PrivateRoute>
            ) : (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />                                      
                )}
              ></Route>
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default Application;