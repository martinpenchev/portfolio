import HomePage from '../pages/HomePage';
import { IRouteProps } from './types';

const routesConfig: IRouteProps[] = [
  // Public
  { id: 1, component: HomePage, path: '/', title: 'Home', exact: true },
];

export default routesConfig;
