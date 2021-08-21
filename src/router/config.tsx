import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import SnippetsPage from '../pages/SnippetsPage';
import { IRouteProps } from './types';

const routesConfig: IRouteProps[] = [
  // Public
  { id: 1, component: HomePage, path: '/', title: 'Home', exact: true },
  { id: 2, component: ProjectsPage, path: '/projects', title: 'Projects', exact: true },
  { id: 3, component: SnippetsPage, path: '/snippets', title: 'Snippets', exact: true },
];

export default routesConfig;
