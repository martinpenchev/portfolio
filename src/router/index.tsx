import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import routesConfig from './config';
import PageNotFound from '../pages/PageNotFound';

const Routes: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const currentRoute = routesConfig.find((route) => route.path === location.pathname);

    if (currentRoute) {
      document.title = currentRoute.title;
    }
  }, [location]);

  return (
    <Switch>
      {routesConfig.map(({ path, component, exact }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
