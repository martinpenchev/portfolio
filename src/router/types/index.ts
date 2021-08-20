interface IMetaProps {
  title?: string;
  requiresAuth?: boolean;
  isLoginToHome?: boolean;
}

interface IRedirectProps {
  to: string | object;
  from: string;
  push?: boolean;
  exact?: boolean;
  strict?: boolean;
}

interface IRouteConfigProps {
  id: number;
  path: string;
  component: any;
  exact?: boolean;
  meta?: IMetaProps;
  redirect?: IRedirectProps;
  [propname: string]: any;
}

interface IChildrenRouteProps {
  childrenRoutes?: Array<IRouteConfigProps>;
}

export interface IRouteProps extends IRouteConfigProps, IChildrenRouteProps {}
