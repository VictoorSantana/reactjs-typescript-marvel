import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginRoute from './routes/login.route'
import CharacterRoute from './routes/character/index'



// const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         true ? (
//           <React.Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// }


const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={(props: any) => <LoginRoute  {...props}></LoginRoute>}></Route>

        <Route path="/personagens" component={(props: any) => <CharacterRoute {...props}></CharacterRoute>}></Route>        
      </Switch>
    </BrowserRouter>
  )
}
export default routes;